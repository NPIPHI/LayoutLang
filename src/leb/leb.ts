// Copyright 2012 The Obvious Corporation.

/*
 * leb: LEB128 utilities.
 */


/*
 * Modules used
 */

"use strict";

import * as bits from "./bits";
import * as bufs from "./bufs";


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

/*
 * Exported bindings
 */

export function encodeIntBuffer(buffer: Uint8Array): Uint8Array {
  return encodeBufferCommon(buffer, true);
}

export function encodeInt32(num: number): Uint8Array{
  var buf = new Uint8Array(new Int32Array([num]).buffer);
  // var buf = bufs.alloc(4);
  // buf.writeInt32LE(num, 0);

  var result = encodeIntBuffer(buf);

  bufs.free(buf);
  return result;
}

export function encodeInt64(num: number): Uint8Array {
  let buf = new Uint8Array(new BigUint64Array([BigInt(num)]).buffer);
  // var buf = bufs.alloc(8);
  // bufs.writeInt64(num, buf);

  var result = encodeIntBuffer(buf);

  bufs.free(buf);
  return result;
}

export function encodeUIntBuffer(buffer: Uint8Array): Uint8Array {
  return encodeBufferCommon(buffer, false);
}

export function encodeUInt32(num: number): Uint8Array {
  let buf = new Uint8Array(new Uint32Array([num]).buffer);
  // var buf = bufs.alloc(4);
  // buf.writeUInt32LE(num, 0);

  var result = encodeUIntBuffer(buf);

  bufs.free(buf);
  return result;
}

export function encodeUInt64(num: number): Uint8Array {
  let buf = new Uint8Array(new BigInt64Array([BigInt(num)]).buffer);
  // var buf = bufs.alloc(8);
  // bufs.writeUInt64(num, buf);

  var result = encodeUIntBuffer(buf);

  bufs.free(buf);
  return result;
}