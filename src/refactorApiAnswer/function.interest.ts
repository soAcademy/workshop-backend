export interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}

export interface IHelloReduce {
  name: string;
  numbers: number[];
}

export interface IHelloOrder {
  name: string;
  orders: {
    product: string,
    price: number
  }[];
}