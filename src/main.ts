import express,{ Application, Request, Response} from "express";

const app: Application = express();

app.get("/",(req: Request, res: Response)=>{
  res.send("Hello Backend!10");
});

app.listen(5500,()=>{
  console.log("Sever start on port 5500");
});