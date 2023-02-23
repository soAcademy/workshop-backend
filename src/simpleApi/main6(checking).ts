import express, { Application, Request, Response } from "express";
// validateType if / else (runtime type checking)
// (a: number, b: number) (runtime, external world)
// io-ts
// [APPPPPP
//  f1(a1: number, b1: number) -> (string, number)
//  f2(a2: string, b2: string) -> (number, number)
//  f3(a3: number, b3: number) -> (number)
// ] -> ()

// Runtime typechecking
// try {
//   runTimeTypeChecking(req.body);
//   process(req.body)
// } catch (e) {
//   send(e)
// }

// runtime type checking

const isString = (data: any) => typeof data === "string";

const isNumber = (data: any) => typeof data === "number";

const isBoolean = (data: any) => typeof data === "boolean";

const isArray = (data: any) => Array.isArray(data);

// สร้าง function

// Hello Add
const add = (x: number, y: number) => x + y;

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
interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}

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

// // Express Server
const app: Application = express();
app.use(express.json());

// Hello Add
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  if (isNumber(body.x) && isNumber(body.y)) {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

// Hello At
app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  if (isString(body.name) && isString(body.location)) {
    const result = helloAt({
      name: body?.name,
      location: body?.location,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

// Hello Sum
app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body.name) &&
    isNumber(body.number.x) &&
    isNumber(body.number.y) &&
    isNumber(body.number.z)
  ) {
    const result = helloSum({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });

    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

// Hello Multiply
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body.name) &&
    isNumber(body.number.x) &&
    isNumber(body.number.y) &&
    isNumber(body.number.z)
  ) {
    const result = helloMultiply({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});
// Hello Reduce
app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  // isArray(data) && !data.map((r) => isNumber(r.x) && isString(r.y)).some((r) =>r=== false)
  // !(5==4) would return true
  if (
    isString(body.name) &&
    isArray(body.numbers) &&
    body.numbers.every(isNumber)
  ) {
    const result = helloReduce({
      name: body?.name,
      numbers: body?.numbers,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

// Hello Order
app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body.name) &&
    isArray(body.orders) &&
    !body.orders
      .map((order: any) => isString(order.product) && isNumber(order.price))
      .some((r: any) => r === false)
    // body.orders.every((order:any) => isString(order.product)) &&
    // body.orders.every((order:any) => isNumber(order.price))
  ) {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
