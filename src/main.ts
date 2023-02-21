import express,{Application,Request,Response} from "express";
import axios from "axios";

const app: Application = express();
app.use(express.json());

// สร้าง Nested Path

app.get("/get/nested1", (req:Request,res:Response) => {
  res.status(200).send("Nested1")
});

app.get("/get/nested2/:id",(req:Request,res:Response) => {
  const params = req?.params
  console.log(params);
  res.status(200).send(`id: ${params.id}`)
});

app.get("/get/nested3/:id/:title",(req:Request,res:Response) => {
  const params = req?.params
  console.log(params);
  res.status(200).send(`id:${params.id}, title: ${params.title}`)
})

app.get("/get/nested5", (req: Request, res: Response) => {
  const obj1 = {
    a1: 1,
    a2: 2,
  };
  const obj2 = {
    b1: 11,
    b2: 22,
  };
  res.status(200).json([obj1, obj2]);
});


app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})
