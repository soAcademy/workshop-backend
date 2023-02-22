import express, { Application, Request, Response } from "express";
import * as t from "io-ts";

const app: Application = express();

app.use(express.json());

//func check
// const isNumber = (data: any) => typeof data === "number";
// const isString = (data: any) => typeof data === "string";
// const isObject = (data: any) => typeof data === "object";
// const isArray = (data: any) => Array.isArray(data);

//ex.1
const add = (x: number, y: number) => x + y;
const AddCodec = t.type({ x: t.number, y: t.number });
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  AddCodec.decode(body)._tag === "Right"
    ? res.status(200).send(`Result: ${add(body?.x, body?.y)}`)
    : res.status(500).send(`ERROR: data mismatch!`);
  // isNumber(body?.x) && isNumber(body?.y)
  //   ? res.status(200).send(`Result: ${add(body?.x, body?.y)}`)
  //   : res.status(500).send(`ERROR: data mismatch!`);
});

//ex.2
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createAt: new Date(),
});
const HelloAtCodec = t.type({
  name: t.string,
  location: t.string,
});
app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  HelloAtCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloAt(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
  // isString(body?.name) && isString(body?.location)
  //   ? res.status(200).json(helloAt(body))
  //   : res.status(500).json({ message: `ERROR: data mismatch!` });
});

//ex.3
const helloSum = (args: IHelloSum) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createAt: new Date(),
});
const HelloSumCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});
interface IHelloSum extends t.TypeOf<typeof HelloSumCodec> {}
app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  HelloSumCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloSum(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
  // isString(body?.name) &&
  // isObject(body?.number) &&
  // Object.values(body?.number).every(isNumber)
  //   ? res.status(200).json(helloSum(body))
  //   : res.status(500).json({ message: `ERROR: data mismatch!` });
});

//ex.4
// interface IHelloMultiply {
//   name: string;
//   number: { x: number; y: number; z: number };
// }
interface IHelloMultiply extends t.TypeOf<typeof HelloSumCodec> {}
const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createAt: new Date(),
});
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  HelloSumCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloMultiply(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
  // isString(body?.name) &&
  // isObject(body?.number) &&
  // Object.values(body?.number).every(isNumber)
  //   ? res.status(200).json(helloMultiply(body))
  //   : res.status(500).json({ message: `ERROR: data mismatch!` });
});

//ex.5
// interface IHelloReduce {
//   name: string;
//   numbers: number[];
// }
const HelloReduceCodec = t.type({
  name: t.string,
  numbers: t.array(t.number),
});
interface IHelloReduce extends t.TypeOf<typeof HelloReduceCodec> {}
const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, r) => acc + r);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createAt: new Date(),
  };
};
app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  HelloReduceCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloReduce(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
  // isString(body?.name) &&
  // isArray(body?.numbers) &&
  // body?.numbers.every(isNumber)
  //   ? res.status(200).json(helloReduce(body))
  //   : res.status(500).json({ message: `ERROR: data mismatch!` });
});

//ex.6
// interface IHelloOrder {
//   name: string;
//   orders: {
//     product: string;
//     price: number;
//   }[];
// }
const HelloOrderCodec = t.type({
  name: t.string,
  orders: t.array(
    t.type({
      product: t.string,
      price: t.number,
    })
  ),
});
interface IHelloOrder extends t.TypeOf<typeof HelloOrderCodec> {}
const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createAt: new Date(),
  };
};
app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  HelloOrderCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloOrder(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
  // isString(body?.name) &&
  // isArray(body?.orders) &&
  // body?.orders.every(isObject) &&
  // body?.orders.map((r: { product: any }) => r.product).every(isString) &&
  // body?.orders.map((r: { price: any }) => r.price).every(isNumber)
  //   ? res.status(200).json(helloOrder(body))
  //   : res.status(500).json({ message: `ERROR: data mismatch!` });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
