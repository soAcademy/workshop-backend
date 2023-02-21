import express, { Application, Request, Response, query } from "express";
import axios from "axios";

const app: Application = express();
app.use(express.json());

app.get("/get/nested1", (req: Request, res: Response) => {
  res.status(200).send("Nested 1");
});

app.get("/get/nested2/:id", (req: Request, res: Response) => {
  const inputParams = req?.params;
  console.log(inputParams);
  res.status(200).send(`INput params:${inputParams?.id}`);
});

app.get("/get/nested3/:id/:title", (req: Request, res: Response) => {
  const inputParams = req?.params;
  console.log(inputParams);
  res
    .status(200)
    .send(`Input params:${inputParams?.id} + ${inputParams?.title}`);
});

app.listen(5500, () => {
  console.log("Sever start on port 5500");
});
