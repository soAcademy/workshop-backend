import express, { Application, Request, Response } from "express";
import { isRight } from "fp-ts/lib/Either";
import * as t from "io-ts";

const app: Application = express();
app.use(express.json());

// ------------------------------------------------------------

const AddCodec = t.type({
  x: t.number,
  y: t.number,
});

interface IAdd extends t.TypeOf<typeof AddCodec> {}

const add = (args: IAdd) => args.x + args.y;

console.log(
  "AddCodec",
  isRight(
    AddCodec.decode({
      x: 5,
      y: 11,
    })
  )
);

// ------------------------------------------------------------
const HelloAtCodec = t.type({
  name: t.string,
  location: t.string,
});

interface IHelloAt extends t.TypeOf<typeof HelloAtCodec> {}

const helloAt = (args: IHelloAt) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

console.log(
  "HelloAtCodec",
  isRight(
    HelloAtCodec.decode({
      name: "boeing",
      location: "wonderland",
    })
  )
);

// ------------------------------------------------------------

const HelloSumCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

interface IHelloSum extends t.TypeOf<typeof HelloSumCodec> {}

const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
  // มีการ rap หลายๆ type ไว้ด้วยกัน
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

console.log(
  "HelloSumCodec",
  isRight(
    HelloSumCodec.decode({
      name: "boeing",
      number: {
        x: 2,
        y: 2,
        z: 2,
      },
    })
  )
);

//---------------------------------------------------------------

const helloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

//interface extend
interface IHelloMultiply extends t.TypeOf<typeof helloMultiplyCodec> {}
//interface ใช้ได้กับ obj เท่านั้น

// or
type IHelloMultiply2 = t.TypeOf<typeof helloMultiplyCodec>;

//function part
const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});

console.log(
  "helloMultiplyCodec",
  isRight(
    helloMultiplyCodec.decode({
      name: "Boeing",
      number: {
        x: 2,
        y: 2,
        z: 2,
      },
    })
  )
);

// //----------------------------------------------------------

// interface IHelloReduce {
//   name: string;
//   number: number [];
// }
const HelloReduceCodec = t.type({
  name: t.string,
  number: t.array(t.number),
});

interface IHelloReduce extends t.TypeOf<typeof HelloReduceCodec> {}

const helloReduce = (args: IHelloReduce) => {
  const result = args.number.reduce((acc, r) => acc + r, 0);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createdAt: new Date(),
  };
};

console.log(
  "HelloReduceCodec",
  isRight(
    HelloReduceCodec.decode({
      name: "Boeing",
      number: [1, 2, 3],
    })
  )
);
//----------------------------------------------------------

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
    createdAt: new Date(),
  };
};

console.log(
  "HelloOrderCodec",
  isRight(
    HelloOrderCodec.decode({
      name: "Boeing",
      orders: [
        {
          product: "chicken",
          price: 100,
        },
        {
          product: "chicken",
          price: 100,
        },
        {
          product: "chicken",
          price: 100,
        },
      ],
    })
  )
);

// --------------------- fire API on postman ----------------------

// 1. สังเกตุโครงสร้าง type ก่อนว่าเป็นยังไง ใส่ input ให้ตรงตามนั้น
// 2. อย่าลืม เปิด listen port ก่อนยิงจ้า

// const maybeNumber = (data: any) => typeof data === "number";
// const maybeString = (data: any) => typeof data === "string";
// const maybeBoolean = (data: any) => typeof data === "boolean";
// const maybeArray = (data: any) => Array.isArray(data);

// ###################################################################
//                          Express Server
// ###################################################################

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(AddCodec.decode(body));

  if (AddCodec.decode(body)._tag === "Right") {
    const result = add(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
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
    res.status(500).json({ error: "Failed to validate codec" });
  }
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  console.log(HelloSumCodec.decode(body));

  if (HelloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
});

app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  console.log(helloMultiplyCodec.decode(body));

  if (helloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
});

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  console.log(HelloReduceCodec.decode(body));

  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
});

//when fire API we can add number as mush as we want to and then the function reduce will sum it
//remind > the number must be in [] like we create the schema type

app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req.body;
  if (HelloOrderCodec.decode(body)._tag === "Right") {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
  }
  res.status(500).json({ error: "Failed to validate codec" });
});

app.listen(4000, () => {
  console.log("Sever start on port 4000");
});
