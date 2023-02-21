import express,{Application,Request,Response} from "express";


const temp : number = 3
const tempObj:{name:string,age:number,option?:string} = {name:'abc',age:123,option:'adf'}
//สร้าง function

const add = (x:number,y:number)=> x+y;

// Hello At
const helloAt = (args: {name: string; location:string}) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date()
})

// Hello Sum
const helloSum = (args: {
 name: string;
 number: {x: number; y:number; z:number};
}) => ({
  text: `Hello ${args.name} at ${args.number.x + args.number.y + args.number.z}`,
  createAt: new Date()
})

interface IHelloMultiply {
  name: string;
  number: {
    x: number; y:number; z: number
  }
}
// Hello Multiply
const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createAt: new Date()
})

//hello Reduce
interface IHelloReduce {
  name: string;
  numbers: number[] | undefined;
}

const helloReduce = (args: IHelloReduce) => {
  //typeof = การบอกชนิดของสิ่งที่เราวางไว้ต่อจากมันว่าสิ่งนั้นเป็น type อะไร ซึ่งมันจะบอก type ออกมาเป็น string
  if (typeof args.numbers === 'object'){
    const result = args.numbers.reduce((acc,r)=> acc + r,0);
    return {
      text: `Hello ${args.name} reduce ${result}`,
      createAt: new Date()
    }
  }
}

//hello Order
interface IHelloOrder {
  name: string;
  orders: {
    product: string,
    price: number
  }[];
}

const helloOrder = (args: IHelloOrder) =>{
  const result = args.orders.reduce((acc,r)=> acc + r.price, 0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createAt: new Date(),
  }
}
// #####################################################
//                   Express Server
// #####################################################


const app: Application = express();
app.use(express.json());

app.post("/function/add", (req:Request,res:Response)=>{
  const body = req?.body;
  const result = add(body?.x,body?.y);
  res.status(200).send(`Result: ${result}`);
  //.send = เพราะเป็น string
})

app.post("/function/helloAt", (req:Request,res:Response)=>{
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location
  });
  res.status(200).json(result);
})

app.post("/function/helloSum",(req:Request, res:Response)=>{
  const body = req?.body;
  const result = helloSum({
    name: body?.name,
    number: {x:body?.number.x, y:body?.number.y, z:body?.number.z}
  });
  res.status(200).json(result)
})

app.post("/function/helloMultiply", (req:Request,res:Response)=>{
  const body = req?.body;
  const result = helloMultiply({
    name: body?.name,
    number: {x:body?.number.x, y:body?.number.y, z:body?.number.z}
  });
res.status(200).json(result)
})

app.post("/function/helloReduce", (req:Request,res:Response)=>{
  const body = req.body;
  const result = helloReduce({
    name: body?.name,
    numbers: body?.number
  })
  res.status(200).json(result)
})

app.post("/function/helloOrder", (req:Request, res:Response)=>{
  const body = req?.body;
  const result = helloOrder(body);
  res.status(200).json(result);
})

app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})
