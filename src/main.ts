import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello World 5555");
});
app.get("/user", (req: Request, res: Response) => {
  res.json([
    {name: "Earth",
    age: 27
  },{
    name: "Pete",
    age: 105
  }])
});
app.get("/user/earth", (req: Request, res: Response) => {
  res.json({
    name: "Earth",
    age: 27,
  });
});


app.listen(5555, () => {
  console.log("Server start on port 5555!");
});
