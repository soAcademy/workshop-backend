import express, { Application, Request, Response } from "express";
const app: Application = express();
import axios from "axios";
import * as t from "io-ts";

// ตัวอย่าง Runtime Type Checking with libraries

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Hello Add - function
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const add = (args: { x: number; y: number }) => args.x + args.y;

const AddCodec = t.type({
  x: t.number,
  y: t.number,
});

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Hello At - function
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Hello Sum - function
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const HelloSumCodec = t.type({
  name: t.string,
  number: t.type({ x: t.number, y: t.number, z: t.number }),
});

interface IHelloSum extends t.TypeOf<typeof HelloSumCodec> {}

const helloSum = (args: IHelloSum) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Hello Multiply - function
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}

const HelloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({ x: t.number, y: t.number, z: t.number }),
});

interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}
// type IHelloMultiply = t.TypeOf<typeof HelloMultiplyCodec>  <-- รูปแบบนี้ไม่นิยม

const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Hello Reduce - function
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Hello Order - function
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
interface IHelloOrder {
  name: string;
  orders: {
    product: string;
    price: number;
  }[];
}

interface IHelloOrder2 {
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

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//   Type Checking Manually
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const isNumber = (data: any) => typeof data === "number";
const isString = (data: any) => typeof data === "string";
const isboolean = (data: any) => typeof data === "boolean";
const isArray = (data: any) => Array.isArray(data);

// Structure : ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json());

// Hello Add - express
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  if (AddCodec.decode(body)._tag === "Right") {
    const result = add(body);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Invalid" });
  }
});

// Hello At - express
app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  if (isString(body?.name) && isString(body?.location)) {
    const result = helloAt({
      name: body?.name,
      location: body?.location,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
});

// Hello Sum - express
app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
});

// Hello Multiply - express
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(body);
  // console.log(HelloMultiplyCodec.decode(body));
  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
});

// Hello Reduce - express
app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  if (
    isString(body?.name) &&
    isArray(body?.numbers) &&
    // body?.numbers.map((r: any) => isNumber(r.x) && isNumber(r.y) && isNumber(r.z)) ?????
    // body?.numbers.every((r: any) => isNumber(r))
    body?.numbers.every(isNumber)
  ) {
    const result = helloReduce({
      name: body?.name,
      numbers: body?.numbers,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
});

// Hello Order - express
app.post("/function/helloOrder2", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isArray(body?.orders) &&
    // body?.numbers.map((r: any) => isNumber(r.x) && isNumber(r.y) && isNumber(r.z)) ?????
    body?.orders.every((r: any) => isString(r.product) && isNumber(r.price))
    // body?.numbers.every(isNumber)
  ) {
    const result = helloOrder({
      name: body?.name,
      orders: body?.orders,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
});

// Structure :
app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
