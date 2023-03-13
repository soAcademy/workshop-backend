import { Request, Response } from "express";
import { createUserCodec, followCodec, getUserProfileCodec, unFollowCodec } from "./interface";
import { createUser, follow, getUserProfile, unfollow } from "./resolver";

export const createUserHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createUserCodec.decode(body)._tag === "Right") {
      return createUser(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUserProfileHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (getUserProfileCodec.decode(body)._tag === "Right") {
      return getUserProfile(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const followHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (followCodec.decode(body)._tag === "Right") {
      return follow(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unFollowingHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (unFollowCodec.decode(body)._tag === "Right") {
      return unfollow(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

