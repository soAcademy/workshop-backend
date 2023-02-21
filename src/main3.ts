import express, { Application, Request, Response } from "express";
const app: Application = express();

// ทดลองส่งค่า parameters ให้ API ผ่าน GET และ POST method

// ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json());

app.get("/get-query", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  res.send(query);
});

app.post("/post-query", (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  res.send(body);
});

app.get("/get-sum", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  const num1 = Number(query?.num1);
  const num2 = Number(query?.num2);
  const sum = num1 + num2;

  // res.send(sum); // รันไม่ได้ เพราะคิดว่าเป็น status code
  res.send(`${sum}`); // รันได้ เพราะทำให้เป็น string
});

app.post("/post-sum", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  const num1 = Number(body?.num1);
  const num2 = Number(body?.num2);
  const sum = num1 + num2;

  // res.send(sum); // รันไม่ได้ เพราะคิดว่าเป็น status code
  res.send(`${sum}`); // รันได้ เพราะทำให้เป็น string
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
