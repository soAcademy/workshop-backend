import { Request, Response } from "express";

import { CreateCategoryCodec } from "./binKitchen.interfaces";
import { createCategory } from "./binKitchen.resolvers";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  if (CreateCategoryCodec.decode(args)._tag === "Right") {
    try {
      const result = await createCategory({
        name: args.name,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};
