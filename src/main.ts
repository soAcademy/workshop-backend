import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json());

app.get("/get/nested1", (req: Request, res: Response) => {
  res.status(200).send("Nested1");
});

app.get("/get/nested2/:id", (req: Request, res: Response) => {
  const params = req?.params;
  console.log(params);
  res.status(200).send(`id:${params?.id}`);
});

app.get("/get/nested2/:id/:title", (req: Request, res: Response) => {
  const params = req?.params;
  console.log(params);
  res.status(200).send(`id:${params?.id}, title:${params?.title}`);
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
