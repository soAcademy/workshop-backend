// import axios from "axios";
import express, { Application, Request, Response } from "express";

const add = (x: number, y: number) => x + y;

const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

const helloSum = (args: {
  name: string;
  number: { x: number; y: number; z: number };
}) => ({
  text: `Hello ${args.name} sum ${
    args.number.x + args.number.y + args.number.z
  }`,
  createdAt: new Date(),
});

interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}

const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});

interface IHelloReduce {
  name: string;
  numbers: number[];
}

const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, n) => acc + n, 0);
  return { text: `Hello ${args.name} reduce ${result}`, createdAt: new Date() };
};

const app: Application = express();

app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({ name: body?.name, location: body?.location });
  res.status(200).json(result);
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloSum({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
});

app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloMultiply({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
});

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloReduce({
    name: body?.name,
    numbers: body?.numbers,
  });
  res.status(200).json(result);
});

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});

// const f1 = (x: number, y: number) => Math.min(x + y);
// const f2 = (x: string, y: string) => x + y;
// const f3 = (x: boolean, y: number) => (x ? y : -y);
// const f4 = (x: Date) => x.toLocaleDateString();
// const f5 = (x: number[]) => x.reduce((acc, n) => acc + n, 0);
// const f6 = (x: string[]) => x.join("###");
// const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
// const f8 = (x: { a1: number; a2: number[] }) =>
//   x.a1 + x.a2.reduce((acc, n) => acc + n, 0);
// const f9 = (x: { a1: string; a2: number }[]) => x[0].a2 + x[1].a2;

// console.log(f1(1, 5));
// console.log(f2("hello", "bin"));
// console.log(f3(true, 5));
// console.log(f4(new Date()));
// console.log(f5([1, 2, 3, 4, 5]));
// console.log(f6(["hello", "bin", "world"]));
// console.log(f7({ a1: 10, a2: 20 }));
// console.log(f8({ a1: 10, a2: [20, 30, 40] }));
// console.log(
//   f9([
//     { a1: "bin", a2: 10 },
//     { a1: "world", a2: 20 },
//   ])
// );

// interface IF10Args {
//   a1: string;
//   a2: number;
// }

// const f10 = (x: IF10Args[]) => x[0].a2 + x[1].a2;

// interface IF11Args {
//   a1: number | string;
//   a2: number | string;
// }

// const f11 = (x: IF11Args) => `${x.a1} ${x.a2}`;

// interface IF12Args {
//   num1: number[];
// }

// const f12 = (args: IF12Args) => args.num1.reduce((acc, n) => acc + n, 0);

// interface IF13Args {
//   a1: number;
//   a2: string;
//   a3: IF12Args;
// }

// const f13 = (args: IF13Args) => args.a3.num1.reduce((acc, n) => acc + n, 0);

// console.log(f13({ a1: 10, a2: "Bin", a3: { num1: [1, 2, 3] } }));

// interface IF14Args extends IF13Args {
//   a4: boolean;
// }

// const f14 = (args: IF14Args) => args.a3.num1.reduce((acc, n) => acc + n, 0);

// console.log(f14({ a1: 10, a2: "Bin", a3: { num1: [1, 2, 3] }, a4: true }));

// const f14_1 = (args: IF14Args): number =>
//   args.a3.num1.reduce((acc, n) => acc + n, 0);

// const f14_2 = (args: IF14Args) =>
//   args.a3.num1.reduce((acc, n) => acc + n, 0) as number;

// const f14_3 = (args: IF14Args): { a1: number; a2: string } => ({
//   a1: 3,
//   a2: "Bin",
// });

// const f14_4 = (args: IF14Args) =>
//   ({
//     a1: 3,
//     a2: "Bin",
//   } as { a1: number; a2: string });

// const f14_6 = (args: IF14Args) =>
//   ({
//     a1: 3,
//     a2: "Bin",
//   } as IF14Args);
