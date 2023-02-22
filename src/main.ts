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
  numbers: number[] // | undefined;
}

// const isArrayOfNumber = (data: any) => (data?.length === 0 || data === undefined || (data.length > 0 && typeof data === "number") ? true : false )

const maybeArrayOfNumber = (data: any) => (data?.length === 0 || data === undefined || (data.length > 0 && typeof data === "number") ? data : new Error("data is not array of numbers") )


const helloReduce = (args: IHelloReduce) => {

  if (args?.numbers?.length === 0 || args?.numbers === undefined || (args?.numbers?.length > 0 && typeof args.numbers === "number") ){
    const result = args.numbers.reduce((acc,r)=> acc + r,0);
    return {
      text: `Hello ${args.name} reduce ${result}`,
      createAt: new Date()
    }
  }

  try {
    const data = maybeArrayOfNumber(args.numbers);
  }catch(e) {
    console.log(e)
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


// validateType if / else (runtime type checking)
// (a: number, b: number) (runtime, external world)
// io-ts
// [APPPPPP
//  f1(a1: number, b1: number) -> (string, number)
//  f2(a2: string, b2: string) -> (number, number)
//  f3(a3: number, b3: number) -> (number)
// ] -> ()

// Runtime typechecking
// try {
//   runTimeTypeChecking(req.body);
//   process(req.body)
// } catch (e) {
//   send(e)
// }

const f1 = (x: number, y: number) => Math.min(x,y);
const f2 = (x: string, y: string) => x + y;
const f3 = (x: boolean, y:number) => (x ? y : -y);
const f4 = (x: Date) => new Date(x).toLocaleDateString();
const f5 = (x: number[]) => x.reduce((acc, r) => acc + r, 0);
const f6 = (x: string[]) => x.join("###");
const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
const f8 = (x: { a1: number; a2: number[] }) =>
  x.a1 + x.a2.reduce((acc, r) => acc + r, 0);
const f9 = (x: { a1: string; a2: number }[]) => x[0].a2 + x[1].a2;


console.log(f1(7, 4));
console.log(f2("hello", "boeing"));
console.log(f3(false, 7));
console.log(f4(new Date()));
console.log(f5([1,2,3]));
console.log(f6(["hello", "boeing","hahaha"]));
console.log(f7({ a1: 70, a2: 80 }));
console.log(f8({ a1: 10, a2: [20, 30, 40] }));
console.log(
  f9([
    { a1: "boeing", a2: 10 },
    { a1: "world", a2: 20 },
  ])
);
 
// #####################################################
//                   typeScript practice
// #####################################################

interface IF10Args {
  a1: string;
  a2: number;
}
const f10 = (x: IF10Args[]) => x[0].a2 + x[1].a2;

interface IF11Args {
  a1: number | string;
  a2: number | string;
}
const f11 = (x: IF11Args) => `${x.a1} ${x.a2}`

interface IF12Args {
  num1: number[];
}
const f12 = (args: IF12Args) => args.num1.reduce((acc,r)=> acc + r,0);

interface IF13Args {
  a1:number;
  a2:string;
  a3: IF12Args;
}

const f13 = (args: IF13Args) => args.a3.num1.reduce((acc,r)=>acc + r,0);
console.log(
  f13({
    a1: 10,
    a2: "boeing",
    a3: {
      num1: [1, 2, 3],
    },
  })
);

interface IF14Args extends IF13Args {
  a4: boolean;
}

const f14 = (args: IF14Args) => args.a3.num1.reduce((acc, r) => acc + r, 0);
console.log(
  f14({
    a1: 10,
    a2: "Bin",
    a3: {
      num1: [1, 2, 3],
    },
    a4: true,
  })
);

interface IF15Args {
  data: IF14Args[];
}

interface IF14Result {
  a1: number;
  a2:string;
}

const f14_1 = (args: IF14Args): number =>
  args.a3.num1.reduce((acc, r) => acc + r, 0);
const f14_2 = (args: IF14Args) =>
  args.a3.num1.reduce((acc, r) => acc + r, 0) as number;
const f14_3 = (args: IF14Args): { a1: number; a2: string } => ({
  a1: 3,
  a2: "Bin",
});
const f14_4 = (args: IF14Args) =>
  ({ a1: 3, a2: "Bin" } as { a1: number; a2: string });

const f14_5 = (args: IF14Args): IF14Result =>
({ a1: 3, a2: "Bin" });


const f14_6 = (args: IF14Args) =>
({ a1: 3, a2: "Bin" }) as IF14Result;


