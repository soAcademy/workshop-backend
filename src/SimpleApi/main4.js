import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();
// ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json())

app.get("/get/nested1" , (req:Request, res:Response) => {
  res.status(200).send("nested1")
})
app.get("/get/nested2/:id" , (req:Request, res:Response) => {
  const params = req?.params
  res.status(200).send(params)
})
app.get("/get/nested3/:id/:name" , (req:Request, res:Response) => {
  const params = req?.params
  console.log(params)
  res.status(200).send(`params:${JSON.stringify(params)}, id: ${params?.id} name: ${params?.name}`)
})

app.listen(5555, () => {
  console.log("Server start on port 5555!");
});
