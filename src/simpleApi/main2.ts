import express, { Application, Request, Response } from "express";

const app: Application = express();

app.post("/", (req: Request, res: Response) => {
  res.send("Hello Bin!");
});

app.post("/post1", (req: Request, res: Response) => {
  const number1 = 15;
  res.send(`API1: ${number1}`);
});

app.post("/post2", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  res.send(`API2: ${sum}`);
});

app.post("/post3", (req: Request, res: Response) => {
  const profile = {
    name: "Bin",
    location: "Bangkok",
    age: 30,
  };
  res.send(profile);
});

app.post("/post4", (req: Request, res: Response) => {
  const products = [
    { name: "Collagen", price: 390 },
    { name: "Vit C", price: 290 },
  ];
  res.send(products);
});

app.post("/post5", (req: Request, res: Response) => {
  const products = [
    { name: "Collagen", price: 390 },
    { name: "Vit C", price: 290 },
  ];
  res.json(products);
});

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});
