import { IHelloMultiply, IHelloOrder, IHelloReduce } from "./mathFunctionInterface";

export const add = (x: number, y: number) => x + y;

export const helloAt = (args: { name: string; location: string }) => ({
    text: `Hello ${args.name} at ${args.location}`,
    createdAt: new Date(),
  });

export const helloSum = (args: {
    name: string;
    number: { x: number; y: number; z: number };
  }) => ({
    text: `Hello ${args.name} sum ${
      args.number.x + args.number.y + args.number.z
    }`,
    createdAt: new Date(),
  });

export const helloMultiply = (args: IHelloMultiply) => ({
    text: `Hello ${args.name}multiply ${
      args.number.x * args.number.y * args.number.z
    }`,
    createdAt: new Date(),
  });

export const helloReduce = (args: IHelloReduce) => {
    const result = args.numbers.reduce((acc, r) => acc + r, 0);
    return {
      text: `Hello ${args.name} reduce ${result}`,
      createdAt: new Date(),
    };
  };

export const helloOrder = (args: IHelloOrder) => {
    const result = args.orders.reduce((acc, r) => acc + r.price, 0);
    return {
      text: `Hello ${args.name} order ${result}`,
      createdAt: new Date(),
    };
  };

export const isString = (data: any) => typeof data === "string";

export const isNumber = (data: any) => typeof data === "number";
  
export const isboolean = (data: any) => typeof data === "boolean";
  
export const isArray = (data: any) => Array.isArray(data);
  