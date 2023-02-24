import express, { Application, Request, Response } from "express";
import * as t from "io-ts";
import {
  add,
  helloAt,
  helloMultiply,
  helloOrder,
  helloReduce,
  helloSum,
} from "./mathFunction";
import {
  AddCodec,
  HelloMultiplyCodec,
  HelloSumCodec,
  isArray,
  isNumber,
  isString,
} from "./mathFunction.interface";

export const functionAddHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (AddCodec.decode(body)._tag === "Right") {
    const result = add(body);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Invalid" });
  }
};

export const functionHelloAtHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (isString(body?.name) && isString(body?.location)) {
    const result = helloAt({
      name: body?.name,
      location: body?.location,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

export const functionHelloSumHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (HelloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

export const functionHelloMultiplyHandler = (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(body);
  // console.log(HelloMultiplyCodec.decode(body));
  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

export const functionHelloReduceHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  if (
    isString(body?.name) &&
    isArray(body?.numbers) &&
    body?.numbers.every(isNumber)
  ) {
    const result = helloReduce({
      name: body?.name,
      numbers: body?.numbers,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

export const functionHelloOrderHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isArray(body?.orders) &&
    // body?.numbers.map((r: any) => isNumber(r.x) && isNumber(r.y) && isNumber(r.z)) ?????
    body?.orders.every((r: any) => isString(r.product) && isNumber(r.price))
    // body?.numbers.every(isNumber)
  ) {
    const result = helloOrder({
      name: body?.name,
      orders: body?.orders,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "invalid" });
  }
};
