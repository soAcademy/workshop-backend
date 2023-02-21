import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/get-query", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  res.send(query);
});

app.post("/post-query", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  res.send(body);
});

app.get("/get-sum", (req: Request, res: Response) => {
  const query = req?.query;
  const number1 = Number(query?.number1);
  const number2 = Number(query?.number2);
  const sum = number1 + number2;

  // res.send(sum);
  // res.send(String(sum));
  res.send(`${sum}`);
});

app.post("/post-sum", (req: Request, res: Response) => {
  const body = req?.body;
  const number1 = Number(body?.number1);
  const number2 = Number(body?.number2);
  const sum = number1 + number2;

  // res.send(sum);
  // res.send(String(sum));
  res.send(`${sum}`);
});

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});
