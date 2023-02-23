import express, { Application, Request, Response } from "express";
import * as t from "io-ts";
import {
  AddCodec,
  HelloAtCodec,
  HelloSumCodec,
  HelloReduceCodec,
  HelloOrderCodec,
} from "./function.interface";
import {
  add,
  helloAt,
  helloSum,
  helloMultiply,
  helloReduce,
  helloOrder,
} from "./function";

export const functionAddHandler = (req: Request, res: Response) => {
  const body = req?.body;
  AddCodec.decode(body)._tag === "Right"
    ? res.status(200).send(`Result: ${add(body?.x, body?.y)}`)
    : res.status(500).send(`ERROR: data mismatch!`);
};

export const functionHelloAtHandler = (req: Request, res: Response) => {
  const body = req?.body;
  HelloAtCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloAt(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
};

export const functionHelloSumHandler = (req: Request, res: Response) => {
  const body = req?.body;
  HelloSumCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloSum(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
};

export const functionHelloMultiplyHandler = (req: Request, res: Response) => {
  const body = req?.body;
  HelloSumCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloMultiply(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
};

export const functionHelloReduceHandler = (req: Request, res: Response) => {
  const body = req?.body;
  HelloReduceCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloReduce(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
};

export const functionHelloOrderHandler = (req: Request, res: Response) => {
  const body = req?.body;
  HelloOrderCodec.decode(body)._tag === "Right"
    ? res.status(200).json(helloOrder(body))
    : res.status(500).json({ message: `ERROR: data mismatch!` });
};
