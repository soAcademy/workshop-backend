import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello First!");
});

app.get("/hello2", (req: Request, res: Response) => {
  res.send("Hello P'Bin!");
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
