import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json());

//ex.1
const add = (x: number, y: number) => x + y;
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

//ex.2
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createAt: new Date(),
});
app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({ name: body?.name, location: body?.location });
  res.status(200).json(result);
});

//ex.3
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
  const result = helloSum({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.json(result);
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
  const result = helloMultiply({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.json(result);
});

//ex.5
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
  const result = helloReduce({
    name: body?.name,
    numbers: body?.numbers,
  });
  res.json(result);
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
  // console.log(body);
  const result = helloOrder(body);
  res.json(result);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
