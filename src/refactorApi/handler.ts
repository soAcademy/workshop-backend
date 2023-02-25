import express, { Application, Request, Response } from "express";
import * as t from "io-ts";
import { add, helloAt, helloMultiply, helloSum } from "./mathFunction";
import { addCodec, helloAtCodec, helloMultiplyCodec, helloSumCodec } from "./mathFunction.interface";

export const functionAddHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (addCodec.decode(body)._tag === "Right") {
    const result = add(body); //เขียนแบบนี้หรือจะเขียน body เต็มๆ เหมือนข้ออื่นก็ได้
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloAtHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (helloAtCodec.decode(body)._tag === "Right") {
    const result = helloAt({ name: body?.name, location: body?.location });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloMultiplyHandler = (req: Request, res: Response) => {
  const body = req.body;
  console.log(helloMultiplyCodec.decode(body));
  if (helloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const functionHelloSumHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(helloSumCodec.decode(body));
  if (helloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
