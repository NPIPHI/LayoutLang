// Copyright 2012 The Obvious Corporation.

/*
 * leb: LEB128 utilities.
 */


/*
 * Modules used
 */

"use strict";

var bits = require("./bits");
var bufs = require("./bufs");


/*
 * Module variables
 */

/** The minimum possible 32-bit signed int. */
var MIN_INT32 = -0x80000000;

/** The maximum possible 32-bit signed int. */
var MAX_INT32 = 0x7fffffff;

/** The maximum possible 32-bit unsigned int. */
var MAX_UINT32 = 0xffffffff;

/** The minimum possible 64-bit signed int. */
var MIN_INT64 = -0x8000000000000000;

/**
 * The maximum possible 64-bit signed int that is representable as a
 * JavaScript number.
 */
var MAX_INT64 = 0x7ffffffffffffc00;

/**
 * The maximum possible 64-bit unsigned int that is representable as a
 * JavaScript number.
 */
var MAX_UINT64 = 0xfffffffffffff800;


/*
 * Helper functions
 */

/**
 * Determines the number of bits required to encode the number
 * represented in the given buffer as a signed value. The buffer is
 * taken to represent a signed number in little-endian form.
 *
 * The number of bits to encode is the (zero-based) bit number of the
 * highest-order non-sign-matching bit, plus two. For example:
 *
 *   11111011 01110101
 *   high          low
 *
 * The sign bit here is 1 (that is, it's a negative number). The highest
 * bit number that doesn't match the sign is bit #10 (where the lowest-order
 * bit is bit #0). So, we have to encode at least 12 bits total.
 *
 * As a special degenerate case, the numbers 0 and -1 each require just one bit.
 */
function signedBitCount(buffer: Uint8Array): number {
  return bits.highOrder(bits.getSign(buffer)^1, buffer) + 2;
}

/**
 * Determines the number of bits required to encode the number
 * represented in the given buffer as an unsigned value. The buffer is
 * taken to represent an unsigned number in little-endian form.
 *
 * The number of bits to encode is the (zero-based) bit number of the
 * highest-order 1 bit, plus one. For example:
 *
 *   00011000 01010011
 *   high          low
 *
 * The highest-order 1 bit here is bit #12 (where the lowest-order bit
 * is bit #0). So, we have to encode at least 13 bits total.
 *
 * As a special degenerate case, the number 0 requires 1 bit.
 */
function unsignedBitCount(buffer: Uint8Array): number {
  var result = bits.highOrder(1, buffer) + 1;
  return result ? result : 1;
}

/**
 * Common encoder for both signed and unsigned ints. This takes a
 * bigint-ish buffer, returning an LEB128-encoded buffer.
 */
function encodeBufferCommon(buffer: Uint8Array, signed: boolean): Uint8Array {
  var signBit;
  var bitCount;

  if (signed) {
    signBit = bits.getSign(buffer);
    bitCount = signedBitCount(buffer);
  } else {
    signBit = 0;
    bitCount = unsignedBitCount(buffer);
  }

  var byteCount = Math.ceil(bitCount / 7);
  var result = bufs.alloc(byteCount);

  for (var i = 0; i < byteCount; i++) {
    var payload = bits.extract(buffer, i * 7, 7, signBit);
    result[i] = payload | 0x80;
  }

  // Mask off the top bit of the last byte, to indicate the end of the
  // encoding.
  result[byteCount - 1] &= 0x7f;
  return result;
}

/**
 * Gets the byte-length of the value encoded in the given buffer at
 * the given index.
 */
function encodedLength(encodedBuffer: Uint8Array, index: number): number {
  var result = 0;

  while (encodedBuffer[index + result] >= 0x80) {
    result++;
  }

  result++; // to account for the last byte

  if ((index + result) > encodedBuffer.length) {
    throw new Error("Bogus encoding");
  }

  return result;
}

/**
 * Common decoder for both signed and unsigned ints. This takes an
 * LEB128-encoded buffer, returning a bigint-ish buffer.
 */
