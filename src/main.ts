import express, { Application, Request, Response } from "express";
import axios from "axios";

const add = (x: number, y: number) => x + y;

const app: Application = express();
app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
