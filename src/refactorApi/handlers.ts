import express, { Application, Request, Response } from "express";
// import * as t from "io-ts";
import {
  AddCodec,
  HelloAtCodec,
  HelloSumCodec,
  HelloMultiplyCodec,
} from "./mathFunctions.interfaces";
import { add, helloAt, helloMultiply, helloSum } from "./mathFunctions";

export const functionAddHandler = (req: Request, res: Response) => {
  {
    const body = req?.body;
    // if (isNumber(body?.x) && isNumber(body?.y)) {
    if (AddCodec.decode(body)._tag === "Right") {
      const result = add(body?.x, body?.y);
      res.status(200).send(`Result: ${result}`);
    } else {
      res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
    }
  }
};

export const functionHelloAtHandler = (req: Request, res: Response) => {
  {
    const body = req?.body;
    // if (isString(body?.name) && isString(body?.location)) {
    if (HelloAtCodec.decode(body)._tag === "Right") {
      const result = helloAt({ name: body?.name, location: body?.location });
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
    }
  }
};

export const functionHelloSumHandler = (req: Request, res: Response) => {
  {
    const body = req?.body;
    if (HelloSumCodec.decode(body)._tag === "Right") {
      const result = helloSum({
        name: body?.name,
        number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
      });
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
    }
  }
};

export const functionHelloMultiplyHandler = (req: Request, res: Response) => {
  {
    const body = req?.body;
    if (HelloMultiplyCodec.decode(body)._tag === "Right") {
      const result = helloMultiply({
        name: body?.name,
        number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
      });
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
    }
  }
};
