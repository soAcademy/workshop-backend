import { Request, Response } from "express";
import {
  createPostCodec,
  createTWFollowCodec,
  createTWUsersCodec,
  getUserProfileCodec,
} from "./twitter.interface";
import {
  createPost,
  createTWFollow,
  createTWUsers,
  getHashtags,
  getPostByHashtag,
  getPostByUser,
  getUserProfile,
  replyPost,
} from "./twitter.resolver";

export const createTWUsersHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (createTWUsersCodec.decode(body)._tag === "Right") {
    return createTWUsers(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const createTWFollowHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (createTWFollowCodec.decode(body)._tag === "Right") {
    return createTWFollow(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getUserProfileHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (getUserProfileCodec.decode(body)._tag === "Right") {
    return getUserProfile(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const createPostHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (createPostCodec.decode(body)._tag === "Right") {
    return createPost(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getHashtagsHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await getHashtags();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getPostByHashtagHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await getPostByHashtag(body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const replyPostHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await replyPost(body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getPostByUserHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await getPostByUser(body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
