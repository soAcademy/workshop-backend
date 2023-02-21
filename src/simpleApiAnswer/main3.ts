import express, { Application, Request, Response } from 'express'

const app: Application = express();

// ทดลองส่งค่า parameter ใ้ห้ API ผ่าน GET และ  POST method

// ต้องเพิ่มปรรทัดนี้เพื้อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json());

app.get("/get-query", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  res.send(query);
})
// http://localhost:3300/get-query?var=123&var=567&var=na

app.post("/post-query", (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  res.send(body)
})

app.get("/get-sum", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  const number1 = Number(query?.number1)
  const number2 = Number(query?.number2)
  const sum = number1 + number2

  // res.send(sum); // รันไม่ได้ เพราะคิดว่าเป็น status code
  res.send(`${sum}`) // รันได้ เพราะทำให้เป็น string
})

app.post("/post-sum", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  const number1 = Number(body?.number1)
  const number2 = Number(body?.number2)
  const sum = number1 + number2;

  // res.send(sum); // รันไม่ได้ เพราะคิดว่าเป็น status code
  res.send(`${sum}`) // รันได้ เพราะทำให้เป็น string
})

app.listen(3300, () => {
  console.log("Server is running on port 3300");
})