import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json());

//ex.1
const isNumber = (data: any) => typeof data === "number";
const add = (x: number, y: number) => x + y;
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  isNumber(body?.x) && isNumber(body?.y)
    ? res.status(200).send(`Result: ${add(body?.x, body?.y)}`)
    : res.status(500).send(`ERROR: data mismatch!`);
});

//ex.2
const isString = (data: any) => typeof data === "string";
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createAt: new Date(),
});
app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  isString(body?.name) && isString(body?.location)
    ? res.status(200).json(helloAt(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
});

//ex.3
const isObject = (data: any) => typeof data === "object";
const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createAt: new Date(),
});
app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  isString(body?.name) &&
  isObject(body?.number) &&
  Object.values(body?.number).every(isNumber)
    ? res.status(200).json(helloSum(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
});

//ex.4
interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}
const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createAt: new Date(),
});
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  isString(body?.name) &&
  isObject(body?.number) &&
  Object.values(body?.number).every(isNumber)
    ? res.status(200).json(helloMultiply(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
});

//ex.5
const isArray = (data: any) => Array.isArray(data);
interface IHelloReduce {
  name: string;
  numbers: number[];
}
const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, r) => acc + r);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createAt: new Date(),
  };
};
app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  isString(body?.name) &&
  isArray(body?.numbers) &&
  body?.numbers.every(isNumber)
    ? res.status(200).json(helloReduce(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
});

//ex.6
interface IHelloOrder {
  name: string;
  orders: {
    product: string;
    price: number;
  }[];
}
const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createAt: new Date(),
  };
};
app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  isString(body?.name) &&
  isArray(body?.orders) &&
  body?.orders.every(isObject) &&
  body?.orders.map((r: { product: any }) => r.product).every(isString) &&
  body?.orders.map((r: { price: any }) => r.price).every(isNumber)
    ? res.status(200).json(helloOrder(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
