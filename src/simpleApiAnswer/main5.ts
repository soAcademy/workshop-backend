import express, { Application, Request, Response, application } from "express";
import axios from "axios";

const app: Application = express();

// สร้าง Nested Path
// Purpose of Nested = ความสวยงานของ Endpoint จะไม่มี ?

// ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json());

app.get("/get/nested1", (req: Request, res: Response) => {
  res.status(200).send("Nested1");
});

app.get("/get/nested2/:id", (req: Request, res: Response) => {
  const params = req?.params;
  console.log(params);
  res.status(200).send(`id: ${params.id}`);
});

app.get("/get/nested3/:id/:title", (req: Request, res: Response) => {
  const params = req?.params;
  console.log(params);
  res.status(200).send(`id: ${params?.id}, title: ${params?.title}`);
});

app.get("/get/nested4", (req: Request, res: Response) => {
  const obj1 = {
    a1: 1,
    a2: 2,
  };
  const obj2 = {
    b1: 11,
    b2: 22,
  };
  res.status(200).json({ obj1, obj2 });
});

app.get("/get/nested5", (req: Request, res: Response) => {
  const obj1 = {
    a1: 1,
    a2: 2,
  };
  const obj2 = {
    b1: 11,
    b2: 22,
  };
  res.status(200).json([ obj1, obj2 ]);
});


app.listen(3500, () => {
  console.log("Server start on port 3500!");
});
