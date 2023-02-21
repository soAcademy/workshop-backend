// อันที่แล้วเราทำเป็ฯเหมือนกับ Error handling
// อันนี้เน้นสร้าง nested path
// เป้าหมายของการใช้ Nested คือเราต้องการ endpoint สวย ๆ หรือที่เราเรียกว่า URL สวย ๆ 
// เพราะตอนที่เราทำ query การที่เราจะเพิ่มค่าอะไรเข้าไปใน URL แบบ?numbe=1 มันจะทำให้ดูแปลก ๆ

import express, { Application, Request, Response } from "express";
import axios from "axios";
const app: Application = express();

app.use(express.json());

app.get("/get/nested1", (req: Request, res: Response) => {
  res.status(200).send("Nested1");
});

// มันคือการเรียก API แบบหนึ่งแต่ทำให้ URL มันสวยขึ้น
app.get("/get/nested2/:id", (req: Request, res: Response) => {
  const params = req?.params;
  res.status(200).send(`id: ${params?.id}`);
});

// อันนี้เราจะส่งให้มันขึ้นมาได้หลายค่า
// app.get("/get/nested3/:id/:title", (req: Request, res: Response) => {
//   const params = req?.params;
//   res.status(200).send(`id: ${params?.id}, title: ${params?.title}`);
// });

// เราจะ return ออกมาเป็น object สองก้อนไม่่ได้ เราต้องทำให้มันเหลือ object ก้อนเดียว
app.get("/get/nested4/:id", (req: Request, res: Response) => {
  const obj1 = {
    a1: 1,
    a2: 2,
  };
  const obj2 = {
    b1: 11,
    b2: 22,
  };
  res.status(200).json([obj1, obj2]);
});

app.listen(3200, () => {
  console.log("Server start on port 3200!");
});
