import { Request, Response } from "express";
import {
  createReplyTwitter,
  createTweet,
  createTweetWithHashTag,
  createUserTwitter,
  deletePostTweet,
  deleteReplyTweet,
  getHashtagsTwitter,
  getPostByHashtagTwitter,
  getPostByUserTwitter,
  getUserProfileTwitter,
} from "./Twitter.resolver";

export const createUserTwitterHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await createUserTwitter(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
//------------------------------------------------------------
export const getUserProfileTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getUserProfileTwitter(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//------------------------------------------------------------

export const createTweetHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await createTweet(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//------------------------------------------------------------

export const getHashtagsTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getHashtagsTwitter(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//------------------------------------------------------------

export const getPostByHashtagTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getPostByHashtagTwitter(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//------------------------------------------------------------

export const getPostByUserTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getPostByUserTwitter(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//------------------------------------------------------------

export const createReplyTwitterHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await createReplyTwitter(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//------------------------------------------------------------
export const deletePostTweetHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await deletePostTweet(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
//------------------------------------------------------------
export const deleteUserTweetHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await deletePostTweet(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
//------------------------------------------------------------
export const deleteReplyTweetHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await deleteReplyTweet(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//------------------------------------------------------------

export const createTweetWithHashTagHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await createTweetWithHashTag(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//------------------------------------------------------------
