import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json()); // ตัวกำหนดให้ express เห็นข้อมูลเป็น json

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query;
  query.name === "First"
    ? res.status(200).send(query)
    : res.status(500).send("Error: Name not found");
});

//http://localhost:3000/get-status-code?name=First

app.post("/post-status-code", (req: Request, res: Response) => {
  const body = req?.body;
  body.name === "First"
    ? res.status(200).send(body)
    : res.status(500).send("Error: Name not found");
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
