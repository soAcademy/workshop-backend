import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello root!");
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello Bin!");
});

app.get("/hello2", (req: Request, res: Response) => {
  res.send("Hello 2 Bin!");
});

app.get("/hi", (req: Request, res: Response) => {
  res.send("Hi Bin!");
});

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});
