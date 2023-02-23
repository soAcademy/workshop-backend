import * as t from "io-ts";

// Hello Add
// export const add = (x: number, y: number) => x + y;
export const AddCodec = t.type({
  x: t.number,
  y: t.number,
});
export interface IAdd extends t.TypeOf<typeof AddCodec> {}


// Hello Multiply
export const HelloMultiplyCodec = t.type({
  name: t.string,
  // object
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}

