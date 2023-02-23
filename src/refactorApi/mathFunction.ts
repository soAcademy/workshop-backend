import {
  IHelloMultipy,
  IHelloOrder,
  IHelloReduce,
} from "./mathFunction.interface";

export const add = (x: number, y: number) => x + y;

export const helloMultipy = (args: IHelloMultipy) => ({
  text: `Hello ${args.name} multipy ${
    args.number.x * args.number.y * args.number.z
  }`,
  createAt: new Date(),
});

export const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createAt: new Date(),
});

export const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createAt: new Date(),
});

export const helloReduce = (args: IHelloReduce) => {
  const reduceResult = args.number.reduce((acc, r) => acc + r, 0);
  return {
    text: `Hello ${args.name} Reduce = ${reduceResult}`,
    createAt: new Date(),
  };
};

export const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order = ${result}`,
    createAt: new Date(),
  };
};
