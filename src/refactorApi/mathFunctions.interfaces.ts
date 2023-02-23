import * as t from "io-ts";

export const AddCodec = t.type({ x: t.number, y: t.number });

export const HelloAtCodec = t.type({ name: t.string, location: t.string });

export const HelloSumCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export const HelloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}
