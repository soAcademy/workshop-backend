// อันนี้จะเป็นการสอนเรื่องการเรียกข้อมูลออกมาเป็น Data รูปแบบต่าง ๆ
// res.send คือที่สุดแล้ว
// ปกติดถ้าเป็ฯ object เราจะใช้ res.json ที่เราสามารถย่อและหุบได้
// เราเรียนเรื่องการใช้ Get (เปิดใน URL ได้) และ Post ( เหมาะกับการที่เราจะส่งตัว Data strucutre เข้าไปได้เลย เหนือชั้นกว่า get)
import express, { Application, Request, Response } from "express";
const app: Application = express();

// ทดลองสร้าง API ผ่าน GET Method
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

// อันนออกมาเป็น string
app.post("/Hello", (req: Request, res: Response) => {
  res.send("Hello Bond!");
});

// อันนออกมาเป็น number
app.post("/Hello1", (req: Request, res: Response) => {
  const number = 15;
  res.send(`API1: ${number}`);
});

// อันนี้เราจะสร้าง api ที่มันได้ตัว array ที่ถูก sum ออกมา
app.post("/Hello2", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = numbers.reduce((acc, r) => acc + r, 0);
  res.send(`API2: ${sum}`);
});

// ข้อมูลออกมาเป็น Object
app.post("/Hello3", (req: Request, res: Response) => {
  const profile = {
    name: "Bond",
    location: "Bangkok",
    age: 30,
  };
  res.send(profile);
});

// ข้อมูลที่ออกมาเป็ฯ Array of object
app.post("/Hello4", (Request: Request, res: Response) => {
  const products = [
    {
      name: "Collagen",
      price: 390,
    },
    {
      name: "Vit C",
      price: 290,
    },
  ];
  res.send(products);
});

app.post("/Hello5", (req: Request, res: Response) => {
  const products = [
    { name: "Collagen", price: 390 },
    { name: "Vit C", price: 290 },
  ];
  res.json(products);
});

app.listen(3200, () => {
  console.log("Server start on port 3200!");
});
