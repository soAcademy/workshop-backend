import { Request, Response } from "express";
import {
  CreateTwitterDMCodec,
  CreateTwitterPostCodec,
  CreateTwitterReplyCodec,
  CreateTwitterUserCodec,
  GetTwitterPostByHashTagIdCodec,
  GetTwitterPostByUserIdCodec,
  UpdateTwitterUserCodec,
} from "./twiitter.interface";
import {
  createTwitterDM,
  createTwitterPost,
  createTwitterReply,
  createTwitterUser,
  getTwitterHashTag,
  getTwitterPost,
  getTwitterPostByHashTagId,
  getTwitterPostByUserId,
  getTwitterUser,
  updateTwitterUser,
} from "./twitter.resolver";

export const createTwitterUserHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    if (CreateTwitterUserCodec.decode(body)._tag === "Right") {
      const result = await createTwitterUser(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTwitterUserHandler = async (req: Request, res: Response) => {
  try {
    const result = await getTwitterUser();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateTwitterUserHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    if (UpdateTwitterUserCodec.decode(body)._tag === "Right") {
      const result = await updateTwitterUser(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createTwitterPostHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    if (CreateTwitterPostCodec.decode(body)._tag === "Right") {
      const result = await createTwitterPost(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTwitterPostByUserIdHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  try {
    if (GetTwitterPostByUserIdCodec.decode(body)._tag === "Right") {
      const result = await getTwitterPostByUserId(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTwitterPostByHashTagIdHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  if (GetTwitterPostByHashTagIdCodec.decode(body)._tag === "Right") {
    const result = await getTwitterPostByHashTagId(body);
    res.status(200).json(result);
  } else {
    res.status(404).json({ error: String("Error invalid codec") });
  }
  try {
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTwitterPostHandler = async (req: Request, res: Response) => {
  try {
    const result = await getTwitterPost();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTwitterHashTagHandler = async (req: Request, res: Response) => {
  try {
    const result = await getTwitterHashTag();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createTwitterReplyHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  try {
    if (CreateTwitterReplyCodec.decode(body)._tag === "Right") {
      const result = await createTwitterReply(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createTwitterDMHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    if (CreateTwitterDMCodec.decode(body)._tag === "Right") {
      const result = await createTwitterDM(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
