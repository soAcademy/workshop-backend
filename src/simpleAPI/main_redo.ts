import express, { Application, Request, Response } from "express";
import axios from "axios";
import * as t from "io-ts";

// interface IHelloReduce {
//   name: string;
//   numbers: number[];
// }

interface IHelloMultiply {
  name: string;
  numbers: {
    x: number;
    y: number;
    z: number;
  };
}

const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${args.numbers.x * args.numbers.y * args.numbers.z}`
})

const helloReduceCodec = t.type({
  name: t.string,
  numbers:t.array(t.number),
})

interface IHelloReduce extends t.TypeOf<typeof helloReduceCodec> {}


const helloReduce = (args: IHelloReduce) => {
  const result = args?.numbers?.reduce((acc, r) => acc + r, 0);
  return {
    text: `Hello ${args.name} reduce ${result}`,
    createdAt: new Date(),
  };
};

const app: Application = express();

app.use(express.json());

app.post("/function/helloReduce", (req: Request, res: Response) => {
  const body = req?.body;
  if (helloReduceCodec.decode(body)._tag === "Right") { 
  const result = helloReduce({
    name: body?.name,
    numbers: body?.numbers,
  });
  res.status(200).json(result);
} else {
  res.status(500).json({ error: "Error invalid codec" });
}
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
