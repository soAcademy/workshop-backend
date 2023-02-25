import * as t from "io-ts";

export const maybeNumber = (data: any) => typeof data === "number";
export const maybeString = (data: any) => typeof data === "string";
export const maybeBoolean = (data: any) => typeof data === "boolean";
export const maybeArray = (data: any) => Array.isArray(data);

export const helloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

//interface extend
export interface IHelloMultiply extends t.TypeOf<typeof helloMultiplyCodec> {}

//-----------------------------------------------------------

export const AddCodec = t.type({
  x: t.number,
  y: t.number,
});

export interface IAdd extends t.TypeOf<typeof AddCodec> {}

//-----------------------------------------------------------

export const HelloAtCodec = t.type({
  name: t.string,
  location: t.string,
});

export interface IHelloAt extends t.TypeOf<typeof HelloAtCodec> {}

//-----------------------------------------------------------

export const HelloSumCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

export interface IHelloSum extends t.TypeOf<typeof HelloSumCodec> {}

//-------------------------------------------------------------

export const HelloReduceCodec = t.type({
  name: t.string,
  number: t.array(t.number),
});

export interface IHelloReduce extends t.TypeOf<typeof HelloReduceCodec> {}

//--------------------------------------------------------------

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

//--------------------------------------------------------------
