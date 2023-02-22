import express, { Application, Request, Response } from "express";
import * as t from "io-ts";

const AddCodec = t.record(t.unknown,t.number)
const add = (x: number, y: number) => x + y;
const HelloAtCodec = t.type({ name: t.string, location: t.string });
const helloAt = (args: { name: string; location: string }) => {
  return {
    text: `Hello ${args.name} at ${args.location}`,
    createdAt: new Date(),
  };
};

const HelloSumCodec = t.type({
  name: t.string,
  numbers: t.type({ x: t.number, y: t.number, z: t.number }),
});
interface IHelloSum extends t.TypeOf<typeof HelloSumCodec> {}
const helloSum = (args: IHelloSum) => {
  const numbers = args.numbers;
  return {
    text: `Hello ${args.name}`,
    result: numbers.x + numbers.y + numbers.z,
  };
};

const HelloMultiplyCodec = t.type({
  name: t.string,
  numbers: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});
interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}
const helloMultiply = (args: IHelloMultiply) => {
  const numbers = args.numbers;
  return {
    text: `Hello ${args.name}`,
    result: numbers.x * numbers.y * numbers.z,
  };
};

const HelloReduceCodec = t.type({
  name: t.string,
  numbers: t.record(t.unknown, t.number),
});
interface IHelloReduce extends t.TypeOf<typeof HelloReduceCodec> {}
const helloReduce = (args: IHelloReduce) => {
  const numbers = Object.values(args.numbers).map((e) => Number(e));
  const result = numbers.reduce((acc, e) => acc + e, 0);
  return {
    text: `Hello ${args.name}`,
    result: result,
  };
};
const HelloOrdersCodec = t.type({
  name: t.string,
  orders: t.array(
    t.type({
      product: t.string,
      price: t.number,
    })
  ),
});
interface IHelloOrder extends t.TypeOf<typeof HelloOrdersCodec> {}
const helloOrders = (args: IHelloOrder) => {
  const orders = args.orders.map((e) => e.product);
  const total = args.orders.reduce((acc, e) => acc + e.price, 0);

  return {
    text: `Hello ${args.name}`,
    orders: orders,
    total: total,
    createdAt: new Date(),
  };
};

const app: Application = express();

app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  if (AddCodec.decode(body)._tag === 'Right') {
  const result = add(body.x, body.y);
    res.status(200).json(result)
  } else {
    res.status(500).send('Failed to validate codec')
  }
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloAtCodec.decode(body)._tag === "Right") {
    const result = helloAt(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
});
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
});
app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req.body;
  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
});

app.post("/function/helloOrders", (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloOrdersCodec.decode(body)._tag === "Right") {
    const result = helloOrders(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
});

app.listen(5555, () => {
  console.log("Server started on port 5555");
});
