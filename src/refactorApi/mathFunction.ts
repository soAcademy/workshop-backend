import { IHelloMultiply } from "./mathFunction.interface";

// Hello Add
export const add = (x: number, y: number) => x + y;

// Hello Multiply
export const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});