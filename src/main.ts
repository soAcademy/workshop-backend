// import axios from "axios";
import express, { Application, Request, Response } from "express";
import * as t from "io-ts";
import { AppRoutes } from "./routes";

// const AddCodec = t.type({ x: t.number, y: t.number });

// const add = (x: number, y: number) => x + y;

// const HelloAtCodec = t.type({ name: t.string, location: t.string });

// const helloAt = (args: { name: string; location: string }) => ({
//   text: `Hello ${args.name} at ${args.location}`,
//   createdAt: new Date(),
// });

// const HelloSumCodec = t.type({
//   name: t.string,
//   number: t.type({
//     x: t.number,
//     y: t.number,
//     z: t.number,
//   }),
// });

// const helloSum = (args: {
//   name: string;
//   number: { x: number; y: number; z: number };
// }) => ({
//   text: `Hello ${args.name} sum ${
//     args.number.x + args.number.y + args.number.z
//   }`,
//   createdAt: new Date(),
// });

// interface IHelloMultiply {
//   name: string;
//   number: { x: number; y: number; z: number };
// }

// const HelloMultiplyCodec = t.type({
//   name: t.string,
//   number: t.type({
//     x: t.number,
//     y: t.number,
//     z: t.number,
//   }),
// });

// interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}
// type IHelloMultiply = t.TypeOf<typeof HelloMultiplyCodec>;

// const helloMultiply = (args: IHelloMultiply) => ({
//   text: `Hello ${args.name} multiply ${
//     args.number.x * args.number.y * args.number.z
//   }`,
//   createdAt: new Date(),
// });

interface IHelloReduce {
  name: string;
  numbers: number[];
}

const HelloReduceCodec = t.type({
  name: t.string,
  numbers: t.array(t.number),
});

const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, n) => acc + n, 0);
  return { text: `Hello ${args.name} reduce ${result}`, createdAt: new Date() };
};

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
  const result = args.orders.reduce(
    (accPrice, order) => accPrice + order.price,
    0
  );
  return { text: `Hello ${args.name} order ${result}`, createdAt: new Date() };
};

// const isNumber = (data: any) => typeof data === "number";

// const isString = (data: any) => typeof data === "string";

// const isObject = (data: any) => typeof data === "object";

// const isArray = (data: any) => Array.isArray(data);

const app: Application = express();

app.use(express.json());

// app.post("/function/add", (req: Request, res: Response) => {
//   const body = req?.body;
//   // if (isNumber(body?.x) && isNumber(body?.y)) {
//   if (AddCodec.decode(body)._tag === "Right") {
//     const result = add(body?.x, body?.y);
//     res.status(200).send(`Result: ${result}`);
//   } else {
//     res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
//   }
// });

// app.post("/function/helloAt", (req: Request, res: Response) => {
//   const body = req?.body;
//   // if (isString(body?.name) && isString(body?.location)) {
//   if (HelloAtCodec.decode(body)._tag === "Right") {
//     const result = helloAt({ name: body?.name, location: body?.location });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
//   }
// });

// app.post("/function/helloSum", (req: Request, res: Response) => {
//   const body = req?.body;
//   if (
//     // isString(body?.name) &&
//     // isObject(body?.number) &&
//     // isNumber(body?.number.x) &&
//     // isNumber(body?.number.y) &&
//     // isNumber(body?.number.z)
//     HelloSumCodec.decode(body)._tag === "Right"
//   ) {
//     const result = helloSum({
//       name: body?.name,
//       number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
//   }
// });

// app.post("/function/helloMultiply", (req: Request, res: Response) => {
//   const body = req?.body;
//   // console.log(HelloMultiplyCodec.decode(body));
//   if (
//     // isString(body?.name) &&
//     // isObject(body?.number) &&
//     // isNumber(body?.number.x) &&
//     // isNumber(body?.number.y) &&
//     // isNumber(body?.number.z)
//     HelloMultiplyCodec.decode(body)._tag === "Right"
//   ) {
//     const result = helloMultiply({
//       name: body?.name,
//       number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
//   }
// });

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    // isString(body?.name) &&
    // isArray(body?.numbers) &&
    // body?.numbers.every(isNumber)
    HelloReduceCodec.decode(body)._tag === "Right"
  ) {
    const result = helloReduce({
      name: body?.name,
      numbers: body?.numbers,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
});

app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    // isString(body?.name) &&
    // isArray(body?.orders) &&
    // body?.orders.every(isObject) &&
    // body?.orders.every((order: any) => isString(order.product)) &&
    // body?.orders.every((order: any) => isNumber(order.price))
    HelloOrderCodec.decode(body)._tag === "Right"
  ) {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
});

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: Request, response: Response) => route.action(request, response)
  );
});
