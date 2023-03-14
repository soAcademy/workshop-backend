import { Request, Response } from "express";
import { createTwitterPost } from "./twitter.resolver";

export const createTwitterPostHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await createTwitterPost(body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
