import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/hallo", (req: Request, res: Response) => {
  res.send("Hallo Ball");
});

app.get("/hallo2", (req: Request, res: Response) => {
  res.send("Hallo Bank");
});


app.listen(3100, () => {
  console.log("Server start on port 3100");
});