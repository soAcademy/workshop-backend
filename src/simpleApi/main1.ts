import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello First!");
});

app.get("/hello2", (req: Request, res: Response) => {
  res.send("Hello P'Bin!");
});

app.get("/get1", (req: Request, res: Response) => {
  const number = 15;
  res.send(`API1: ${number}`); // แปลงเป็น str ก่อน
});

app.get("/get2", (req: Request, res: Response) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = arrNumbers.reduce((acc, r) => acc + r, 0);
  res.send(`API2: ${sum}`);
});

app.get("/get3", (req: Request, res: Response) => {
  const profile = {
    name: "First",
    location: "Chiang Mai",
    age: 24,
  };
  // res.send(`API3: ${JSON.stringify(profile)}`);
  // res.send(profile); // ต้องส่งเป็น json
  res.json(profile);
});

app.get("/get4", (req: Request, res: Response) => {
  const products = [
    {
      name: "Chelsea Home Stadium Shirt 2022-23",
      price: 2900,
    },
    {
      name: "Chelsea Away Stadium Shirt 2022-23",
      price: 2900,
    },
  ];
  // res.send(products); // แบบนี้ ไม่ควร
  res.json(products);
});

app.get("/get5", (req: Request, res: Response) => {
  const products = [
    {
      name: "Chelsea Home Stadium Shirt 2022-23",
      price: 2900,
    },
    {
      name: "Chelsea Away Stadium Shirt 2022-23",
      price: 2900,
    },
  ];
  res.json(products); // ในกรณีส่งเป็น Object ควรจะส่งแปป json
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
