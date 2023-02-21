import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/hello1", (req: Request, res: Response) => {
  res.send("Hello, Number 1");
});

app.get("/hello2", (req: Request, res: Response) => {
  res.send("Hello, Number 2");
});

app.get("/hello3", (req: Request, res: Response) => {
  res.send("Hello, Number 3");
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
