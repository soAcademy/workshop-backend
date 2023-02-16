import { Request, Response } from "express";
import { add, helloAt, helloMultiply, helloOrder, helloReduce, helloSum } from "./function";

export const addHandler = (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
};

export const helloAtHandler = (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location,
  });
  res.status(200).json(result);
};

export const helloSumHandler = (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloSum({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
};

export const helloMultiplyHandler = (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloMultiply({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
};

export const helloReduceHandler = (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloReduce({
    name: body?.name,
    numbers: body?.numbers,
  });
  res.status(200).json(result);
};

export const helloOrderHandler = (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloOrder(body);
  res.status(200).json(result);
};
