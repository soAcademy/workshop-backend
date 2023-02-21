import express,{Application,Request,Response} from "express";

const app: Application = express();
app.get("/hello",(req: Request, res: Response)=>{
  res.send("Hi ,Boeing747");
});
app.get("/hello2",(req: Request, res: Response)=>{
  res.send("Hi ,Boeing777");
});

app.get("/get1",(req: Request, res: Response)=>{
  const number1 =15;
  res.send(`API1: ${number1}`)
});

app.get("/get2",(req:Request, res:Response)=>{
  const numbers=[1,2,3,4,5,6,7,8,9,10];
  const sum = numbers.reduce((acc,r)=> acc + r,0);
  res.send(`API2: ${sum}`)  //เหมาะกับการส่งเป็น string
})

app.get("/get3",(req:Request, res:Response)=>{
  const profile = {
    name: 'Boeing',
    location: 'Bangkok',
    age: 7
  };
  res.json(profile) // ถ้าก้อนที่เราจะส่งไปเป็น {} object เราจะต้อง send เป็น .json 
})

app.get("/get4",(req:Request, res:Response)=>{
  const products = [
    {
      name: "Collagen",
      price: 390
    },
    {
      name: "Vit C",
      price: 290
    }
  ]
  res.json(products)
})

app.get("/get5",(req:Request, res:Response)=>{
  const products = [
    {
      name: "Collagen",
      price: 390
    },
    {
      name: "Vit C",
      price: 290
    }
  ]
  res.send(products)
})

app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})
