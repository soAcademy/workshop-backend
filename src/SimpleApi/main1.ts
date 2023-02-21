import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello World 5555");
});
app.get("/user", (req: Request, res: Response) => {
  res.json([
    { name: "Earth", age: 27 },
    {
      name: "Pete",
      age: 105,
    },
  ]);
});
app.get("/user/earth", (req: Request, res: Response) => {
  res.json({
    name: "Earth",
    age: 27,
  });
});

app.get("/num", (req: Request, res: Response) => {
  const number = 15;
  res.send(`${number}`);
});

app.get("/sum", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5, 5, 6, 2, 2, 3];
  const sum = numbers.reduce((acc, i) => acc + i, 0);
  res.send(`number: [${numbers}],  sum: ${sum}`);
});
app.get("/profile", (req: Request, res: Response) => {
  const profile = {
    name: "Earth",
    age: 27,
  };
  res.json(profile);
});

app.get("/productssend", (req: Request, res: Response) => {
  const products = [
    { name: "Collagen", price: 390 },
    {
      name: "Vit C",
      price: 200,
    },
  ];
  res.send(products)
});
app.get("/productsjson", (req: Request, res: Response) => {
  const products = [
    { name: "Collagen", price: 390 },
    {
      name: "Vit C",
      price: 200,
    },
  ];
  res.json(products)
});

app.listen(5555, () => {
  console.log("Server start on port 5555!");
});
