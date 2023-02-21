import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json()); //เพื่อให้ POST method รับข้อมูลแบบ JSON ได้

app.get("/get/nested", (req: Request, res: Response) => {
  res.status(200).send("Nested1");
});

app.get("/get/nested2/:id", (req: Request, res: Response) => {
  const params = req?.params;
  console.log(params);
  res.status(200).send(`id: ${params?.id}`);
});

app.get("/get/nested3/:id/:title", (req: Request, res: Response) => {
  const params = req?.params; 
  console.log(params);
  res.status(200).send(`id: ${params?.id}, title: ${params?.title}`)
})

app.get("/get/nested4/:id/:title/:id1/:title1", (req: Request, res: Response) => {
  const params = req?.params; 
  console.log(params);
  res.status(200).send(`id: ${params?.id}, title: ${params?.title}, id1: ${params?.id1}, title1: ${params?.title1}`)
})

app.get("/get/nested5", (req: Request, res: Response) => {  
  const obj1 = {
    a1: 1,
    a2: 2
  }
  const obj2 = {
    b1: 11,
    b2: 12,
  }
  res.status(200).json({obj1, obj2})
})

app.get("/get/nested6", (req: Request, res: Response) => {  
  const obj1 = {
    a1: 1,
    a2: 2
  }
  const obj2 = {
    b1: 11,
    b2: 12,
  }
  res.status(200).json([obj1, obj2])
})


app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
