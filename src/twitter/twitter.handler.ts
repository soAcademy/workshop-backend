import { Request, Response } from "express";
import {
  createUser,
  createUserPost,
  getSumHashtags,
  getPostByHashtag,
  getPostByUser,
  getPosts,
  getUserProfile,
  getUsers,
  getHashtags,
  getPostById,
} from "./twitter.resolver";
import {
  CreateUserCodec,
  CreateUserPostCodec,
  GetPostByHashtagCodec,
  GetPostByIdCodec,
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

export const GetSumHashtagsHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getSumHashtags());
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

export const GetPostsHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getPosts());
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const GetPostByIdHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    GetPostByIdCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await getPostById(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const GetUsersHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getUsers());
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const CreateUserHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    CreateUserCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await createUser(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
