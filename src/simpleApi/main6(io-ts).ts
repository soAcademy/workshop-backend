import express, { Application, Request, Response } from "express";
import * as t from "io-ts";

// สร้าง const Codec ก่อน
// numbers: t.array(t.number),
// objects: t.array(t.type({
//   x: t.number,
//   y: t.string
// }))

// สร้าง function

// Hello Add
const add = (x: number, y: number) => x + y;
const AddCodec = t.type({
  x: t.number,
  y: t.number,
});

// Hello At
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

// Hello Sum
const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

// Hello Multiply
// interface IHelloMultiply {
//   name: string;
//   number: { x: number; y: number; z: number };
// }

const HelloMultiplyCodec = t.type({
  name: t.string,
  // object
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

// ใช้ interface กรณีที่ต้องการ extend ใช้ type กรณีไม่ต้องการ extend
// type IHelloMultiply = t.TypeOf<typeof HelloMultiplyCodec>;
interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}

const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});

// Hello Reduce
interface IHelloReduce {
  name: string;
  numbers: number[];
}

const HelloReduceCodec = t.type({
  name: t.string,
  // array
  numbers: t.array(t.number),
});

const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, r) => acc + r, 0);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createdAt: new Date(),
  };
};

// Hello Order (array of objects)
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

// Express Server
const app: Application = express();
app.use(express.json());

// Hello Add
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(AddCodec.decode(body));
  if (AddCodec.decode(body)._tag === "Right") {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
});

// Hello At
app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location,
  });
  res.status(200).json(result);
});

// Hello Sum
app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloSum({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });

  res.status(200).json(result);
});

// Hello Multiply
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloMultiplyCodec.decode(body));

  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
});

// Hello Reduce
app.post("/function/helloReduce", (req: Request, res: Response) => {
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
    res.status(500).json({ error: "Failed to validate codec" });
  }
});

// Hello Order
app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloOrder(body);
  res.status(200).json(result);
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
