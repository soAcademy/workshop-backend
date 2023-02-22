import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();
app.use(express.json());

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

console.log(">>(1)", f1(1, 5));
console.log(">>(2)", f2("Dew", "Dev"));
console.log(">>(3)", f3(true, 5));
console.log(">>(4)", f4(new Date()));
console.log(">>(5)", f5([1, 2, 3, 4, 5]));
console.log(">>(6)", f6(["Dew", "Dev"]));
console.log(">>(7)", f7({ a1: 10, a2: 20 }));
console.log(">>(8)", f8({ a1: 15, a2: [1, 2, 3, 4] }));
console.log(
  ">>(9)",
  f9([
    { a1: "Dew", a2: 10 },
    { a1: "Dev", a2: 55 },
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
const f11 = (x: IF11Args) => `${x.a1} + ${x.a2}`;

interface IF12Args {
  num1: number[];
}
const f12 = (args: IF12Args) => args.num1.reduce((acc, r) => acc + r, 0);

interface IF13Args {
  a1: number;
  a2: string;
  a3: IF12Args;
}
const f13 = (args: IF13Args) => args.a3.num1.reduce((acc, r) => acc + r, 0);

console.log(
  "f13",
  f13({
    a1: 10,
    a2: "Dew",
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
    a2: "Dew",
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
  a2: string;
}
//force type
const f14_1 = (args: IF14Args): number =>
  args.a3.num1.reduce((acc, r) => acc + r, 0);
const f14_2 = (args: IF14Args) =>
  args.a3.num1.reduce((acc, r) => acc + r, 0) as number;
const f14_3 = (args: IF14Args): { a1: number; a2: string } => ({
  a1: 3,
  a2: "Dew",
});
const f14_4 = (args: IF14Args) =>
  ({ a1: 3, a2: "Dew" } as { a1: number; a2: string });
const f15_5 = (args: IF14Args): IF14Result => ({ a1: 3, a2: "Dew" });

app.listen(5000, () => {
  console.log("Sever start on port 5000");
});
