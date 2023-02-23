import express, { Application, Request, Response } from "express";
import * as t from "io-ts";

// สร้าง function

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

// interface IHelloMultiply {
//   name: string;
//   number: { x: number; y: number; z: number };
// }

const HelloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
});

interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}

const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});

// interface IHelloReduce {
//   name: string;
//   numbers: number[];
// }

const HelloReduceCodec = t.type({
  name: t.string,
  numbers: t.array(t.number),
});

interface IHelloReduce extends t.TypeOf<typeof HelloReduceCodec> {}

const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, r) => acc + r, 0);
  return {
    text: `hello ${args.name} reduce ${result}`,
    createdAt: new Date(),
  };
};

// interface IHelloOrder {
//   name: string;
//   orders: {
//     product: string;
//     price: number;
//   }[];
// }

const HelloOrderCodec = t.type({
  name: t.string,
  orders: t.array(
    t.type({
      product: t.string,
      price: t.number,
    })
  ),
});

interface IHelloOrder extends t.TypeOf<typeof HelloOrderCodec> {}

const helloOrder = (args: IHelloOrder) => {
  const result = args.orders.reduce((acc, r) => acc + r.price, 0);
  return {
    text: `Hello ${args.name} order ${result}`,
    createdAt: new Date(),
  };
};

const isNumber = (data: any) => typeof data === "number";
const isString = (data: any) => typeof data === "string";
// const isArray = (data: any) => Array.isArray(data);
// const isObject = (data: any) => Object.values(data); // ยังไม่มั่นใจ
// const isBoolean = (data: any) => typeof data === "boolean"; // ยังไม่ได้ใช้

// Express Server

const app: Application = express();

app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  if (isNumber(body?.x) && isNumber(body?.y)) {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Error invalid codec" }); // ควรจะส่งเป็น json ให้ from เหมือนกัน
  }
});
// body
// {
//   "x": 25,
//   "y": 1
// }
// answer
// Result: 26

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  if (isString(body?.name) && isString(body?.location)) {
    const result = helloAt({
      name: body?.name,
      location: body?.location,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});
// body
// {
//   "name": "First",
//   "location": "Bangkok"
// }
// answer
// {
//   "text": "Hello First at Bangkok",
//   "createdAt": "2023-02-22T04:25:09.517Z"
// }

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isNumber(body?.number.x) &&
    isNumber(body?.number.y) &&
    isNumber(body?.number.z)
  ) {
    const result = helloSum({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});
// body
// {
//   "name": "First!!",
//   "number": {
//       "x": 5,
//       "y": 4,
//       "z": 1
//   }
// }
// answer
// {
//   "text": "Hello First!! sum 10",
//   "createdAt": "2023-02-22T04:34:33.992Z"
// }

app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(HelloMultiplyCodec.decode(body));

  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});
// body
// {
//   "name": "First!!",
//   "number": {
//       "x": 5,
//       "y": 4,
//       "z": 1
//   }
// }
// answer
// {
//   "text": "Hello First!! multiply 20",
//   "createdAt": "2023-02-22T04:39:09.370Z"
// }

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(HelloReduceCodec.decode(body));

  // const result = helloReduce({
  //   name: body?.name,
  //   numbers: body?.numbers,
  // });
  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});
// body
// {
//   "name": "First!!",
//   "numbers": [
//       1,
//       2,
//       3,
//       4,
//       5,
//       6,
//       7,
//       8,
//       9,
//       10
//   ]
// }
// answer
// {
//   "text": "hello First!! reduce 55",
//   "createdAt": "2023-02-22T04:41:57.057Z"
// }

app.post("/function/helloOrder", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(JSON.stringify(HelloOrderCodec.decode(body)));
  console.log(HelloOrderCodec.decode(body));

  if (HelloOrderCodec.decode(body)._tag === "Right") {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
});
// body
// {
//   "name": "First!!",
//   "orders": [
//       {
//           "product": "MacBook Air พร้อมชิป M1",
//           "price": 34900
//       },
//       {
//           "product": "AppleCare+ สำหรับ Mac",
//           "price": 6500
//       }
//   ]
// }
// answer
// {
//   "text": "Hello First!! order 41400",
//   "createdAt": "2023-02-22T04:49:58.380Z"
// }

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});