function decodeBufferCommon(encodedBuffer: Uint8Array, index: number, signed: boolean): {value: number, nextIndex: number} {
  index = (index === undefined) ? 0: index;

  var length = encodedLength(encodedBuffer, index);
  var bitLength = length * 7;
  var byteLength = Math.ceil(bitLength / 8);
  var result = bufs.alloc(byteLength);
  var outIndex = 0;

  while (length > 0) {
    bits.inject(result, outIndex, 7, encodedBuffer[index]);
    outIndex += 7;
    index++;
    length--;
  }

  var signBit;
  var signByte;

  if (signed) {
    // Sign-extend the last byte.
    var lastByte = result[byteLength - 1];
    var endBit = outIndex % 8;
    if (endBit !== 0) {
      var shift = 32 - endBit; // 32 because JS bit ops work on 32-bit ints.
      lastByte = result[byteLength - 1] = ((lastByte << shift) >> shift) & 0xff;
    }
    signBit = lastByte >> 7;
    signByte = signBit * 0xff;
  } else {
    signBit = 0;
    signByte = 0;
  }

  // Slice off any superfluous bytes, that is, ones that add no meaningful
  // bits (because the value would be the same if they were removed).
  while ((byteLength > 1) &&
         (result[byteLength - 1] === signByte) &&
         (!signed || ((result[byteLength - 2] >> 7) === signBit))) {
    byteLength--;
  }
  result = bufs.resize(result, byteLength);

  return { value: result, nextIndex: index };
}


/*
 * Exported bindings
 */

function encodeIntBuffer(buffer: Uint8Array): Uint8Array {
  return encodeBufferCommon(buffer, true);
}

function decodeIntBuffer(encodedBuffer: Uint8Array, index: number): {value: number, nextIndex: number} {
  return decodeBufferCommon(encodedBuffer, index, true);
}

export function encodeInt32(num: number): Uint8Array {
  if(num >= 0 && num < 128) return new Uint8Array([num]);
  const buf = new Uint8Array(new Int32Array([num]).buffer);

  var result = encodeIntBuffer(buf);

  return result;
}

export function decodeInt32(encodedBuffer: Uint8Array, index: number): {value: number, nextIndex: number} {
  var result = decodeIntBuffer(encodedBuffer, index);
  var parsed = bufs.readInt(result.value);
  var value = parsed.value;

  bufs.free(result.value);

  if ((value < MIN_INT32) || (value > MAX_INT32)) {
    throw new Error("Result out of range");
  }

  return { value: value, nextIndex: result.nextIndex };
}

export function encodeInt64(num: number): Uint8Array {
  const buf = new Uint8Array(new BigInt64Array([BigInt(num)]).buffer);

  var result = encodeIntBuffer(buf);

  return result;
}

export function decodeInt64(encodedBuffer: Uint8Array, index: number): {value: number, nextIndex: number, lossy: boolean} {
  var result = decodeIntBuffer(encodedBuffer, index);
  var parsed = bufs.readInt(result.value);
  var value = parsed.value;

  bufs.free(result.value);

  if ((value < MIN_INT64) || (value > MAX_INT64)) {
    throw new Error("Result out of range");
  }

  return { value: value, nextIndex: result.nextIndex, lossy: parsed.lossy };
}

function encodeUIntBuffer(buffer: Uint8Array): Uint8Array {
  return encodeBufferCommon(buffer, false);
}

function decodeUIntBuffer(encodedBuffer: Uint8Array, index: number): {value: number, nextIndex: number} {
  return decodeBufferCommon(encodedBuffer, index, false);
}

export function encodeUInt32(num: number): Uint8Array {
  const buf = new Uint8Array(new Uint32Array([num]).buffer);

  var result = encodeUIntBuffer(buf);

  bufs.free(buf);
  return result;
}

export function decodeUInt32(encodedBuffer: Uint8Array, index: number): {value: number, nextIndex: number} {
  var result = decodeUIntBuffer(encodedBuffer, index);
  var parsed = bufs.readUInt(result.value);
  var value = parsed.value;

  bufs.free(result.value);

  if (value > MAX_UINT32) {
    throw new Error("Result out of range");
  }

  return { value: value, nextIndex: result.nextIndex };
}

export function encodeUInt64(num: number): Uint8Array {
  const buf = new Uint8Array(new BigUint64Array([BigInt(num)]).buffer);

  var result = encodeUIntBuffer(buf);

  return result;
}

export function decodeUInt64(encodedBuffer: Uint8Array, index: number): {value: number, nextIndex: number, lossy: boolean} {
  var result = decodeUIntBuffer(encodedBuffer, index);
  var parsed = bufs.readUInt(result.value);
  var value = parsed.value;

  bufs.free(result.value);

  if (value > MAX_UINT64) {
    throw new Error("Result out of range");
  }

  return { value: value, nextIndex: result.nextIndex, lossy: parsed.lossy };
}