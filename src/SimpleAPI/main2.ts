import express, { Application, Request, Response } from "express";

const app: Application = express();

app.post("/post1", (req: Request, res: Response) => {
  const number = 95;
  res.send(`${number}`); // ต้อง return เป็น string
});

app.post("/post2", (req: Request, res: Response) => {
  const number = [1, 2, 5, 7, 9];
  const sum = number.reduce((acc, r) => acc + r);
  res.send(`API sum : ${sum}`);
});

//send Object
app.post("/post3", (req: Request, res: Response) => {
  const profile = {
    name: "Dew",
    location: "BKK",
    tel: "093-537-2883",
  };
  res.json(profile);
});

app.post("/post4", (req: Request, res: Response) => {
  const product = [
    {
      name: "iphone",
      price: 500,
    },
    {
      name: "sumsung",
      price: 100,
    },
  ];
  res.send(product);
});

app.post("/post5", (req: Request, res: Response) => {
  const product = [
    {
      name: "iphone",
      price: 500,
    },
    {
      name: "sumsung",
      price: 100,
    },
  ];
  res.json(product);
});
app.listen(5500, () => {
  console.log("Sever start on port 5500");
});
