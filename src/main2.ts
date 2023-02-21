import express, { Application, Request, Response } from "express";
const app: Application = express();

app.post("/hello1", (req: Request, res: Response) => {
  res.send("Hello, Number 1");
});

app.post("/hello2", (req: Request, res: Response) => {
  res.send("Hello, Number 2");
});

// ทดลองสร้าง API ผ่าน POST method

app.post("/post1", (req: Request, res: Response) => {
  const number1 = 15;
  res.send(`API-1 : ${number1}`);
});

app.post("/post2", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  res.send(`API-2 : ${sum}`);
});

app.post("/post3", (req: Request, res: Response) => {
  const profile = { name: "Cake", location: "Bangkok", age: 29 };
  res.send(profile);
  // res.send(`API-3 : ${profile}`); // output API-3 : [object Object]
});

//ถ้ารู้ข้อมูลชัวร์ๆแล้วว่าเป็น json type ควรใช้ res.json ไม่ควรใช้ res.send เพราะมีโอกาสส่งข้อม฿ลออกมาเป็น string ได้
app.post("/post4", (req: Request, res: Response) => {
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

app.post("/post5", (req: Request, res: Response) => {
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
  res.json(products);
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
