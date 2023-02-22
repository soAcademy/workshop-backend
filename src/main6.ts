import express, { Application, Request, Response } from "express";
const app: Application = express();
import axios from "axios";

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

// Hello Order
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

// Express Server <--- ตรงนี้ปกติแล้ว declare อยู่ข้างบน (บรรทัด 2) ลำดับการ declare มีผลมั้ย?
// const app: Application = express();

// Structure : ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json());

//%%%%%%%%%%%%%
//function add
//%%%%%%%%%%%%%
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

//ตัวอย่างจาก main 3 : ที่มันสามารถคำนวณเป็นตัวเลขได้เพราะ ที่ตัวแปร num1 และ num2 มีการครอบ Number() เอาไว้
//เลยทำให้ตอนใส่ข้อมูลที่เป็น string ใน postman จึงสามารถคำนวณออกมาเป็นตัวเลขได้
app.post("/post-sum", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  const num1 = Number(body?.num1);
  const num2 = Number(body?.num2);
  const sum = num1 + num2;

  // res.send(sum); // รันไม่ได้ เพราะคิดว่าเป็น status code
  res.send(`${sum}`); // รันได้ เพราะทำให้เป็น string
});

//%%%%%%%%%%%%%
// Hello At
//%%%%%%%%%%%%%
app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location,
  });
  res.status(200).json(result);
});

//%%%%%%%%%%%%%
// Hello Sum
//%%%%%%%%%%%%%
app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloSum({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
});

//%%%%%%%%%%%%%%%%
// Hello Multiply
//%%%%%%%%%%%%%%%%
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloMultiply({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
});

//%%%%%%%%%%%%%%%%
// Hello Reduce
//%%%%%%%%%%%%%%%%
app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloReduce({
    name: body?.name,
    numbers: body?.numbers,
  });
  res.status(200).json(result);
});

//%%%%%%%%%%%%%%%%
// Hello Order
//%%%%%%%%%%%%%%%%
app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloOrder(body);
  res.status(200).json(result);
});

app.post("/function/helloOrder2", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloOrder({
    name: body?.name,
    orders: body?.orders,
  });
  res.status(200).json(result);
});

// Structure :
app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
