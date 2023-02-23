import { Request, Response } from "express";
import { AddCodec, HelloAtCodec, HelloMultiplyCodec, HelloOrdersCodec, HelloReduceCodec, HelloSumCodec } from "./function.interface";
import { add, helloAt, helloMultiply, helloOrders, helloReduce, helloSum } from "./function";

export const functionAddHandler = (req:Request, res:Response) => {
  const body = req?.body;
  if (AddCodec.decode(body)._tag === 'Right') {
  const result = add(body.x, body.y);
    res.status(200).json(result)
  } else {
    res.status(500).send('Failed to validate codec')
  }
}

export const functionHelloAtHandler = (req:Request, res:Response) => {
  const body = req?.body;
  if (HelloAtCodec.decode(body)._tag === "Right") {
    const result = helloAt(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
}

export const functionHelloSumHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
}

export const functionHelloMultiplyHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
}

export const functionHelloReduceHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
}

export const functionHelloOrdersHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloOrdersCodec.decode(body)._tag === "Right") {
    const result = helloOrders(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Failed to validate codec");
  }
}