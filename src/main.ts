import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query;
  query.name === "Born"
    ? res.status(200).send(query)
    : res.status(500).send("ERROR : Name not found");
});

app.post("/post-status-code", (req: Request, res: Response) => {
  const body = req?.body;
  body.name === "Born"
    ? res.status(200).send(body)
    : res.status(500).send("ERROR : Name not found");
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
