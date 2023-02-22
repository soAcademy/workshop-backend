import express,{Application,Request,Response} from "express"

const app: Application = express();
app.use(express.json());

const add = (x:number,y:number)=> x+y

const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
  // มีการ rap หลายๆ type ไว้ด้วยกัน
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

// ############### fire API ##################
// 1. สังเกตุโครงสร้าง type ก่อนว่าเป็นยังไง ใส่ input ให้ตรงตามนั้น
// 2. อย่าลืม เปิด listen port ก่อนยิงจ้า



// #####################################################
//                   Express Server
// #####################################################


app.post("/function/add", (req:Request,res:Response)=>{
  const body = req?.body;
  const result = add(body?.x,body?.y);
  res.status(200).send(`Result: ${result}`);
  //.send = เพราะเป็น string
})

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location,
  });
  res.status(200).json(result);
});

app.post("/function/helloSum", (req:Request, res:Response)=> {
  const body = req.body;
 const result = helloSum({
  name: body?.name,
  number: {x:body.number.x, y:body.number.y, z:body.number.z}
 });
 res.status(200).json(result);
})

app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})

