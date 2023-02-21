import axios from "axios";
import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/get/nested1", (req: Request, res: Response) => {
  res.status(200).send("nested1");
});

app.get("/get/nested2/:id", (req: Request, res: Response) => {
  const params = req?.params;
  console.log(params);
  res.status(200).send(`id: ${params.id}`);
});

app.get("/get/nested3/:id/:title", (req: Request, res: Response) => {
  const params = req?.params;
  console.log(params);
  res.status(200).send(`id: ${params.id}, title: ${params.title}`);
});

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});
