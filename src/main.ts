import express, { Application, Request, Response } from "express";
import axios from "axios";
import { request } from "http";
import * as t from "io-ts"

const app: Application = express();
app.use(express.json());

const add = (x: number, y: number) => x + y;

const helloAt = (args: { name: string; location: string }) => ({
  text: `${args.name} at ${args.location}`,
  creatAt: new Date(),
});

const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
}) => ({
  text: `Hello ${args.name} ! sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

const isNumber = (data: any) => typeof data === "number";
const isString = (data: any) => typeof data === "string";
const isBoolean = (data: any) => typeof data === "boolean";
const isArray = (data: any) => Array.isArray(data);

app.post("/post/add", (req: Request, res: Response) => {
  const body = req?.body;
  if (isNumber(body?.x) && isNumber(body?.y)) {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result ${result}`);
  } else {
    res.status(500).send("Error");
  }
});

app.post("/post/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  if (isString(body?.name) && isString(body?.location)) {
    const result = helloAt({
      name: body?.name,
      location: body?.location,
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("ERROR");
  }
});

app.post("/post/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isNumber(body?.number.x) &&
    isNumber(body?.number.y) &&
    isNumber(body?.number.z)
  ) {
    const result = helloSum({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("ERROR");
  }
});

interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}
const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }}`,
  createdAt: new Date(),
});

app.post("/post/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isNumber(body?.number.x) &&
    isNumber(body?.number.y) &&
    isNumber(body?.number.z)
  ) {
    const result = helloMultiply({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("ERROR");
  }
});

interface IHelloReduce {
  numbers: number[];
  name: string;
}

const helloReduce = (args: IHelloReduce) => ({
  text: `Hello ${args.name}! sum${args.numbers.reduce((acc, r) => acc + r, 0)}`,
  createdAt: new Date(),
});

app.post("/post/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isArray(body?.numbers) &&
    body?.numbers.every(isNumber)
  ) {
    const result = helloReduce({
      name: body?.name,
      numbers: body?.numbers,
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("Error");
  }
});

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
    createdAt: new Date(),
  };
};

app.post("/post/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isArray(body?.orders) &&
    isString(body?.orders[0].product) &&
    isNumber(body?.orders[0].price)
  ) {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("ERROR");
  }
});

app.listen(5000, () => {
  console.log("Sever start on port 5000");
});
