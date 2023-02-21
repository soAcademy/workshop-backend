import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  query.name === "Bin"
    ? res.status(200).send(query)
    : res.status(500).send("ERROR: name not found");
});

app.post("/post-status-code", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  body.name === "Bin"
    ? res.status(200).send(body)
    : res.status(500).send("ERROR: name not found");
});

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});
