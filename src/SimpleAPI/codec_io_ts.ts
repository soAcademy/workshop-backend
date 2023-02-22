import express, { Application, Request, Response } from "express";
import * as t from "io-ts";

const app: Application = express();
app.use(express.json());

const add = (args:IAdd) => args.x + args.y;

const helloAt = (args: IHelloAt) => ({
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

interface IAdd {
  x:number,
  y:number
};
const AddCodec = t.type({
  x:t.number,
  y:t.number
});

app.post("/post/add", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(AddCodec.decode(body));
  if (AddCodec.decode(body)._tag==="Right") {
    const result = add({x:body?.x, y:body?.y});
    res.status(200).send(`Result ${result}`);
  } else {
    res.status(500).send("Error to validate");
  }
});

interface IHelloAt {
  name: string,
  location: string
}
const HelloAtCodec = t.type({
  name: t.string,
  location: t.string
});

app.post("/post/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloAtCodec.decode(body));
  if (HelloAtCodec.decode(body)._tag === "Right") {
    const result = helloAt({
      name: body?.name,
      location: body?.location,
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
});

const HelloSumCodec = t.type({
  name: t.string,
  number: t.type({ 
    x: t.number, 
    y: t.number, 
    z: t.number 
  }),
});

app.post("/post/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  if (HelloSumCodec.decode(body)._tag ==="Right") {
    const result = helloSum({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
});

interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}

const HelloMultiplyCodec = t.type({
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
  }}`,
  createdAt: new Date(),
});

app.post("/post/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloMultiplyCodec.decode(body));

  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
});

interface IHelloReduce {
  numbers: number[],
  name: string
}

const HelloReduceCodec = t.type({
  numbers: t.array(t.number),
  name: t.string,
});

const helloReduce = (args: IHelloReduce) => ({
  text: `Hello ${args.name}! sum${args.numbers.reduce((acc, r) => acc + r, 0)}`,
  createdAt: new Date(),
});

app.post("/post/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloReduceCodec.decode(body));
  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce({
      name: body?.name,
      numbers: body?.numbers,
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
});

interface IHelloOrder {
  name: string;
  orders: {
    product: string;
    price: number;
  }[];
}

const HelloOrderCodec = t.type({
  name: t.string,
  orders: t.array(
    t.type({
      product: t.string,
      price: t.number,
    })
  ),
});

const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createdAt: new Date(),
  };
};

app.post("/post/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloOrderCodec.decode(body));
  if (HelloOrderCodec.decode(body)._tag === "Right") {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("ERROR to validate");
  }
});

app.listen(5000, () => {
  console.log("Sever start on port 5000");
});
