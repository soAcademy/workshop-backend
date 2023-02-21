import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello Teak1!");
});

app.get("/hello2", (req: Request, res: Response) => {
  res.send("Hello Teak2!");
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
