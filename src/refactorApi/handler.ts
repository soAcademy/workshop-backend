// ทำหน้าที่ validate input ที่เราจะใส่เข้าไปนั้นมันตรงกับ format ที่เราวางไว้มั้ย
// จะเก็บทุกอย่างที่เป็น argument and response

import express, { Application, Request, Response } from "express";
import { Request, Response } from "express";
import { add, helloAt, helloMultiply, helloOrder, helloReduce, helloSum } from "./function";

export const helloMultiplyHandler = (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloMultiply({
    name: body?.name,
    number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
  });
  res.status(200).json(result);
};