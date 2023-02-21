import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

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

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
