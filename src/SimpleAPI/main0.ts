import express,{ Application, Request, Response} from "express";

const app: Application = express();

app.get("/hello",(req: Request, res: Response)=>{
  res.send("Hello Backend!800");
});

app.get("/hello2",(req: Request, res: Response)=>{
  res.send("Hello The World!");
});


app.listen(5500,()=>{
  console.log("Sever start on port 5500");
});