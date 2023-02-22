import express, { Application, Request, Response } from "express";

const add = (x: number, y: number) => x + y;
const helloAt = (args: { name: string; location: string }) => {
  return {
    text: `Hello ${args.name} at ${args.location}`,
    createdAt: new Date(),
  };
};
const helloSum = (args: {
  name: string;
  numbers: { x: number; y: number; z: number };
}) => {
  const numbers = args.numbers;
  return {
    text: `Hello ${args.name}`,
    result: numbers.x + numbers.y + numbers.z,
  };
};

interface IHelloMultiply {
  name: string;
  numbers: { x: number; y: number; z: number };
}
const helloMultiply = (args: IHelloMultiply) => {
  const numbers = args.numbers;
  return {
    text: `Hello ${args.name}`,
    result: numbers.x * numbers.y * numbers.z,
  };
};

interface IHelloReduce {
  name: string;
  numbers: number[];
}
const helloReduce = (args: IHelloReduce) => {
  const numbers = Object.values(args.numbers).map((e) => Number(e));
  if (numbers.findIndex((number) => Number.isNaN(number)) === -1) {
    const result = numbers.reduce((acc, e) => acc + e, 0);
    return {
      text: `Hello ${args.name}`,
      result: result,
    };
  } else {
    const error = new Error("TYPE ERROR !! (numbers)");
    throw error.message;
  }
};
interface IHelloOrder {
  name: string;
  orders: { product: string; price: number }[];
}
const helloOrders = (args: IHelloOrder) => {
  const orders = args.orders.map((e) => e.product);
  const total = args.orders.reduce((acc, e) => acc + e.price, 0);

  return {
    text: `Hello ${args.name}`,
    orders: orders,
    total: total,
    createdAt: new Date(),
  };
};

const app: Application = express();

app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body.x, body.y);
  typeof result === "number"
    ? res.status(200).json(result)
    : res.status(500).send("TYPE ERROR");
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt(body);
  res.status(200).json(result);
});

app.post("/function/helloSum", (req: Request, res: Response) => {
  const body = req?.body;
  if (body.name) {
    if (body.numbers) {
      const result = helloSum(body);
      typeof result.result === "number"
        ? res.status(200).json(result)
        : res.status(500).send("TYPE ERROR");
    } else {
      res.status(500).send("NUMBERS NOT FOUND");
    }
  } else {
    res.status(500).send("NAME NOT FOUND");
  }
});
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (body.name) {
      if (body.numbers) {
        const result = helloMultiply(body);
        !Number.isNaN(result.result)
          ? res.status(200).json(result)
          : res.status(500).send("TYPE ERROR");
      } else {
        res.status(500).send("NUMBERS NOT FOUND");
      }
    } else {
      res.status(500).send("NAME NOT FOUND");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
app.post("/function/helloReduce", (req: Request, res: Response) => {
  try {
    const body = req.body;
    if (body.name) {
      if (body.numbers) {
        const result = helloReduce(body);
        res.status(200).json(result);
      } else {
        res.status(500).send("number not found");
      }
    } else {
      res.status(500).send("NAME NOT FOUND");
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/function/helloOrders", (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (body.name) {
      if (body.orders && body.orders.length > 0) {
        const result = helloOrders(body);
        typeof result.total === "number"
          ? res.status(200).json(result)
          : res.status(500).send("TYPE ERROR");
      } else {
        res.status(500).send("orders not found");
      }
    } else {
      res.status(500).send("NAME NOT FOUND");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5555, () => {
  console.log("Server started on port 5555");
});
