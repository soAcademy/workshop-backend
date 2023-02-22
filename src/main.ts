import express, { Application, Request, Response } from "express";
import axios from "axios";
import { Interface } from "readline";

const add = (x: number, y: number) => x + y;

const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createAt: new Date(),
});

const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createAt: new Date(),
});

interface IHelloMultipy {
  name: string;
  number: { x: number; y: number; z: number };
}

const helloMultipy = (args: IHelloMultipy) => ({
  text: `Hello ${args.name} multipy ${
    args.number.x * args.number.y * args.number.z
  }`,
  createAt: new Date(),
});

interface IHelloReduce {
  name: string;
  number: number[];
}

const helloReduce = (args: IHelloReduce) => {
  const reduceResult = args.number.reduce((acc, r) => acc + r, 0);
  return {
    text: `Hello ${args.name} Reduce = ${reduceResult}`,
    createAt: new Date(),
  };
};

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
    text: `Hello ${args.name} order = ${result}`,
    createAt: new Date(),
  };
};

const isNumber = (data: any) => typeof data === "number";
const isString = (data: any) => typeof data === "string";
const isBoolean = (data: any) => typeof data === "boolean";
const isObject = (data: any) => typeof data === "object";
const isArray = (data: any) => Array.isArray(data);

// Express server
const app: Application = express();
app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  if (isNumber(body.x) && isNumber(body.y)) {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    // res.status(500).send("Error wrong input type");
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  if (isString(body?.name) && isString(body?.location)) {
    const result = helloAt({
      name: body?.name,
      location: body?.location,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isNumber(body?.number.a) &&
    isNumber(body?.number.b) &&
    isNumber(body?.number.c)
  ) {
    const result = helloSum({
      name: body?.name,
      number: { x: body?.number.a, y: body?.number.b, z: body?.number.c },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloMultipy", (req: Request, res: Response) => {
  const body = req?.body;

  if (
    isString(body?.name) &&
    isNumber(body?.number.a) &&
    isNumber(body?.number.b) &&
    isNumber(body?.number.c)
  ) {
    const result = helloMultipy({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isArray(body?.number) &&
    isNumber(body?.number[0])
  ) {
    const result = helloReduce({
      name: body?.name,
      number: body?.number,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isArray(body?.orders) &&
    isString(body?.orders[0].product) &&
    isNumber(body?.orders[0].price)
  ) {
    const result = helloOrder({
      name: body?.name,
      orders: body?.orders,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
