// import axios from "axios";
import express, { Application, Request, Response } from "express";

const app: Application = express();

// app.use(express.json());

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});

const f1 = (x: number, y: number) => Math.min(x + y);
const f2 = (x: string, y: string) => x + y;
const f3 = (x: boolean, y: number) => (x ? y : -y);
const f4 = (x: Date) => x.toLocaleDateString();
const f5 = (x: number[]) => x.reduce((acc, n) => acc + n, 0);
const f6 = (x: string[]) => x.join("###");
const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
const f8 = (x: { a1: number; a2: number[] }) =>
  x.a1 + x.a2.reduce((acc, n) => acc + n, 0);
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
    { a1: "world", a2: 20 },
  ])
);

interface IF10Args {
  a1: string;
  a2: number;
}

const f10 = (x: IF10Args[]) => x[0].a2 + x[1].a2;

interface IF11Args {
  a1: number | string;
  a2: number | string;
}

const f11 = (x: IF11Args) => `${x.a1} ${x.a2}`;

interface IF12Args {
  num1: number[];
}

const f12 = (args: IF12Args) => args.num1.reduce((acc, n) => acc + n, 0);

interface IF13Args {
  a1: number;
  a2: string;
  a3: IF12Args;
}

const f13 = (args: IF13Args) => args.a3.num1.reduce((acc, n) => acc + n, 0);

console.log(f13({ a1: 10, a2: "Bin", a3: { num1: [1, 2, 3] } }));

interface IF14Args extends IF13Args {
  a4: boolean;
}

const f14 = (args: IF14Args) => args.a3.num1.reduce((acc, n) => acc + n, 0);

console.log(f14({ a1: 10, a2: "Bin", a3: { num1: [1, 2, 3] }, a4: true }));
