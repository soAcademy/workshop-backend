import * as t from "io-ts";
//Add
export const AddCodec = t.type({
  x: t.number,
  y: t.number,
});
export interface IAdd extends t.TypeOf<typeof AddCodec> {}
//HelloMultiply
export const HelloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}
//HelloAt
export const HelloAtCodec = t.type({
  name: t.string,
  location: t.string,
});

export interface IHelloAt extends t.TypeOf<typeof HelloAtCodec> {}
//HelloSum
export const HelloSumCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export interface IHelloSum extends t.TypeOf<typeof HelloSumCodec> {}

export interface IHelloReduce {
  numbers: number[],
  name: string
}

export const HelloReduceCodec = t.type({
  numbers: t.array(t.number),
  name: t.string,
});

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


