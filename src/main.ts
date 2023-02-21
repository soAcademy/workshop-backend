import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());  //เพื่อให้ POST method รับข้อมูลแบบ JSON ได้

app.get("/get-query", (req: Request, res: Response) => { // eg http://localhost:3000/get-query?var=1&var=23
  const query = req?.query;
  console.log(query);
  res.send(query);
});

app.post("/post-query", (req: Request, res: Response) => { //พิมพ์ใน body 
  const body = req.body;
  console.log(body);
  res.send(body);
});

app.get("/get-sum", (req: Request, res: Response) => { //eg http://localhost:3000/get-sum?number1=1&number2=2
  const query = req?.query;
  console.log(query);
  const number1 = Number(query.number1);
  const number2 = Number(query.number2);
  const sum = number1 + number2;
  res.send(`${sum}`)
})

app.post("/post-sum", (req: Request, res: Response) => {
  const body = req.body;
  console.log("body2", body);
  const number1 = Number(body.number1);
  const number2 = Number(body.number2);
  const sum = number1 + number2;
  res.send(`${sum}`)
})

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
