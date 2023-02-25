import express, { Application, Request, Response } from "express";
import * as t from "io-ts";
import {
  HelloAtCodec,
  HelloOrderCodec,
  HelloReduceCodec,
  HelloSumCodec,
  maybeNumber,
  maybeString,
} from "./mathFunction.interface";
import {
  helloAt,
  helloMultiply,
  helloOrder,
  helloReduce,
  helloSum,
} from "./mathFunction";

//check input ว่าตรงมั้ยแล้ว response กลับ

export const functionMultiplyHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (maybeString(body.name) && maybeNumber(body.number)) {
    const result = helloMultiply({
      name: body.name,
      number: { x: body.number.x, y: body.number.y, z: body.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Server Error invalid codec" });
  }
};

//--------------------------------------------------------------------

export const functionHelloAtHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloAtCodec.decode(body));

  if (HelloAtCodec.decode(body)._tag === "Right") {
    const result = helloAt(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
};

//--------------------------------------------------------------------

export const functionHelloSumHandler = (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  console.log(HelloSumCodec.decode(body));

  if (HelloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
};

//--------------------------------------------------------------------

export const functionReduceHandler = (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  console.log(HelloReduceCodec.decode(body));

  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
};

//--------------------------------------------------------------------

export const functionOrderHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (HelloOrderCodec.decode(body)._tag === "Right") {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
  }
  res.status(500).json({ error: "Failed to validate codec" });
};
//--------------------------------------------------------------------
