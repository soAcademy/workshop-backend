import { IHelloMultiply } from "./mathFunctions.interfaces";

export const add = (x: number, y: number) => x + y;

export const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});
