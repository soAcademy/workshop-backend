import * as t from "io-ts";

export const HelloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}

export const isNumber = (data: any) => typeof data === "number";
export const isString = (data: any) => typeof data === "string";

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