//////////////////////////////////////////////////////////////////////////////////////////////
// const f1 = (x: number, y: number) => Math.min(x, y);
// const f2 = (x: string, y: string) => x + y;
// const f3 = (x: boolean, y: number) => (x === true ? y : -y);
// const f4 = (x: Date) => new Date(x).toLocaleDateString();
// const f5 = (x: number[]) => x.reduce((acc, r) => acc + r, 0);
// const f6 = (x: string[]) => x.join(" ->  ");
// const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
// const f8 = (x: { a1: number; a2: number[] }) =>
//   x.a1 + x.a2.reduce((acc, r) => acc + r, 0);
// const f9 = (x: { a1: string; a2: number }[]) => x[1].a2 + x[1].a1;

// console.log(f1(2, 6));
// console.log(f2("Hello", " World!!"));
// console.log(f3(false, 26));
// console.log(f4(new Date()));
// console.log(f5([1, 2, 3, 4, 5]));
// console.log(f6(["1", "2", "3", "4", "5"]));
// console.log(f7({ a1: 5, a2: 6 }));
// console.log(f8({ a1: 7, a2: [8, 9, 10] }));
// console.log(
//   f9([
//     { a1: "Meow!!", a2: 8 },
//     { a1: "First", a2: 9 },
//   ])
// );

// //////// interface

// // f10
// interface IF10Args {
//   a1: string;
//   a2: number;
// }

// const f10 = (x: IF10Args[]) => x[0].a2 + x[1].a2;

// console.log(
//   f10([
//     { a1: "Meow!!", a2: 8 },
//     { a1: "First", a2: 9 },
//   ])
// );

// // f11
// interface IF11Args {
//   a1: number | string;
//   a2: number | string;
// }

// const f11 = (x: IF11Args) => `${x.a1}${x.a2}`;

// console.log(f11({ a1: "First ", a2: 1 }));

// f12
// interface IF12Args {
//   num1: number[];
// }

// const f12 = (x: IF12Args) => x.num1.reduce((acc, r) => acc + r, 0);

// console.log(f12({ num1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }));

// f13
// interface IF13Args {
//   a1: number;
//   a2: string;
//   a3: IF12Args;
// }

// const f13 = (x: IF13Args) => x.a3.num1.reduce((acc, r) => acc + r, 0);

// console.log(f13({ a1: 10, a2: "First!", a3: { num1: [5, 6, 8, 97, 1] } }));

// f14
// interface IF14Args extends IF13Args {
//   a4: boolean;
// }

// const f14 = (x: IF14Args) =>
//   x.a4 ? x.a3.num1.reduce((acc, r) => acc + r, 0) : false;

// console.log(
//   f14({ a1: 10, a2: "First!", a3: { num1: [5, 6, 8, 97, 1] }, a4: false })
// );

// // f15 ????
// // interface IF15Args {
// //   data: IF14Args[];
// // }

// // const f15 = (x: IF15Args) => x.data;

// // console.log(
// //   f15({
// //     data: [{ a1: 10, a2: "First!", a3: { num1: [5, 6, 8, 97, 1] }, a4: false }],
// //   })
// // );

// // force type

// // example 1
// const f14_1 = (args: IF14Args): number =>
//   args.a3.num1.reduce((acc, r) => acc + r, 0);
// // example 2
// const f14_2 = (args: IF14Args) =>
//   args.a3.num1.reduce((acc, r) => acc + r, 0) as number;
// // example 3
// const f14_3 = (args: IF14Args): { a1: number; a2: string } => ({
//   a1: 3,
//   a2: "First!",
// });
// // example 4
// const f14_4 = (args: IF14Args) =>
//   ({ a1: 3, a2: "First!" } as { a1: number; a2: string });

// // example 5 สร้าง interface มาบังคับ types
// interface IF14Result {
//   a1: number;
//   a2: string;
// }

// const f14_5 = (args: IF14Args): IF14Result => ({ a1: 3, a2: "First!" });

// // example 6
// const f14_6 = (args: IF14Args) => ({ a1: 3, a2: "Second!" } as IF14Result);
