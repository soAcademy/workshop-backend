import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json()); // ตัวกำหนดให้ express เห็นข้อมูลเป็น json

app.get("/get-query", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  res.send(query);
});

//http://localhost:3000/get-query?var1=123&var2=abc&var3=456

app.post("/post-query", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  res.send(body);
});

// เขียนข้อมูลใน Postman ไปที่ body -> raw -> json
// {
//   "name": "First",
//   "location": "Chiang Mai",
//   "age": 24
// }

app.get("/get-sum", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  const number1 = Number(query?.number1);
  const number2 = Number(query?.number2);
  const sum = number1 + number2;
  // res.send(sum); // จะรันไม่ได้ เพราะคิดว่าเป็น status code
  res.send(`${sum}`);
});

//http://localhost:3000/get-sum?number1=20&number2=6

app.post("/post-sum", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  const number1 = Number(body?.number1);
  const number2 = Number(body?.number2);
  const sum = number1 + number2;
  res.send(`${sum}`);
})

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
