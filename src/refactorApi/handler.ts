import express, { Application, Request, Response } from "express";
import * as t from "io-ts";
import {
  AddCodec,
  HelloAtCodec,
  HelloMultipyCodec,
  HelloOrderCodec,
  HelloReduceCodec,
  HelloSumCodec,
} from "./mathFunction.interface";
import {
  add,
  helloAt,
  helloMultipy,
  helloOrder,
  helloReduce,
  helloSum,
} from "./mathFunction";

export const functionAddHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(AddCodec.decode(body));

  if (AddCodec.decode(body)._tag === "Right") {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloAtHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloAtCodec.decode(body));

  if (HelloAtCodec.decode(body)._tag === "Right") {
    const result = helloAt(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloSumHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloSumCodec.decode(body));

  if (HelloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloReduceHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloReduceCodec.decode(body));

  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
export const functionHelloOrderHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloOrderCodec.decode(body));

  if (HelloOrderCodec.decode(body)._tag === "Right") {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloMultipyHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloMultipyCodec.decode(body));

  if (HelloMultipyCodec.decode(body)._tag === "Right") {
    const result = helloMultipy(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
