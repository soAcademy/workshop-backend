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
const helloReduce = (args: { name: string; numbers: number[] }) => {
  try {
    if (args.numbers.length > 0 || args.name !== undefined) {
      const numbers = Object.values(args.numbers).map((e) => Number(e));
      if (numbers.findIndex((number) => Number.isNaN(number)) === -1) {
        const result = numbers.reduce((acc, e) => acc + e, 0);
        return {
          text: `Hello ${args.name}`,
          result: result,
        };
      } else {
        const error = new Error("TYPE ERROR (number)");
        return error.message;
      }
    } else {
      const error = new Error("Name not found");
      return error.message;
    }
  } catch {
    const error = new Error("Numbers not found");
    return error.message;
  }
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
    !Number.isNaN(result.result)
      ? res.status(200).json(result)
      : res.status(500).send("TYPE ERROR");
  } catch (err) {
    res.status(500).send(err);
  }
});
app.post("/function/helloReduce", (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = helloReduce(body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(5555, () => {
  console.log("Server started on port 5555");
});
