import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/get-query", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  res.send(query);
});

app.post("/post-query", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  res.send(body);
});

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});
