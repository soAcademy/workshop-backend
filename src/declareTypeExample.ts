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

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                    ตัวอย่าง การประกาศ Type by Interfaces
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

interface IF10Args {
  a1: string;
  a2: number;
}
const f10 = (x: IF10Args[]) => x[0].a2 + x[1].a2;
//----------------------------------------------------------------
interface IF11Args {
  a1: number | string;
  a2: number | string;
}
const f11 = (x: IF11Args) => `${x.a1} ${x.a2}`;
//----------------------------------------------------------------
interface IF12Args {
  num1: number[];
}
const f12 = (args: IF12Args) => args.num1.reduce((acc, r) => acc + r, 0);
//----------------------------------------------------------------
interface IF13Args {
  a1: number;
  a2: string;
  a3: IF12Args;
}
const f13 = (args: IF13Args) => args.a3.num1.reduce((acc, r) => acc + r, 0);

//----------------------------------------------------------------
interface IF14Args extends IF13Args {
  a4: boolean;
}
const f14 = (args: IF14Args) => args.a3.num1.reduce((acc, r) => acc + r, 0);

//----------------------------------------------------------------
interface IF15Args {
  data: IF14Args[];
}
const f15 = (args: IF15Args) => args.data;

// เรียกใช้ F13-F14-F15
console.log(
  "F13 : ",
  f13({
    a1: 10,
    a2: "Bin",
    a3: {
      num1: [1, 2, 3],
    },
  })
);
console.log(
  "F14 : ",
  f14({
    a1: 10,
    a2: "Bin",
    a3: {
      num1: [1, 2, 3],
    },
    a4: true,
  })
);

console.log(
  "F15 : ",
  f15({
    data: [
      {
        a1: 10,
        a2: "Bin",
        a3: {
          num1: [1, 2, 3],
        },
        a4: true,
      },
      {
        a1: 20,
        a2: "Cake",
        a3: {
          num1: [1, 2, 4],
        },
        a4: false,
      },
    ],
  })
);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//           ตัวอย่าง การประกาศ Type by Interfaces แบบ Force
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

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

interface IF14Result {
  a1: number;
  a2: string;
}

const f14_5 = (args: IF14Args): IF14Result => ({ a1: 3, a2: "Bin" });
const f14_6 = (args: IF14Args) => ({ a1: 3, a2: "Bin" } as IF14Result);