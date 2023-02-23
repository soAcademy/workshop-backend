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

export interface IHelloReduce {
  name: string;
  numbers: number[];
}

export const HelloReduceCodec = t.type({
  name: t.string,
  numbers: t.array(t.number),
});

export interface IHelloOrder {
  name: string;
  orders: {
    product: string;
    price: number;
  }[];
}

export const HelloOrderCodec = t.type({
  name: t.string,
  orders: t.array(
    t.type({
      product: t.string,
      price: t.number,
    })
  ),
});
