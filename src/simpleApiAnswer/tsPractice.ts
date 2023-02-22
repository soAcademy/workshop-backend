import express, { Application, Request, Response } from "express";

const app: Application = express();

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});

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

console.log(f1(1, 5));
console.log(f2("hello", "Kor"));
console.log(f3(true, 5));
console.log(f4(new Date()));
console.log(f5([1, 2, 3, 4, 5]));
console.log(f6(["hello", "bin", "world"]));
console.log(f7({ a1: 10, a2: 20 }));
console.log(f8({ a1: 10, a2: [20, 30, 40] }));
console.log(
  f9([
    { a1: "bin", a2: 10 },
    { a1: "world", a2: 20 },
  ])
);

interface IF10Args {
  a1: string;
  a2: number;
}

const f10 = (x: IF10Args) => x[0].a2 + x[1].a2

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

