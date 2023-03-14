import { Request, Response } from "express";
import {
  // CreatePostCodec,
  CreateUserCodec,
  FollowUserCodec,
  UpdateUserCodec,
  CreatePostAndHashtagCodec,
  GetPostByHashtagCodec,
  ReplyPostCodec,
  DirectMessageCodec,
} from "./CloneTwitter.interface";
import {
  // createPost,
  createPostAndHashtag,
  createUser,
  directMessage,
  followUser,
  getHashtag,
  getPost,
  getPostByHashtag,
  getUser,
  replyPost,
  unFollowUser,
  updateUser,
} from "./CloneTwitter.resolver";

export const createUserHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);
  console.log(CreateUserCodec.decode(args));

  try {
    if (CreateUserCodec.decode(args)._tag === "Right") {
      const result = await createUser(args);
      res.status(200).send(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);
  console.log(UpdateUserCodec.decode(args));

  try {
    if (UpdateUserCodec.decode(args)._tag === "Right") {
      const result = await updateUser(args);
      res.status(200).send(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    const result = await getUser();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const followUserHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);
  console.log(FollowUserCodec.decode(args));

  try {
    if (FollowUserCodec.decode(args)._tag === "Right") {
      const result = await followUser(args);
      res.status(200).send(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const unFollowUserHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);
  console.log(FollowUserCodec.decode(args));

  try {
    if (FollowUserCodec.decode(args)._tag === "Right") {
      const result = await unFollowUser(args);
      res.status(200).send(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// export const createPostHandler = async (req: Request, res: Response) => {
//   const args = req.body;
//   console.log(args);
//   console.log(CreatePostCodec.decode(args));

//   try {
//     if (CreatePostCodec.decode(args)._tag === "Right") {
//       const result = await createPost(args);
//       res.status(200).send(result);
//     } else {
//       res.status(404).json({ error: String("Error invalid codec") });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

export const createPostAndHashtagHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log(args);
  console.log(CreatePostAndHashtagCodec.decode(args));

  try {
    if (CreatePostAndHashtagCodec?.decode(args)._tag === "Right") {
      const result = await createPostAndHashtag(args);
      res.status(200).send(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPostHandler = async (req: Request, res: Response) => {
  try {
    const result = await getPost();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getHashtagHandler = async (req: Request, res: Response) => {
  try {
    const result = await getHashtag();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPostByHashtagHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);
  console.log(GetPostByHashtagCodec.decode(args));

  try {
    if (GetPostByHashtagCodec.decode(args)._tag === "Right") {
      const result = await getPostByHashtag(args);
      res.status(200).send(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const replyPostHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);
  console.log(ReplyPostCodec.decode(args));

  try {
    if (ReplyPostCodec.decode(args)._tag === "Right") {
      const result = await replyPost(args);
      res.status(200).send(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const directMessageHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);
  console.log(DirectMessageCodec.decode(args));

  try {
    if (DirectMessageCodec.decode(args)._tag === "Right") {
      const result = await directMessage(args);
      res.status(200).send(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
