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

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location,
  });
  res.status(200).json(result);
});

app.post("/post-sum", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  const num1 = Number(body?.num1);
  const num2 = Number(body?.num2);
  const sum = num1 + num2;

  // res.send(sum); // รันไม่ได้ เพราะคิดว่าเป็น status code
  res.send(`${sum}`); // รันได้ เพราะทำให้เป็น string
});

// Structure :
app.listen(3100, () => {
  console.log("Server start on port 3100!");
});


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                    ตัวอย่าง การประกาศ Type
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const f1 = (x: number, y: number) => Math.min(x, y);
const f2 = (x: string, y: string) => x + y;
const f3 = (x: boolean, y: number) => (x ? y : -y);
const f4 = (x: Date) => new Date(x).toLocaleDateString();
const f5 = (x: number[]) => x.reduce((acc, r) => acc + r, 0);
const f6 = (x: string[]) => x.join("###");
const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
const f8 = (x: { a1: number; a2: number[] }) =>
  x.a1 + x.a2.reduce((acc, r) => acc + r, 0);
const f9 = (x: { a1: string; a2: number }[]) => x[0].a2 + x[1].a2;

console.log("F1 : ", f1(1, 5));
console.log("F2 : ", f2("hello", "bin"));
console.log("F3 : ", f3(true, 5));
console.log("F4 : ", f4(new Date()));
console.log("F5 : ", f5([1, 2, 3, 4, 5]));
console.log("F6 : ", f6(["hello", "bin", "world"]));
console.log("F7 : ", f7({ a1: 10, a2: 20 }));
console.log("F8 : ", f8({ a1: 10, a2: [20, 30, 40] }));
console.log(
  "F9 : ",
  f9([
    { a1: "bin", a2: 10 },
    { a1: "world", a2: 20 },
  ])
);
