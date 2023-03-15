import { Request, Response } from "express";
import { addChannelAdminCodec, addCommentCodec, addReactionCodec, createChannelCodec, createChannelLevelCodec, createUserCodec, deleteChannelLevelCodec, deleteVideoCodec, postVideoCodec, removeCommentCodec, subscribeCodec, updateChannelAdminCodec, updateChannelInfoCodec, updateChannelLevelCodec, updateUserCodec, updateVideoCodec } from "./interface";
import { addChannelAdmin, addComment, addReaction, createChannel, createChannelLevel, createUser, deleteChannelLevel, deleteVideo, postVideo, removeComment, removeReaction, subscribe, unsubscribe, updateChannelAdmin, updateChannelInfo, updateChannelLevel, updateUser, updateVideo } from "./resolver";

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

export const updateUserHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateUserCodec.decode(body)._tag === "Right") {
      return updateUser(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createChannelHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createChannelCodec.decode(body)._tag === "Right") {
      return createChannel(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateChannelInfoHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateChannelInfoCodec.decode(body)._tag === "Right") {
      return updateChannelInfo(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addChannelAdminHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (addChannelAdminCodec.decode(body)._tag === "Right") {
      return addChannelAdmin(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateChannelAdminHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateChannelAdminCodec.decode(body)._tag === "Right") {
      return updateChannelAdmin(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const subscribeHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (subscribeCodec.decode(body)._tag === "Right") {
      return subscribe(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unsubscribeHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (subscribeCodec.decode(body)._tag === "Right") {
      return unsubscribe(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const postVideoHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (postVideoCodec.decode(body)._tag === "Right") {
      return postVideo(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateVideoHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateVideoCodec.decode(body)._tag === "Right") {
      return updateVideo(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteVideoHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (deleteVideoCodec.decode(body)._tag === "Right") {
      return deleteVideo(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addReactionHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (addReactionCodec.decode(body)._tag === "Right") {
      return addReaction(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const removeReactionHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (addReactionCodec.decode(body)._tag === "Right") {
      return removeReaction(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addCommentHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (addCommentCodec.decode(body)._tag === "Right") {
      return addComment(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const removeCommentHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (removeCommentCodec.decode(body)._tag === "Right") {
      return removeComment(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createChannelLevelHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createChannelLevelCodec.decode(body)._tag === "Right") {
      return createChannelLevel(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateChannelLevelHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateChannelLevelCodec.decode(body)._tag === "Right") {
      return updateChannelLevel(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteChannelLevelHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (deleteChannelLevelCodec.decode(body)._tag === "Right") {
      return deleteChannelLevel(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
