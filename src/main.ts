import express, { Application, Request, Response } from "express"

const app: Application = express();

app.get("/hello",(req: Request, res: Response) => {
  res.send("Hello Na");
});

app.get("/hello2",(req: Request, res: Response) => {
  res.send("Hello Na2");
});

app.listen(3100, () => {
  console.log("Server start on port 3100");
})
