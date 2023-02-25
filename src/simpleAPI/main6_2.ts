import express, { Application, Request, Response } from "express";
import axios from "axios";
import * as t from "io-ts";
const add = (x: number, y: number) => x + y;

const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}

const helloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});

interface IHelloReduce {
  name: string;
  numbers: number[];
}

const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, r) => acc + r, 0);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createdAt: new Date(),
  };
};

interface IHelloOrder {
  name: string;
  orders: Array<{
    product: string;
    price: number;
  }>;
}

const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createdAt: new Date(),
  };
};

const isNumber = (data: any) => typeof data === "number";

const isString = (data: any) => typeof data === "string";

const isBoolean = (data: any) => typeof data === "boolean";

const isArray = (data: any) => Array.isArray(data);

const app: Application = express();

app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  if (isNumber(body.x) && isNumber(body.y)) {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  if (isString(body.name) && isString(body.location)) {
    const result = helloAt({ name: body?.name, location: body?.location });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloSum", (req: Request, res: Response) => {
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
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req.body;
  // if (
  //   isString(body?.name) &&
  //   isNumber(body?.number.x) &&
  //   isNumber(body?.number.y) &&
  //   isNumber(body?.number.z)
  // ) {
    const result = helloMultiply({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  // } else {
  //   res.status(500).json({ error: "Error invalid codec" });
  // }
});

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req.body;
  if (isString(body?.name) && body?.numbers.every(isNumber)) {
    const result = helloReduce({
      name: body?.name,
      numbers: body?.numbers,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req.body;
  if (isString(body?.name) && isArray(body?.orders) && body?.orders?.product.every(isString) && body?.orders?.price.every(isNumber)) {
  const result = helloOrder(body); // ส่งbodyได้เลยหากมั่นใจว่าเป็น type ตรง
  res.status(200).json(result); 
} else {
  res.status(500).json({ error: "Error invalid codec" });
}
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
