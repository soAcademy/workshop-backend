import express, { Application, Request, Response } from "express";
import axios from "axios";
import { Interface } from "readline";
import * as t from "io-ts";

// Use codec
const AddCodec = t.type({ x: t.number, y: t.number });

const add = (x: number, y: number) => x + y;

// Use codec
const HelloAtCodec = t.type({
  name: t.string,
  location: t.string,
});

const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createAt: new Date(),
});

// Use codec
const HelloSumCodec = t.type({
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
  createAt: new Date(),
});

interface IHelloMultipy {
  name: string;
  number: { x: number; y: number; z: number };
}

// Use codec
const HelloMultipyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

const helloMultipy = (args: IHelloMultipy) => ({
  text: `Hello ${args.name} multipy ${
    args.number.x * args.number.y * args.number.z
  }`,
  createAt: new Date(),
});

interface IHelloReduce {
  name: string;
  number: number[];
}

// Use codec
const HelloReduceCodec = t.type({
  name: t.string,
  number: t.array(t.number),
});

const helloReduce = (args: IHelloReduce) => {
  const reduceResult = args.number.reduce((acc, r) => acc + r, 0);
  return {
    text: `Hello ${args.name} Reduce = ${reduceResult}`,
    createAt: new Date(),
  };
};

interface IHelloOrder {
  name: string;
  orders: {
    product: string;
    price: number;
  }[];
}

// Use codec
const HelloOrderCodec = t.type({
  name: t.string,
  orders: t.array(t.type({ product: t.string, price: t.number })),
});

const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order = ${result}`,
    createAt: new Date(),
  };
};

const app: Application = express();
app.use(express.json());

// const isNumber = (data: any) => typeof data === "number";
// const isString = (data: any) => typeof data === "string";
// const isBoolean = (data: any) => typeof data === "boolean";
// const isObject = (data: any) => typeof data === "object";
// const isArray = (data: any) => Array.isArray(data);

// app.post("/function/add", (req: Request, res: Response) => {
//   const body = req?.body;
//   if (isNumber(body.x) && isNumber(body.y)) {
//     const result = add(body?.x, body?.y);
//     res.status(200).send(`Result: ${result}`);
//   } else {
//     // res.status(500).send("Error wrong input type");
//     res.status(500).json({ error: "Error invalid codec" });
//   }
// });

// app.post("/function/helloAt", (req: Request, res: Response) => {
//   const body = req?.body;
//   if (isString(body?.name) && isString(body?.location)) {
//     const result = helloAt({
//       name: body?.name,
//       location: body?.location,
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "Error invalid codec" });
//   }
// });

// app.post("/function/helloSum", (req: Request, res: Response) => {
//   const body = req?.body;
//   if (
//     isString(body?.name) &&
//     isNumber(body?.number.x) &&
//     isNumber(body?.number.y) &&
//     isNumber(body?.number.z)
//   ) {
//     const result = helloSum({
//       name: body?.name,
//       number: { x: body?.number.a, y: body?.number.b, z: body?.number.c },
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "Error invalid codec" });
//   }
// });

// app.post("/function/helloMultipy", (req: Request, res: Response) => {
//   const body = req?.body;

//   if (
//     isString(body?.name) &&
//     isNumber(body?.number.a) &&
//     isNumber(body?.number.b) &&
//     isNumber(body?.number.c)
//   ) {
//     const result = helloMultipy({
//       name: body?.name,
//       number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "Error invalid codec" });
//   }
// });

// app.post("/function/helloReduce", (req: Request, res: Response) => {
//   const body = req?.body;
//   if (
//     isString(body?.name) &&
//     isArray(body?.number) &&
//     body?.number.every((r: any) => isNumber(r))
//   ) {
//     const result = helloReduce({
//       name: body?.name,
//       number: body?.number,
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "Error invalid codec" });
//   }
// });

// app.post("/function/helloOrder", (req: Request, res: Response) => {
//   const body = req?.body;
//   if (
//     isString(body?.name) &&
//     isArray(body?.orders) &&
//     body?.orders.every((r: any) => isString(r.product) && isNumber(r.price))
//   ) {
//     const result = helloOrder({
//       name: body?.name,
//       orders: body?.orders,
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "Error invalid codec" });
//   }
// });

// Express server use Codec

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(AddCodec.decode(body));

  if (AddCodec.decode(body)._tag === "Right") {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    // res.status(500).send("Error wrong input type");
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloAtCodec.decode(body));

  if (HelloAtCodec.decode(body)._tag === "Right") {
    const result = helloAt(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloSumCodec.decode(body));

  if (HelloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloMultipy", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloMultipyCodec.decode(body));

  if (HelloMultipyCodec.decode(body)._tag === "Right") {
    const result = helloMultipy(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloReduceCodec.decode(body));

  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloOrderCodec.decode(body));

  if (HelloOrderCodec.decode(body)._tag === "Right") {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
