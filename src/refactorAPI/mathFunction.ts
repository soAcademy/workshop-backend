import {
  IAdd,
  IHelloAt,
  IHelloMultiply,
  IHelloOrder,
  IHelloReduce,
  IHelloSum,
} from "./mathFunction.interface";

export const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});

//----------------------------------------------------------

export const add = (args: IAdd) => args.x + args.y;

//----------------------------------------------------------

export const helloAt = (args: IHelloAt) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

//----------------------------------------------------------

export const helloSum = (args: IHelloSum) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

//----------------------------------------------------------

export const helloReduce = (args: IHelloReduce) => {
  const result = args.number.reduce((acc, r) => acc + r, 0);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createdAt: new Date(),
  };
};

//----------------------------------------------------------

export const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createdAt: new Date(),
  };
};

//----------------------------------------------------------
