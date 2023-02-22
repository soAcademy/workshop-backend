import express, { Application, Request, Response } from "express";
import axios from "axios";
import { isJsxClosingFragment } from "typescript";

const add = (x: number, y: number) => {
  return x + y;
};
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location} !!`,
  createdAt: new Date(),
});

const helloSum = (args: {
  name: string;
  numbers: { x: number; y: number; z: number };
}) => {
  return {
    text: `Hello ${args.name}`,
    result: args.numbers.x + args.numbers.y + args.numbers.z,
    createdAt: new Date(),
  };
};

const helloMultiply = (args: {
  name: string;
  numbers: { x: number; y: number; z: number };
}) => {
  return {
    text: `Hello ${args.name}`,
    result: args.numbers.x * args.numbers.y * args.numbers.z,
    createdAt: new Date(),
  };
};

interface IHelloReduce {
  name: string;
  numbers: number[];
}
const helloReduce = (args: IHelloReduce) => {
  const result = args.numbers.reduce((acc, e) => acc + e, 0);
  return {
    text: `Hello ${args.name}`,
    result: result,
    createdAt: new Date(),
  };
};

interface IHelloOrder {
  name: string;
  orders: {
    product: string;
    price: number;
  }[];
}
const sumOrders = (args: IHelloOrder) => {
  const total = args.orders.reduce((acc, e) => acc + e.price, 0);
  const orders = args.orders.map((e) => e.product);
  return {
    text: `Hello ${args.name}`,
    orders: orders,
    total: total,
    createdAt: new Date(),
  };
};

const app: Application = express();
// ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = add(body?.x, body?.y);
    typeof result === "number"
      ? res.status(200).send(`${result}`)
      : res.status(500).send("TYPE ERROR");
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt(body);
  res.status(200).json(result);
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = helloSum({
      name: body?.name,
      numbers: { x: body?.numbers.x, y: body?.numbers.y, z: body?.numbers.z },
    });
    typeof result.result === "number"
      ? res.status(200).json(result)
      : res.status(500).send("TYPE ERROR");
  } catch {
    res.status(500).send("ERROR");
  }
});

app.post("/function/helloMultiply", (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = helloMultiply({
      name: body?.name,
      numbers: { x: body?.numbers.x, y: body?.numbers.y, z: body?.numbers.z },
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/function/helloReduce", (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const numbers = Object.values(body?.numbers).map((e) => Number(e));
    const index = numbers.findIndex((number) => Number.isNaN(number));
    if (index === -1) {
      const result = helloReduce({
        name: body?.name,
        numbers: numbers,
      });
      res.status(200).json(result);
    } else {
      res.status(500).send("TYPE ERROR");
    }
  } catch (e) {
    res.status(500).send("TYPE ERROR");
  }
});

app.post("/function/helloOrders", (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = sumOrders({
      name: body?.name,
      orders: body?.orders,
    });
    typeof result.total === "number"
      ? res.status(200).json(result)
      : res.status(500).send("TYPE ERROR");
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(5555, () => {
  console.log("Server start on port 5555!");
});

const f1 = (x: number, y: number) => Math.min(x, y);
const f2 = (x: string, y: string) => x + y;
const f3 = (x: boolean, y: number) => (x ? y : -y);
const f4 = (x: Date) => new Date(x).toLocaleDateString();
const f5 = (x: number[]) => x.reduce((acc, e) => acc + e, 0);
const f6 = (x: string[]) => x.join("###");
const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
const f8 = (x: { a1: number; a2: number[] }) =>
  x.a1 + x.a2.reduce((acc, e) => acc + e, 0);
const f9 = (x: { a1: string; a2: number }[]) => x[0].a2 + x[1].a2;

console.log(f1(3, 5));
console.log(f2("Hello", "Earth"));
console.log(f3(false, 5));
console.log(f4(new Date()));
console.log(f5([1, 2, 3, 4, 5]));
console.log(f6(["hello", "earth", "555 "]));
console.log(f7({ a1: 30, a2: 40 }));
console.log(f8({ a1: 20, a2: [12, 3, 4, 5] }));
console.log(
  f9([
    { a1: "Hello", a2: 25 },
    { a1: "earth", a2: 3 },
  ])
);

// Interface
interface IF10Args {
  a1: string;
  a2: number;
}
const f10 = (x: IF10Args[]) => x[0].a2 + x[1].a2;
console.log(
  f10([
    { a1: "Earth", a2: 25 },
    { a1: "Earth", a2: 30 },
  ])
);
interface IF11Args {
  a1: number | string;
  a2: number | string;
}
const f11 = (x: IF11Args) => `${x.a1} ${x.a2}`;
console.log(f11({ a1: "Hello", a2: 15 }));
interface IF12Args {
  num1: number[];
}
const f12 = (x: IF12Args) => x.num1.reduce((acc, e) => acc + e, 0);
console.log(f12({ num1: [12, 3, 3, 4] }));
interface IF13Args {
  a1: number;
  a2: string;
  a3: IF12Args;
}
const f13 = (x: IF13Args) => x.a3.num1.reduce((acc, e) => acc + e, 0);
console.log(f13({ a1: 14, a2: "Hello", a3: { num1: [12, 2, 3, 4] } }));
interface IF14Args extends IF13Args {
  a4: boolean;
}
const f14 = (x: IF14Args) => x.a4 && x.a3.num1.reduce((acc, e) => acc + e, 0);
console.log(f14({ a1: 14, a2: "Hello", a3: { num1: [1, 2, 3, 4] }, a4: true }));

interface IF15Args {
  data: IF14Args[];
}
const f15 = (x: IF15Args) =>
  x.data[0].a3.num1.reduce((acc, e) => acc + e, 0) +
  x.data[1].a3.num1.reduce((acc, e) => acc + e, 0);
console.log(
  f15({
    data: [
      { a1: 14, a2: "Hello", a3: { num1: [1, 2, 3, 4] }, a4: true },
      { a1: 14, a2: "Hello", a3: { num1: [1, 2, 3, 4] }, a4: true },
    ],
  })
);
