import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json()); // ตัวกำหนดให้ express เห็นข้อมูลเป็น json

app.get("/get/nested1", (req: Request, res: Response) => {
  res.status(200).send("Nested1");
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

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
