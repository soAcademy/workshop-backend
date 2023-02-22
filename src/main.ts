import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

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

const f1 = (x: number, y: number) => Math.min(x, y);
const f2 = (x: string, y: string) => x + y;
const f3 = (x: boolean, y: number) => (x === true ? y : -y);
const f4 = (x: Date) => new Date(x).toLocaleDateString();
const f5 = (x: number[]) => x.reduce((acc, r) => acc + r, 0);
const f6 = (x: string[]) => x.join("###");
const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
const f8 = (x: { a1: number; a2: number[] }) =>
  x.a1 + x.a2.reduce((acc, r) => acc + r, 0);
const f9 = (x: { a1: string; a2: number }[]) => x[0].a2 + x[1].a2; //array of objects

console.log("f1", f1(2, 3));
console.log("f2", f2("hello", "poom"));
console.log("f3", f3(false, 8));
console.log("f4", f4(new Date()));
console.log("f5", f5([2, 3, 4, 5]));
console.log("f6", f6(["a", "b", "c"]));
console.log("f7", f7({ a1: 5, a2: 6 }));
console.log("f8", f8({ a1: 1, a2: [2, 3, 4, 5] }));
console.log(
  "f9",
  f9([
    { a1: "poom", a2: 5 },
    { a1: "poom1", a2: 6 },
  ])
);
