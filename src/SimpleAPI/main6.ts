import express, { Application, Request, Response } from "express";
import axios from "axios";

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

app.post("/post/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result ${result}`);
});

interface IF1Args {
  x: number;
  y: number;
}

app.post("/post/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location,
  });
  res.status(200).json(result);
});

app.post("/post/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloSum({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
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
  const result = helloMultiply({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
});

app.listen(5000, () => {
  console.log("Sever start on port 5000");
});
