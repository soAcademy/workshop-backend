import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

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

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
