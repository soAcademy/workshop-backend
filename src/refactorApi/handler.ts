import express, { Application, Request, Response } from "express";
import { HelloMultiplyCodec } from "./mathFunction.interface";
import { add, helloMultiply, isNumber } from "./mathFunction";

export const functionHelloMultiplyHandler =  (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloMultiplyCodec.decode(body));

  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
};

export const functionAddHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (isNumber(body.x) && isNumber(body.y)) {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
}
