import express, { Application, Request, Response } from "express";

const add = (x: number, y: number) => x + y;
const helloAt = (args: { name: string; location: string }) => {
  return {
    text: `Hello ${args.name} at ${args.location}`,
    createdAt: new Date(),
  };
};
const helloSum = (args: {
  name: string;
  numbers: { x: number; y: number; z: number };
}) => {
  const numbers = args.numbers;
  return {
    text: `Hello ${args.name}`,
    result: numbers.x + numbers.y + numbers.z,
  };
};
const helloMultiply = (args: {
  name: string;
  numbers: { x: number; y: number; z: number };
}) => {
  const numbers = args.numbers;
  return {
    text: `Hello ${args.name}`,
    result: numbers.x * numbers.y * numbers.z,
  };
};

const app: Application = express();

app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body.x, body.y);
  typeof result === "number"
    ? res.status(200).json(result)
    : res.status(500).send("TYPE ERROR");
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt(body);
  res.status(200).json(result);
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloSum(body);
  typeof result.result === "number"
    ? res.status(200).json(result)
    : res.status(500).send("TYPE ERROR");
});
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = helloMultiply(body);
    !(Number.isNaN(result.result))
      ? res.status(200).json(result)
      : res.status(500).send("TYPE ERROR");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5555, () => {
  console.log("Server started on port 5555");
});
