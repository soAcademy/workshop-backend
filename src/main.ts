import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/user/register", (req: Request, res: Response) => {
  // res.send("Hello World 5555");
  res.json({
    name: "Earth",
    age: 27,
  });
  // res.status(200).send('Good')
  // res.status(500).send('Error')
});

app.listen(5555, () => {
  console.log("Server start on port 5555!");
});
