import { IHelloMultiply, IHelloOrder, IHelloReduce, IHelloSum } from "./function.interface";

export const add = (x: number, y: number) => x + y;

export const helloAt = (args: { name: string; location: string }) => {
  return {
    text: `Hello ${args.name} at ${args.location}`,
    createdAt: new Date(),
  };
};

export const helloSum = (args: IHelloSum) => {
  const numbers = args.numbers;
  return {
    text: `Hello ${args.name}`,
    result: numbers.x + numbers.y + numbers.z,
  };
};

export const helloMultiply = (args: IHelloMultiply) => {
  const numbers = args.numbers;
  return {
    text: `Hello ${args.name}`,
    result: numbers.x * numbers.y * numbers.z,
  };
};

export const helloReduce = (args: IHelloReduce) => {
  const numbers = Object.values(args.numbers).map((e) => Number(e));
  const result = numbers.reduce((acc, e) => acc + e, 0);
  return {
    text: `Hello ${args.name}`,
    result: result,
  };
};

export const helloOrders = (args: IHelloOrder) => {
  const orders = args.orders.map((e) => e.product);
  const total = args.orders.reduce((acc, e) => acc + e.price, 0);

  return {
    text: `Hello ${args.name}`,
    orders: orders,
    total: total,
    createdAt: new Date(),
  };
};