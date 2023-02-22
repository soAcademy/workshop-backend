import express, { Application,Request,Response } from "express";
import axios from "axios";

const app:Application = express();
app.use(express.json());

const f1 = (x:number, y:number) => Math.min(x, y);
const f2 = (x:string, y:string) => x+y;
const f3 = (x:boolean, y:number) => (x? y : -y);
const f4 = (x:Date) => new Date(x).toLocaleDateString();
const f5 = (x:number[]) => x.reduce((acc,r)=>acc+r,0);
const f6 = (x:string[]) => x.join('###');
const f7 = (x:{a1:number; a2:number}) => x.a1+x.a2;
const f8 = (x:{a1:number; a2:number[]}) => x.a1+x.a2.reduce((acc,r)=>acc+r,0);
const f9 = (x:{a1:string; a2:number}[]) => x[0].a2+x[1].a2;

console.log(">>(1)",f1(1,5));
console.log(">>(2)",f2("Dew","Dev"));
console.log(">>(3)",f3(true,5));
console.log(">>(4)",f4(new Date));
console.log(">>(5)",f5([1,2,3,4,5]));
console.log(">>(6)",f6(["Dew","Dev"]));
console.log(">>(7)",f7({a1:10,a2:20}));
console.log(">>(8)",f8({a1:15,a2:[1,2,3,4]}));
console.log(">>(9)",
f9([
  {a1:"Dew",a2:10},
  {a1:"Dev",a2:55}
]));


app.listen(5000,()=>{
  console.log("Sever start on port 5000");
});