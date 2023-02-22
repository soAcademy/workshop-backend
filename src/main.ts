import express, { Application, Request, Response } from "express";
import axios from "axios";

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
      : res.status(500).send("ERROR");
  } catch (e) {
    res.status(500).send("e");
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
      : res.status(500).send("ERROR");
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
