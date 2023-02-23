import * as t from "io-ts";

export const AddCodec = t.type({ x: t.number, y: t.number });

export const HelloAtCodec = t.type({
  name: t.string,
  location: t.string,
});

export const HelloSumCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export interface IHelloSum extends t.TypeOf<typeof HelloSumCodec> {}

export interface IHelloMultiply extends t.TypeOf<typeof HelloSumCodec> {}

export const HelloReduceCodec = t.type({
  name: t.string,
  numbers: t.array(t.number),
});

export interface IHelloReduce extends t.TypeOf<typeof HelloReduceCodec> {}

export const HelloOrderCodec = t.type({
  name: t.string,
  orders: t.array(
    t.type({
      product: t.string,
      price: t.number,
    })
  ),
});

export interface IHelloOrder extends t.TypeOf<typeof HelloOrderCodec> {}
