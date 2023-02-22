import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();
app.use(express.json());

const add = (x: number, y: number) => x + y;

app.post("/post/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result ${result}`);
});

app.listen(5000, () => {
  console.log("Sever start on port 5000");
});
