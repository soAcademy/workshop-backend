import express,{Application,Request,Response} from "express";

const app: Application = express();

app.use(express.json());

app.get("/get-query",(req:Request, res:Response) => {
  const query = req?.query;
  console.log(query);
  res.send(query);
  //เทสใน path บน browser ได้ & post man
  // http://localhost:4000/get-query?var1=123&var2=boeing&var3=mike
})

app.post("/post-query", (req:Request, res:Response) => {
  const body = req.body
  console.log(body);
  res.send(body);
  //post รับเป็น body
  //เทสใน post man เท่านั้น
  // body > raw > json
}) 


app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})
