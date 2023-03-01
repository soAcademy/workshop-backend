import { Request, Response } from "express";
import { addCategoryCodec } from "./foodOrdering.interface";
import { addCategory } from "./foodOrdering.resolver";

export const addCategoryHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (addCategoryCodec.decode(body)._tag === "Right") {
    return addCategory(body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};
