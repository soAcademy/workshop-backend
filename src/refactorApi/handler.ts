import express, { Application, Request, Response } from "express";
import {
  add,
  helloAt,
  helloMultiply,
  helloOrder,
  helloReduce,
  helloSum,
} from "./mathFunction";
import { isNumber } from "fp-ts/lib/number";
import { isString } from "fp-ts/lib/string";
import { HelloMultiplyCodec, HelloReduceCodec } from "./mathFunctionInterface";

// app.post("/function/add", (req: Request, res: Response) => {
//     const body = req?.body;
//     if (isNumber(body.x) && isNumber(body.y)) {
//       const result = add(body?.x, body?.y);
//       res.status(200).send(`Result: ${result}`);
//     } else {
//       res.status(500).json({ error: "Error invalid codec" });
//     }
//   });

export const functionAddHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (isNumber(body.x) && isNumber(body.y)) {
    const result = add(body?.x, body?.y);
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

// app.post("/function/helloAt", (req: Request, res: Response) => {
//     const body = req?.body;
//     if (isString(body.name) && isString(body.location)) {
//       const result = helloAt({
//         name: body?.name,
//         location: body?.location,
//       });
//       res.status(200).json(result);
//     } else {
//       res.status(500).json({ error: "Error invalid codec" });
//     }
//   });

export const functionHelloAtHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (isString(body.name) && isString(body.location)) {
    const result = helloAt({
      name: body?.name,
      location: body?.location,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

// app.post("/function/helloSum", (req: Request, res: Response) => {
//     const body = req?.body;
//     if (
//       isString(body.name) &&
//       isNumber(body.number.x) &&
//       isNumber(body.number.y) &&
//       isNumber(body.number.z)
//     ) {
//       const result = helloSum({
//         name: body?.name,
//         number: { x: body?.number.x, y: body?.number.y, z: body?.number.z },
//       });
//       res.status(200).json(result);
//     } else {
//       res.status(500).json({ error: "Error invalid codec" });
//     }
//   });

export const functionHelloSumHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body.name) &&
    isNumber(body.number.x) &&
    isNumber(body.number.y) &&
    isNumber(body.number.z)
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

// app.post("/function/helloMultiply", (req: Request, res: Response) => {
//     const body = req?.body;
//     console.log(body);
//     console.log(HelloMultiplyCodec.decode(body));

//     if (HelloMultiplyCodec.decode(body)._tag === "Right") {
//       const result = helloMultiply(body);
//       res.status(200).json(result);
//     } else {
//       res.status(500).json({ error: "Failed to validate codec" });
//     }
//   });

export const functionHelloMultiplyHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloMultiplyCodec.decode(body));

  if (HelloMultiplyCodec.decode(body)._tag === "Right") {
    const result = helloMultiply(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
};

// app.post("/function/helloReduce", (req: Request, res: Response) => {
//     const body = req?.body;

//     if (HelloReduceCodec.decode(body)._tag === "Right") {
//       const result = helloReduce(body);
//       res.status(200).json(result);
//     } else {
//       res.status(500).json({ error: "Failed to validate codec" });
//     }
//   })

export const functionHelloReduceHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(HelloReduceCodec.decode(body));

  if (HelloReduceCodec.decode(body)._tag === "Right") {
    const result = helloReduce(body);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Failed to validate codec" });
  }
};

// app.post("/function/helloOrder", (req: Request, res: Response) => {
//     const body = req?.body;
//     if (
//       isString(body.name) &&
//       isString(body.orders[0].product) &&
//       isNumber(body.orders[0].price)
//     ) {
//       const result = helloOrder(body); //สามารถใส่ Body ได้ทุกอันเลย
//       res.status(200).json(result);
//     } else {
//       res.status(500).json({ error: "Error invalid codec" });
//     }
//   });

export const functionHelloOrderHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (
    isString(body.name) &&
    isString(body.orders[0].product) &&
    isNumber(body.orders[0].price)
  ) {
    const result = helloOrder(body); //สามารถใส่ Body ได้ทุกอันเลย
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
