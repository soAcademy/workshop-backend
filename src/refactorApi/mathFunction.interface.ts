import * as t from "io-ts";

export const HelloMultiplyCodec = t.type({
  name: t.string,
  location: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}