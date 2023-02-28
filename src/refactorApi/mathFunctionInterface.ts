import * as t from "io-ts";

export interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}

export const HelloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

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
    }[]; // Array of objects
  }
  
export const HelloOrderCodec = t.type({
    name: t.string,
    orders: t.array(t.type({
      product: t.string,
      price: t.number,
    })),
  })