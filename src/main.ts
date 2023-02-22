import express, { Application, Request, Response } from "express";

// Hello Add
const add = (x: number, y: number) => x + y;

// Hello At
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

// ็Hello Sum ไว้ใช้กับข้างล่าง
const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

// อันนี้เป็นแบบตัวคูณ
interface IHelloMultiply {
  name: string;
  number: {x: number; y:number; z: number};
}

const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x*args.number.y*args.number.z}`,
    createAt: new Date(),
});


// อันนี้เราจะส่งตัวแปรไปตรง ๆ 
const app: Application = express();
app.use(express.json());
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

// อันนี้เราจะส่งตัวแปรเป็ฯ Object ไปแทน
app.post("/function/helloAt", (req: Request, res: Response)=>{
  const body = req?.body;
  const result = helloAt ({
  name: body?.name,
  location: body?.location,
  });
  res.status(200).send(result);
});


// อันนี้เราจะใช้เรียก function hellosum ที่เขียนไว้ข้างบน   
app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloSum({
    name: body?.name,
    number: {x: body?.number.x, y: body?.number.y, z: body?.number.z},
  });
  console.log(result);
  res.status(200).json(result);
});

// หัวใจสำคัญของเรื่องนี้คือตัว interface มัน เพราะ interface กำหนด fucntion ว่าไง ตัวแปรข้างล่างก็ทำตาม
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloMultiply({
    name: body?.name,
    number: {x: body?.number.x, y: body?.number.y, z: body?.number.z},
  });
  res.status(200).json(result);
});


app.listen(3200, () =>{
  console.log("Server start on port 3200!");
});

