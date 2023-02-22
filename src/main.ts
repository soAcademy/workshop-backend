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

const app: Application = express();
app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location,
  });
  res.status(200).json(result);
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloSum({
    name: body?.name,
    number: { x: body?.number.a, y: body?.number.b, z: body?.number.c },
  });
  res.status(200).json(result);
});

app.post("/function/helloMultipy", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloMultipy({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
