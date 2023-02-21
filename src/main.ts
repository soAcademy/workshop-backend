import express,{Application,Request,Response} from "express";

const app: Application = express();
app.get("/",(req: Request, res: Response)=>{
  res.send("Hi ,Boeing747");
});

app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})
