import express,{Application,Request,Response} from "express"
import { isRight } from "fp-ts/lib/Either";
import * as t from "io-ts";

const app: Application = express();
app.use(express.json());

// const add = (x:number,y:number)=> x+y

// const helloAt = (args: { name: string; location: string }) => ({
//   text: `Hello ${args.name} at ${args.location}`,
//   createdAt: new Date(),
// });

// const helloSum = (args: {
//   name: string;
//   number: { x: number; y: number; z: number };
//   // มีการ rap หลายๆ type ไว้ด้วยกัน
// }) => ({
//   text: `Hello ${args.name} sum ${
//     args.number.x + args.number.y + args.number.z
//   }`,
//   createdAt: new Date(),
// });

//----------------- How About Interface ------------------

// Declare type part
// interface IHelloMultiply {
//   name: string;
//   number: {x:number,y:number,z:number};  
// }

//codec io-ts
const helloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  })
})

// ----------------------------------------------------------------
//interface extend 
interface IHelloMultiply extends t.TypeOf<typeof helloMultiplyCodec> {}
//interface ใช้ได้กับ obj เท่านั้น

// or
type IHelloMultiply2 = t.TypeOf<typeof helloMultiplyCodec>

//function part
const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${args.number.x * args.number.y * args.number.z}`,
  createdAt: new Date()
})

// //----------------------------------------------------------

// interface IHelloReduce {
//   name: string;
//   number: number [];
// }
const HelloReduceCodec = t.type({
  name: t.string,
  number: t.array(t.number)
})

interface IHelloReduce extends t.TypeOf<typeof HelloReduceCodec> {}

const helloReduce = (args:IHelloReduce) => {
  const result = args.number.reduce((acc,r)=>acc + r,0);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createdAt: new Date(),
  };
};

console.log(isRight(HelloReduceCodec.decode(
  {
    name: "Boeing",
    number: [1, 2, 3]
  }
)))
//----------------------------------------------------------

interface IHelloOrder {
  name: string;
  orders: {
    product: string,
    price: number
  }[];
  // it mean like have many {} are in []
}



const helloOrder = (args:IHelloOrder) => {
  const result = args.orders.reduce((acc,r)=> acc + r.price,0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createdAt: new Date(),
  }
}




// --------------------- fire API on postman ----------------------

// 1. สังเกตุโครงสร้าง type ก่อนว่าเป็นยังไง ใส่ input ให้ตรงตามนั้น
// 2. อย่าลืม เปิด listen port ก่อนยิงจ้า


const maybeNumber = (data: any) => typeof data === "number";
const maybeString = (data: any) => typeof data === "string";
const maybeBoolean = (data: any) => typeof data === "boolean";
const maybeArray = (data: any) => Array.isArray(data);


// ###################################################################
//                          Express Server
// ###################################################################


// app.post("/function/add", (req:Request,res:Response)=>{
//   const body = req?.body;
//   if(maybeNumber(body.x) && maybeNumber(body.y)) {
//   const result = add(body?.x,body?.y);
//   res.status(200).send(`Result: ${result}`)
//   //.send = เพราะเป็น string
//   } else {
//     res.status(500).json({error: "Server Error invalid codec"});
//   }
// })

// app.post("/function/helloAt", (req: Request, res: Response) => {
//   const body = req?.body;
//   if(maybeString(body.name) && maybeString(body.location)) {
//   const result = helloAt({
//     name: body?.name,
//     location: body?.location,
//   });
//   res.status(200).json(result);
// }else{
//   res.status(500).json({error:"Server Error invalid codec"})
// }
// })

// app.post("/function/helloSum", (req:Request, res:Response)=> {
//   const body = req.body;
//   if(maybeString(body.name) && maybeNumber(body.number)) {
//  const result = helloSum({
//   name: body?.name,
//   number: {x:body.number.x, y:body.number.y, z:body.number.z}
//  });
//  res.status(200).json(result)
// } else {
//   res.status(500).json({error:"Server Error invalid codec"})
// }
// })

app.post("/function/helloMultiply", (req:Request,res:Response)=>{
  const body = req.body;
  console.log(body);
  console.log(helloMultiplyCodec.decode(body));

  if(helloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply(body);
    res.status(200).json(result)
  } else {
    res.status(500).json({ error: "Failed to validate codec" })
  }
})

app.post("/function/helloReduce", (req:Request, res:Response)=>{
  const body = req.body;
 console.log(body);
 console.log(HelloReduceCodec.decode(body));

 if(HelloReduceCodec.decode(body)._tag === "Right") {
  const result = helloReduce(body);
  res.status(200).json(result)
 } else {
  res.status(500).json({error: "Failed to validate codec"})
 }
})
  
    //when fire API we can add number as mush as we want to and then the function reduce will sum it 
    //remind > the number must be in [] like we create the schema type
  
      app.post("/function/helloOrder", (req:Request,res:Response)=>{
        const body = req.body;
        maybeString(body.name) &&
        maybeArray(body.orders) &&
        body.orders.every((item:any) => maybeNumber(item.price)) && 
        body.orders.every((item:any)=>maybeString(item.product))
      
        ? res.status(200).json(helloOrder(body))
        : res.status(500).json({message: "Server Error invalid codec"})
      
        // if(maybeString(body.name) && maybeArray(body.orders)) {
        // const result = helloOrder(body)
        // res.status(200).json(result)
        // } else {
        //   res.status(500).json({error:"Server Error invalid codec"})
        // }
      })
    
      // ? res.status(200).json(helloOrder(body))
      // : res.status(500).json({message: "Server Error invalid codec"})
    
      // if(maybeString(body.name) && maybeArray(body.orders)) {
      // const result = helloOrder(body)
      // res.status(200).json(result)
      // } else {
      //   res.status(500).json({error:"Server Error invalid codec"})
      // }
// app.post("/function/helloOrder", (req:Request,res:Response)=>{
//   const body = req.body;
//   maybeString(body.name) &&
//   maybeArray(body.orders) &&
//   body.orders.price.every(maybeNumber) &&
//   body.orders.product.every(maybeString)
//   ? res.status(200).json(helloOrder(body))
//   : res.status(500).json({message: "Server Error invalid codec"})
// })


app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})

