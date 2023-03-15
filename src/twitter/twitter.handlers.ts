import { Request, Response } from "express";
import { getTweetWithReplies, getUserProfile } from "./twitter.resolvers";

export const getUserProfileHandler = async (req: Request, res: Response) => {
  const params = req?.params;

  if (typeof Number(params.id) === "number") {
    try {
      const result = await getUserProfile({ id: Number(params.id) });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};

export const getTweetWithRepliesHandler = async (
  req: Request,
  res: Response
) => {
  const params = req?.params;

  if (typeof Number(params.id) === "number") {
    try {
      const result = await getTweetWithReplies({ id: Number(params.id) });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};
