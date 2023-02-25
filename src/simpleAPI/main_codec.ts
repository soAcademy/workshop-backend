import express, { Application, Request, Response } from "express";
import axios from "axios";
import * as t from "io-ts";

const addCodec = t.type({
  x: t.number,
  y: t.number,
});
const add = (args: { x: number; y: number }) => args.x + args.y;

const helloAtCodec = t.type({
  name: t.string,
  location: t.string,
});

const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

const helloSumCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
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

// interface IHelloMultiply {
//   name: string;
//   number: { x: number; y: number; z: number };
// }

const helloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

interface IHelloMultiply extends t.TypeOf<typeof helloMultiplyCodec> {}
// type IHelloMultiply2 = t.TypeOf<typeof helloMultiplyCodec>  Can also code like this, but not commpnly used anymore

const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});

const helloReduceCodec = t.type({
  name: t.string,
  numbers: t.array(t.number),
});

interface IHelloReduce extends t.TypeOf<typeof helloReduceCodec> {}

// interface IHelloReduce {
//   name: string;
//   numbers: number[];
// }

const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, r) => acc + r, 0);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createdAt: new Date(),
  };
};

const helloOrderCodec = t.type({
  name: t.string,
  orders: t.array(
    t.type({
      product: t.string,
      price: t.number,
    })
  ),
});

console.log(helloReduceCodec.decode({
  "name": "Teak",
  "numbers": [1, 2, 3]
}))

console.log(helloOrderCodec.decode({
  "name": "Teak",
  "orders": [
      {
          "product": "ticket",
          "price": 200
      },
      {
          "product": "bed",
          "price": 20000
      }
  ]
  
}))

interface IHelloOrder extends t.TypeOf<typeof helloOrderCodec> {}

// interface IHelloOrder {
//   name: string;
//   orders: Array<{
//     product: string;
//     price: number;
//   }>;
// }

const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createdAt: new Date(),
  };
};

// const isNumber = (data: any) => typeof data === "number";

// const isString = (data: any) => typeof data === "string";

// const isBoolean = (data: any) => typeof data === "boolean";

// const isArray = (data: any) => Array.isArray(data);

const app: Application = express();

app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  if (addCodec.decode(body)._tag === "Right") {
    const result = add(body); //เขียนแบบนี้หรือจะเขียน body เต็มๆ เหมือนข้ออื่นก็ได้
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  if (helloAtCodec.decode(body)._tag === "Right") {
    const result = helloAt({ name: body?.name, location: body?.location });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(helloSumCodec.decode(body));
  if (helloSumCodec.decode(body)._tag === "Right") {
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
  console.log(helloMultiplyCodec.decode(body));
  if (helloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req.body;
  if (helloReduceCodec.decode(body)._tag === "Right") {
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
  if (helloOrderCodec.decode(body)._tag === "Right") {
    const result = helloOrder(body); // ส่งbodyได้เลยหากมั่นใจว่าเป็น type ตรง
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
