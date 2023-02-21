import express, { Application, Request, Response, query } from "express";

const app: Application = express();
app.use(express.json());  

app.get("/get-query",(req: Request, res : Response)=>{
  const query = req?.query;
  res.send(query);
  console.log(query);
});

app.post("/post-query",(req: Request, res : Response)=>{
  const body = req.body;
  console.log(body);
  res.send(body);
});

app.get("/get-sum",(req: Request, res:Response)=>{
  const query = req?.query;
  const number1 = Number(query?.number1);
  const number2 = Number(query?.number2);
  const sum = number1 + number2;
  res.send(`${sum}`);  //ต้องใส่เป็น string ถึง run ได้
  console.log(sum);
})

app.post("/post-sum",(req:Request, res:Response)=>{
  const body = req?.body;
  const number1 = Number(body?.number1);
  const number2 = Number(body?.number2);
  const sum = number1 + number2;
  res.send(`${sum}`)

});

app.listen(5500, () => {
  console.log("Sever start on port 5500");
});
