export const i32 = {
    const: new Uint8Array([0x41]),
    load: new Uint8Array([0x28]),
    store: new Uint8Array([0x36]),
    eqz: new Uint8Array([0x45]),
    eq: new Uint8Array([0x46]),
    ne: new Uint8Array([0x47]),
    lt_s: new Uint8Array([0x48]),
    lt_u: new Uint8Array([0x49]),
    gt_s: new Uint8Array([0x4A]),
    gt_u: new Uint8Array([0x4B]),
    le_s: new Uint8Array([0x4C]),
    le_u: new Uint8Array([0x4D]),
    ge_s: new Uint8Array([0x4E]),
    ge_u: new Uint8Array([0x4F]),
    clz: new Uint8Array([0x67]),
    ctz: new Uint8Array([0x68]),
    popcnt: new Uint8Array([0x69]),
    add: new Uint8Array([0x6A]),
    sub: new Uint8Array([0x6B]),
    mul: new Uint8Array([0x6C]),
    div_s: new Uint8Array([0x6D]),
    div_u: new Uint8Array([0x6E]),
    rem_s: new Uint8Array([0x6F]),
    rem_u: new Uint8Array([0x70]),
    and: new Uint8Array([0x71]),
    or: new Uint8Array([0x72]),
    xor: new Uint8Array([0x73]),
    shl: new Uint8Array([0x74]),
    shr_s: new Uint8Array([0x75]),
    shr_u: new Uint8Array([0x76]),
    rotl: new Uint8Array([0x77]),
    rotr: new Uint8Array([0x78]),
    wrap_i64: new Uint8Array([0xA7]),
    trunc_f32_s: new Uint8Array([0xA8]),
    trunc_f32_u: new Uint8Array([0xA9]),
    trunc_f64_s: new Uint8Array([0xAA]),
    trunc_f64_u: new Uint8Array([0xAB]),
    reinterpret_f32: new Uint8Array([0xBC]),
}

export const i64 = {
    const: new Uint8Array([0x42]),
    load: new Uint8Array([0x29]),
    store: new Uint8Array([0x37]),
    eqz: new Uint8Array([0x50]),
    eq: new Uint8Array([0x51]),
    ne: new Uint8Array([0x52]),
    lt_s: new Uint8Array([0x53]),
    lt_u: new Uint8Array([0x54]),
    gt_s: new Uint8Array([0x55]),
    gt_u: new Uint8Array([0x56]),
    le_s: new Uint8Array([0x57]),
    le_u: new Uint8Array([0x58]),
    ge_s: new Uint8Array([0x59]),
    ge_u: new Uint8Array([0x5A]),
    clz: new Uint8Array([0x79]),
    ctz: new Uint8Array([0x7A]),
    popcnt: new Uint8Array([0x7B]),
    add: new Uint8Array([0x7C]),
    sub: new Uint8Array([0x7D]),
    mul: new Uint8Array([0x7E]),
    div_s: new Uint8Array([0x7F]),
    div_u: new Uint8Array([0x80]),
    rem_s: new Uint8Array([0x81]),
    rem_u: new Uint8Array([0x82]),
    and: new Uint8Array([0x83]),
    or: new Uint8Array([0x84]),
    xor: new Uint8Array([0x85]),
    shl: new Uint8Array([0x86]),
    shr_s: new Uint8Array([0x87]),
    shr_u: new Uint8Array([0x88]),
    rotl: new Uint8Array([0x89]),
    rotr: new Uint8Array([0x8A]),
    extend_i32_s: new Uint8Array([0xAC]),
    extend_i32_u: new Uint8Array([0xAD]),
    trunc_f32_s: new Uint8Array([0xAE]),
    trunc_f32_u: new Uint8Array([0xAF]),
    trunc_f64_s: new Uint8Array([0xB0]),
    trunc_f64_u: new Uint8Array([0xB1]),
    reinterpret_f64: new Uint8Array([0xBD]),
}

