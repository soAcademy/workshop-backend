import express, { Application, Request, Response } from "express";
const app: Application = express();

// res.send สำหรับ return เป็น string
// res.json get5 ออกมาเป็น json เลย
// JSON.stringify() The value to convert to a JSON string.
// JSON.parse() แปลง string เป็น json

app.post("/", (req: Request, res: Response) => {
  res.send("Hello Poom!");
});

app.post("/hello1", (req: Request, res: Response) => {
  res.send("Hello Poom1!");
});

app.post("/hello2", (req: Request, res: Response) => {
  res.send("Hello Poom2!");
});

app.post("/get1", (req: Request, res: Response) => {
  const number1 = 15;
  res.send(`API1: ${number1}`);
});

app.post("/get2", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = numbers.reduce((acc, r) => acc + r, 0);
  res.send(`API2: ${sum}`);
});

app.post("/get3", (req: Request, res: Response) => {
  const profile = {
    name: "Bin",
    location: "Bangkok",
    age: 30,
  };
  res.send(profile);
});

app.post("/get4", (req: Request, res: Response) => {
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

app.post("/get5", (req: Request, res: Response) => {
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
