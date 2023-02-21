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

app.get("/getsum", (req: Request, res: Response) => {
  const query = req?.query;
  const x = Number(query?.x);
  const y = Number(query?.y);
  x && y ? res.send(String(x + y)) : res.send("no x, y data found");
});

app.post("/postsum", (req:Request, res:Response) => {
  const body = req?.body;
  const x = Number(body?.x)
  const y = Number(body?.y)
  const sum = x + y
  x && y ? res.send(`${sum} `) : res.send("no x, y data found")
})

app.listen(5555, () => {
  console.log("Server start on port 5555!");
});
