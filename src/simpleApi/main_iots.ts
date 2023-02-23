// ปกติถ้าเรามาทำตัว Codex เองมันจะเยอะ เราเลยใช้ Lib ที่เข้ามาช่วย
import express, { Application, Request, Response } from "express";
import * as t from "io-ts";

const app: Application = express();
app.use(express.json());
interface IHelloMultiply {
  name: string;
  numbers: { x: number; y: number; z: number };
}

const HelloMultiplyCodec = t.type({
  name: t.string,
  number: t.type({
    x: t.number,
    y: t.number,
    z: t.number,
  }),
  // numbers: t.array(t.number),
  // objects: t.array(t.type({
  //   x: t.number,
  //   y: t.string
  // })),
});
interface IHelloMultiply extends t.TypeOf<typeof HelloMultiplyCodec> {}

const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.numbers.x * args.numbers.y * args.numbers.z
  }`,
  createdAt: new Date(),
});
app.post("/function/helloMultiply", (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
  const result = helloMultiply(body);
  res.status(200).json(result);
} else {
  res.status(404).json({error: "Error Invalid Codec"});
}
});




app.listen(3200, () => {
  console.log("Server start on port 3200!");
});

