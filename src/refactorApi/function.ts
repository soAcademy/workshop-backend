import {
  IHelloSum,
  IHelloMultiply,
  IHelloReduce,
  IHelloOrder,
} from "./function.interface";

export const add = (x: number, y: number) => x + y;

export const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createAt: new Date(),
});

export const helloSum = (args: IHelloSum) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createAt: new Date(),
});

export const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createAt: new Date(),
});

export const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, r) => acc + r);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createAt: new Date(),
  };
};

export const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createAt: new Date(),
  };
};
