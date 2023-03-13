import { Request, Response } from "express";
import {
  createUserPost,
  getHashtags,
  getPostByHashtag,
  getPostByUser,
  getUserProfile,
} from "./twitter.resolver";
import {
  CreateUserPostCodec,
  GetPostByHashtagCodec,
  GetPostByUserCodec,
  GetUserProfileCodec,
} from "./twitter.interface";

export const GetUserProfileHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    GetUserProfileCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await getUserProfile(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const CreateUserPostHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    CreateUserPostCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await createUserPost(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const GetHashtagsHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getHashtags());
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const GetPostByHashtagHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    GetPostByHashtagCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await getPostByHashtag(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const GetPostByUserHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    GetPostByUserCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await getPostByUser(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
