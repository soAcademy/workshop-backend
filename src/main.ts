import express, { Application, Request, Response} from "express";

const app : Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Bond!");
});

app.listen(3200, () =>{
  console.log("Server start on port 3200!");
});