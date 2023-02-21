import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json()); //เพื่อให้ POST method รับข้อมูลแบบ JSON ได้

app.get("/get-status-code", (req: Request, res: Response) => { //eg http://localhost:3000/get-status-code?name=Teak
  // eg http://localhost:3000/get-query?var=1&var=23
  const query = req?.query;
  query.name === "Teak"
    ? res.status(200).send(query)
    : res.status(500).send("ERROR: Name not found");
  console.log(query);
});

app.post("/post-status-code", (req: Request, res: Response) => {
  //พิมพ์ใน body
  const body = req?.body;
  body.name === "Teak"
    ? res.status(200).send(body)
    : res.status(500).send("ERROR: Name not found");
  console.log(body);
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
