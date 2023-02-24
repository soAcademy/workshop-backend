import * as t from "io-ts";


// ADD
export const AddCodec = t.type({
  x: t.number,
  y: t.number,
});

//SUM
export const HelloSumCodec = t.type({
  name: t.string,
  number: t.type({ x: t.number, y: t.number, z: t.number }),
});

export interface IHelloSum extends t.TypeOf<typeof HelloSumCodec> {}

//MULTIPLY
export const HelloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({ x: t.number, y: t.number, z: t.number }),
});

export interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}

//REDUCE
export interface IHelloReduce {
  name: string;
  numbers: number[];
}

//ORDER
export interface IHelloOrder {
  name: string;
  orders: {
    product: string;
    price: number;
  }[];
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//   Type Checking Manually
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const isNumber = (data: any) => typeof data === "number";
export const isString = (data: any) => typeof data === "string";
export const isboolean = (data: any) => typeof data === "boolean";
export const isArray = (data: any) => Array.isArray(data);
