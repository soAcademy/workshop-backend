// import "./simpleApis/main1";
// import "./simpleApis/main2";
// import "./simpleApis/main3";
// import "./simpleApis/main4";
// import "./simpleApis/main5";
// import "./simpleApis/main6";

// import express, { Application, Request, Response } from "express";

// const app: Application = express();

// app.get("/hello", (req: Request, res: Response) => {
//   res.send("Hello Express");
// });

// app.get("/hello2", (req: Request, res: Response) => {
//   res.send("Hello Express2");
// });

//basic typeScript
const f1 = (x: number, y: number) => Math.min(x, y);
const f2 = (x: string, y: string) => x + y;
const f3 = (x: boolean, y: number) => (x === true ? y : -y);
const f4 = (x: Date) => new Date(x).toLocaleDateString();
const f5 = (x: number[]) => x.reduce((acc, r) => acc + r, 0);
const f6 = (x: string[]) => x.join("_");
const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
const f8 = (x: { a1: number; a2: number[] }) =>
  x.a1 + x.a2.reduce((acc, r) => acc + r);
const f9 = (x: { a1: string; a2: number }[]) => x[0].a2 + x[1].a2;

console.log(f1(1, 5));
console.log(f2("hello", "bin"));
console.log(f3(true, 5));
console.log(f4(new Date()));
console.log(f5([1, 2, 3, 4, 5]));
console.log(f6(["hello", "bin", "world"]));
console.log(f7({ a1: 10, a2: 20 }));
console.log(f8({ a1: 10, a2: [20, 30, 40] }));
console.log(
  f9([
    { a1: "bin", a2: 10 },
    { a1: "world", a2: 30 },
  ])
);

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });
