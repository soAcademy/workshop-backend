import express, { Application, Request, Response } from "express";
import * as t from "io-ts";
import {
  HelloMultiplyCodec,
  HelloOrderCodec,
  HelloReduceCodec,
  isNumber,
  isString,
} from "./mathFunction.interface";
import {
  add,
  helloAt,
  helloMultiply,
  helloOrder,
  helloReduce,
  helloSum,
} from "./mathFunction";

export const functionAddHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (isNumber(body?.x) && isNumber(body?.y)) {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Error invalid codec" }); // ควรจะส่งเป็น json ให้ from เหมือนกัน
  }
};

export const functionHelloMultiplyHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(HelloMultiplyCodec.decode(body));

  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
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
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloSumHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body?.name) &&
    isNumber(body?.number.x) &&
    isNumber(body?.number.y) &&
    isNumber(body?.number.z)
  ) {
    const result = helloSum({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloReduceHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(HelloReduceCodec.decode(body));

  // const result = helloReduce({
  //   name: body?.name,
  //   numbers: body?.numbers,
  // });
  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloOrderHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(JSON.stringify(HelloOrderCodec.decode(body)));
  console.log(HelloOrderCodec.decode(body));

  if (HelloOrderCodec.decode(body)._tag === "Right") {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
