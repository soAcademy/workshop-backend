import express, { Application, Request, Response } from "express";

// Hello Add
const add = (x: number, y: number) => x + y;

// Hello At
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

// ็Hello Sum ไว้ใช้กับข้างล่าง
const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

// Hello Multiply อันนี้เป็น Function แบบตัวคูณเลขไว้หลังชื่อของเรา
interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}
const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createAt: new Date(),
});

//Hello Reduce ตัวนี้ไม่ใช่หมายถึง
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

// Hello Order อันนี้เราแค่ให้มัน Sum ตัวแลขออกมาไม่ได้ให้มนัขึ้นเป็น Product
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

// Express Server อันนี้เราจะส่งตัวแปรไปตรง ๆ
const app: Application = express();
app.use(express.json());
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

// อันนี้เราจะส่งตัวแปรเป็ฯ Object ไปแทน
app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location,
  });
  res.status(200).send(result);
});

// อันนี้เราจะใช้เรียก function hellosum ที่เขียนไว้ข้างบน
app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloSum({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  console.log(result);
  res.status(200).json(result);
});

// หัวใจสำคัญของเรื่องนี้คือตัว interface มัน เพราะ interface กำหนด fucntion ว่าไง ตัวแปรข้างล่างก็ทำตาม
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloMultiply({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
});

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloReduce({
    name: body?.name,
    numbers: body?.numbers,
  });
  res.status(200).json(result);
});

app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloOrder(body);
  res.status(200).json(result);
});

app.listen(3200, () => {
  console.log("Server start on port 3200!");
});
