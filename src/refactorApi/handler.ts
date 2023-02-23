import express, { Application, Request, Response } from "express";
import * as t from "io-ts";
import { add, helloMultiply } from "./mathFunction";
import { AddCodec, HelloMultiplyCodec } from "./mathFunction.interface";

// Hello Add
export const functionAddHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(AddCodec.decode(body));
  if (AddCodec.decode(body)._tag === "Right") {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
};

// Hello Multiply
export const functionHelloMultiplyHandler = (req: Request, res: Response) => {
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