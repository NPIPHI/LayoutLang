export type Type = "i32" | "f32" | "i64" | "f64" | "bool" | "void" | "IntRange" | "Shape" | "Point";

export class Identifier{
    constructor(public name: string){};
}

export class Argument{
    constructor(public name: Identifier, public type: Type){};
}