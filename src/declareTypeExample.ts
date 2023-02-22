import express, { Application, Request, Response } from "express";
const app: Application = express();
import axios from "axios";

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                    ตัวอย่าง การประกาศ Type
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const f1 = (x: number, y: number) => Math.min(x, y);
const f2 = (x: string, y: string) => x + y;
const f3 = (x: boolean, y: number) => (x ? y : -y);
const f4 = (x: Date) => new Date(x).toLocaleDateString();
const f5 = (x: number[]) => x.reduce((acc, r) => acc + r, 0);
const f6 = (x: string[]) => x.join("###");
const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
const f8 = (x: { a1: number; a2: number[] }) =>
  x.a1 + x.a2.reduce((acc, r) => acc + r, 0);
const f9 = (x: { a1: string; a2: number }[]) => x[0].a2 + x[1].a2;

console.log("F1 : ", f1(1, 5));
console.log("F2 : ", f2("hello", "bin"));
console.log("F3 : ", f3(true, 5));
console.log("F4 : ", f4(new Date()));
console.log("F5 : ", f5([1, 2, 3, 4, 5]));
console.log("F6 : ", f6(["hello", "bin", "world"]));
console.log("F7 : ", f7({ a1: 10, a2: 20 }));
console.log("F8 : ", f8({ a1: 10, a2: [20, 30, 40] }));
console.log(
  "F9 : ",
  f9([
    { a1: "bin", a2: 10 },
    { a1: "world", a2: 20 },
  ])
);
