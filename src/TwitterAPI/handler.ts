import { Request, Response } from "express";
import {
  createTweetCodec,
  createUserCodec,
  followCodec,
  getTweetsByHashtagsCodec,
  getTweetsByUserCodec,
  getUserProfileCodec,
  likeTweetCodec,
  replyTweetCodec,
  sendDirectMessageCodec,
  unFollowCodec,
  updateUserProfilePictureCodec,
} from "./interface";
import {
  createTweet,
  createUser,
  follow,
  getHashtags,
  getTweetsByHashtags,
  getTweetsByUser,
  getUserProfile,
  likeTweet,
  replyTweet,
  sendDirectMessage,
  unfollow,
  unlikeTweet,
  updateUserProfilePicture,
} from "./resolver";

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

export const unFollowHandler = (req: Request, res: Response) => {
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

export const createTweetHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createTweetCodec.decode(body)._tag === "Right") {
      return createTweet(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHashtagsHandler = (req: Request, res: Response) => {
  try {
    return getHashtags()
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).send(err));
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getTweetsByHashtagsHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (getTweetsByHashtagsCodec.decode(body)._tag === "Right") {
      return getTweetsByHashtags(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getTweetsByUserHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (getTweetsByUserCodec.decode(body)._tag === "Right") {
      return getTweetsByUser(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const replyTweetHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (replyTweetCodec.decode(body)._tag === "Right") {
      return replyTweet(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const likeTweetHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (likeTweetCodec.decode(body)._tag === "Right") {
      return likeTweet(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unlikeTweetHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (likeTweetCodec.decode(body)._tag === "Right") {
      return unlikeTweet(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUserProfilePictureHandler = (
  req: Request,
  res: Response
) => {
  try {
    const body = req?.body;
    if (updateUserProfilePictureCodec.decode(body)._tag === "Right") {
      return updateUserProfilePicture(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const sendDirectMessageHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (sendDirectMessageCodec.decode(body)._tag === "Right") {
      return sendDirectMessage(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
