import express, { Application, Request, Response } from "express";
import axios from "axios";
import { request } from "http";

const app: Application = express();
app.use(express.json());

const add = (x: number, y: number) => x + y;

const maybeNumber = (data: any) => typeof data === "number";

app.post("/post/add", (req: Request, res: Response) => {
  const body = req?.body;
  if (maybeNumber(body.x) && maybeNumber(body.y)) {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result ${result}`);
  } else {
    res.status(500).send("Error");
  }
});

app.listen(5000, () => {
  console.log("Sever start on port 5000");
});
