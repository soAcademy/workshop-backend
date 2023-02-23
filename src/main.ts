import express, { Application, Request, Response } from "express";
import * as t from "io-ts";
// อันนี้เข้าเรื่อมของ Run-time type checking แต่ก็ยังอยู่ในเรื่อง Interface เหมือมเดิม
// ยิ่ง object เยอะ ยิ่งซับซ้อน เราเลยต้องเาอ Lib เข้ามาช่วย
// เอาตัวนี้ไปวางใช้ได้เลย เพราะมันจะเป็นตัวเชคว่าไหนยังไงที่ไม่เข้าพวก เพราะการทำหลังบ้าน Type ข้อมูลคือสำคัญ
const isString = (data: any) => typeof data === "string";
const isNumber = (data: any) => typeof data === "number";
const isoolean = (data: any) => typeof data === "boolean";
const isArray = (data: any) => Array.isArray(data);

// ตัวนี้ต้องมีเสมอ
const app: Application = express();
app.use(express.json());

// // อันนี้เป็นเรื่องของ Function Add เป็นตัวที่เชคว่าตัวเลขมันใช่มั้ย
// const add = (x: number, y: number) => x + y;
// // Express Server
// app.post("/function/add", (req: Request, res: Response) => {
//   const body = req?.body;
//   if (isNumber(body.x) && isNumber(body.y)) {
//     const result = add(body?.x, body?.y);
//     res.status(200).send(`Result: ${result}`);
//   } else {
//     res.status(500).json({ error: "Error invalid codec" });
//   }
// });

// const helloAt = (args: { name: string; location: string }) => ({
//   text: `Hello ${args.name} at ${args.location}`,
//   createdAt: new Date(),
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

// const helloSum = (args: {
//   name: string;
//   number: { x: number; y: number; z: number };
// }) => ({
//   text: `Hello ${args.name} sum ${
//     args.number.x + args.number.y + args.number.z
//   }`,
//   createdAt: new Date(),
// });
// // ข้างล่างนี้คือตัวที่เอาไว้ข้างล่าง
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
//       number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "Error invalid request" });
//   }
// });

// interface IHelloMultiply {
//   name: string;
//   number: { x: number; y: number; z: number };
// }
// const helloMultiply = (args: IHelloMultiply) => ({
//   text: `Hello ${args.name} multiply ${
//     args.number.x * args.number.y * args.number.z
//   }`,
//   createdAt: new Date(),
// });
// // ข้างล่างนี้คือตัวที่เอาไว้ข้างล่าง
// app.post("/function/helloMultiply", (req: Request, res: Response) => {
//   const body = req?.body;
//   if (
//     isString(body?.name) &&
//     isNumber(body?.number.x) &&
//     isNumber(body?.number.y) &&
//     isNumber(body?.number.z)
//   ) {
//     const result = helloMultiply({
//       name: body?.name,
//       number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: "Error Invalid Request" });
//   }
// });

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
// ข้างล่างนี้คือตัวที่เอาไว้ข้างล่าง
app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  if (isString(body?.name && isNumber(body?.numbers))) {
    const result = helloReduce({
      name: body?.name,
      numbers: body?.numbers,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error Invalid Request" });
  }
});

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
app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isNumber(body?.number.x) &&
    isNumber(body?.number.y) &&
    isNumber(body?.number.z)
  ) {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error Invalid Request" });
  }
});

// อันนี้ต้องมีทุกครั้งอารมณ์ export default ;
app.listen(3200, () => {
  console.log("Server start on port 3200!");
});