export const f32 = {
    const: new Uint8Array([0x43]),
    load: new Uint8Array([0x2A]),
    store: new Uint8Array([0x38]),
    eq: new Uint8Array([0x5B]),
    ne: new Uint8Array([0x5C]),
    lt: new Uint8Array([0x5D]),
    gt: new Uint8Array([0x5E]),
    le: new Uint8Array([0x5F]),
    ge: new Uint8Array([0x60]),
    abs: new Uint8Array([0x8B]),
    neg: new Uint8Array([0x8C]),
    ceil: new Uint8Array([0x8D]),
    floor: new Uint8Array([0x8E]),
    trunc: new Uint8Array([0x8F]),
    nearest: new Uint8Array([0x90]),
    sqrt: new Uint8Array([0x91]),
    add: new Uint8Array([0x92]),
    sub: new Uint8Array([0x93]),
    mul: new Uint8Array([0x94]),
    div: new Uint8Array([0x95]),
    min: new Uint8Array([0x96]),
    max: new Uint8Array([0x97]),
    copysign: new Uint8Array([0x98]),
    convert_i32_s: new Uint8Array([0xB2]),
    convert_i32_u: new Uint8Array([0xB3]),
    convert_i64_s: new Uint8Array([0xB4]),
    convert_i64_u: new Uint8Array([0xB5]),
    demote_f64: new Uint8Array([0xB6]),
    reinterpret_i32: new Uint8Array([0xBE]),
}

export const f64 = {
    const: new Uint8Array([0x44]),
    load: new Uint8Array([0x2B]),
    store: new Uint8Array([0x39]),
    eq: new Uint8Array([0x61]),
    ne: new Uint8Array([0x62]),
    lt: new Uint8Array([0x63]),
    gt: new Uint8Array([0x64]),
    le: new Uint8Array([0x65]),
    ge: new Uint8Array([0x66]),
    abs: new Uint8Array([0x99]),
    neg: new Uint8Array([0x9A]),
    ceil: new Uint8Array([0x9B]),
    floor: new Uint8Array([0x9C]),
    trunc: new Uint8Array([0x9D]),
    nearest: new Uint8Array([0x9E]),
    sqrt: new Uint8Array([0x9F]),
    add: new Uint8Array([0xA0]),
    sub: new Uint8Array([0xA1]),
    mul: new Uint8Array([0xA2]),
    div: new Uint8Array([0xA3]),
    min: new Uint8Array([0xA4]),
    max: new Uint8Array([0xA5]),
    copysign: new Uint8Array([0xA6]),
    convert_i32_s: new Uint8Array([0xB7]),
    convert_i32_u: new Uint8Array([0xB8]),
    convert_i64_s: new Uint8Array([0xB9]),
    convert_i64_u: new Uint8Array([0xBA]),
    promote_f32: new Uint8Array([0xBB]),
    reinterpret_i64: new Uint8Array([0xBF]),
}

export const memory = {
    grow: new Uint8Array([0x40, 0x00]),
    size: new Uint8Array([0x3f, 0x00])
}

export const local = {
    get: new Uint8Array([0x20]),
    set: new Uint8Array([0x21]),
    tee: new Uint8Array([0x22])
}

export const global = {
    get: new Uint8Array([0x23]),
    set: new Uint8Array([0x24])
}

export const call = new Uint8Array([0x10]);
export const call_inderect = new Uint8Array([0x11]);
export const drop = new Uint8Array([0x1A]);
export const select = new Uint8Array([0x1B]);
export const _return = new Uint8Array([0x0f]);
export const end_func = new Uint8Array([0x0b]);

export const loop = new Uint8Array([0x03]);
export const br = new Uint8Array([0xC]);
export const br_if = new Uint8Array([0xD]);
export const branch_if_else = new Uint8Array([0x04]);
export const branch_else = new Uint8Array([0x05]);
export const branch_end = new Uint8Array([0x0B]);

export function merge(buffers: Uint8Array[]): Uint8Array{
    const length = buffers.reduce((a,b)=>a + b.byteLength, 0);
    const merged = new Uint8Array(length);
    
    let idx = 0;
    for(const buffer of buffers){
        merged.set(buffer, idx);
        idx += buffer.byteLength;
    }

    return merged;
}