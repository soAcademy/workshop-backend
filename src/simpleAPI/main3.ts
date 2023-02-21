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

app.get("/get-sum",(req:Request, res:Response)=>{
  const query = req?.query;
  console.log(query);
  const number1 = Number(query?.number1);
  const number2 = Number(query?.number2);
  const sum = number1 + number2

  res.send(`${sum}`) // รันได้ เพราะทำให้เป็น string
   //http://localhost:4000/get-sum?number1=7&number2=4
  //output 11
})

app.post("/post-sum", (req: Request, res: Response) => {
  const body = req?.body; //body*
  console.log(body);
  const number1 = Number(body?.number1);
  const number2 = Number(body?.number2);
  const sum = number1 + number2;

  res.send(`${sum}`) // รันได้ เพราะทำให้เป็น string
//เทสใน postman > body > raw > json > ใส่เลขไปใน obj > send > answer
 
});



app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})
