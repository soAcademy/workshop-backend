import { Request, Response } from "express";
import {
  clickFollowTwitterCodec,
  createPostTwitterCodec,
  createReplyTwitterCodec,
  createUserTwitterCodec,
  getPostByHashtagTwitterCodec,
  getPostByUserTwitterCodec,
  sendDirectMsgTwitterCodec,
} from "./twitter.interface";
import {
  clickFollowTwitter,
  createPostTwitter,
  createReplyTwitter,
  createUserTwitter,
  getHashtagTwitter,
  getPostByHashtagTwitter,
  getPostByUserTwitter,
  getUserTwitter,
  sendDirectMsgTwitter,
} from "./twitter.resolver";

export const createUserTwitterHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (createUserTwitterCodec.decode(args)._tag === "Right") {
    try {
      const result = await createUserTwitter(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getUserTwitterHandler = async (req: Request, res: Response) => {
  try {
    const response = await getUserTwitter();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const clickFollowTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (clickFollowTwitterCodec.decode(args)._tag === "Right") {
    try {
      const result = await clickFollowTwitter(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createPostTwitterHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (createPostTwitterCodec.decode(args)._tag === "Right") {
    try {
      const result = await createPostTwitter(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const sendDirectMsgTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (sendDirectMsgTwitterCodec.decode(args)._tag === "Right") {
    try {
      const result = await sendDirectMsgTwitter(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getHashtagTwitterHandler = async (req: Request, res: Response) => {
  try {
    const response = await getHashtagTwitter();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const getPostByHashtagTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (getPostByHashtagTwitterCodec.decode(args)._tag === "Right") {
    try {
      const result = await getPostByHashtagTwitter(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getPostByUserTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (getPostByUserTwitterCodec.decode(args)._tag === "Right") {
    try {
      const result = await getPostByUserTwitter(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createReplyTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createReplyTwitterCodec.decode(args)._tag === "Right") {
    try {
      const result = await createReplyTwitter(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
