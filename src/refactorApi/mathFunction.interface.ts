import * as t from "io-ts";

export const addCodec = t.type({
  x: t.number,
  y: t.number,
});

export const helloAtCodec = t.type({
  name: t.string,
  location: t.string,
});

export const helloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export interface IHelloMultiply extends t.TypeOf<typeof helloMultiplyCodec> {}

export const helloSumCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});
