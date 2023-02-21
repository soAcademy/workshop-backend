import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Teak");
});

app.get("/get1", (req: Request, res: Response) => {
  const number1 = 15;
  res.send(`API1: ${number1}`);   //${} is needed as numbers need to be converted to string
});

app.get("/get2", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = numbers.reduce((acc, r) => acc + r, 0);
  res.send(`API2: ${sum}`); //use res.send() for string
});

app.get("/get3", (req: Request, res: Response) => {
  const profile = {
    name: "Teak",
    location: "Bangkok",
    age: 30,
  };
  console.log(profile)
  res.json(profile);  //res.json() for objects
  // if use res.send() for objects might get content type problems
});

app.get("/get4", (req: Request, res: Response) => {
  const products = [
    {
      name: "collagen",
      price: 390,
    },
    {
      name: "Vit C",
      price: 290,
    },
  ];
  res.send(products);
});

app.get("/get5", (req: Request, res: Response) => {
  const products =
  [
    {
      name: "collagen",
      price: 390,
    },
    {
      name: "Vit C",
      price: 290,
    },
  ];
  res.json(products) //res.json if info is objects or objects within array
});
app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
