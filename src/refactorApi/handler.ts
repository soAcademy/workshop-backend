import  {  Request, Response } from "express";
import { AddCodec, HelloAtCodec, HelloMultiplyCodec, HelloOrderCodec, HelloReduceCodec, HelloSumCodec } from "./mathFunction.interface";
import { add, helloAt, helloMultiply, helloOrder, helloReduce, helloSum } from "./mathFunction";

export const functionAddHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(AddCodec.decode(body));
  if (AddCodec.decode(body)._tag === "Right") {
    const result = add({ x: body?.x, y: body?.y });
    res.status(200).send(`Result ${result}`);
  } else {
    res.status(500).send("Error to validate");
  }
};

export const functionHelloMultiplyHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloMultiplyCodec.decode(body));

  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
};

export const functionHelloAtHandler = (req: Request, res: Response) =>{
  const body = req?.body;
  console.log(body);
  console.log(HelloAtCodec.decode(body));
  if (HelloAtCodec.decode(body)._tag === "Right") {
    const result = helloAt({
      name: body?.name,
      location: body?.location,
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
};

export const functionHelloSumHandler = (req: Request, res: Response) =>{
  const body = req?.body;
  console.log(body);
  if (HelloSumCodec.decode(body)._tag === "Right") {
    const result = helloSum({
      name: body?.name,
      number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
};

export const functionHelloReduceHandler = (req: Request, res: Response) =>{
  const body = req?.body;
  console.log(body);
  console.log(HelloReduceCodec.decode(body));
  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce({
      name: body?.name,
      numbers: body?.numbers,
    });
    res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
};

export const functionHelloOrderHandler = (req: Request, res: Response)=>{
  const body = req?.body;
  console.log(body);
  console.log(HelloOrderCodec.decode(body));
  if (HelloOrderCodec.decode(body)._tag === "Right") {
    const result = helloOrder(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("ERROR to validate");
  }
};



