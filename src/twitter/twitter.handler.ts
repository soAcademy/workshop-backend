import express, { Application, Request, Response } from "express";
import { createCommentCodec, createDirectMessageCodec, createUserCodec, createUserPostCodec, createUserRelationCodec, getPostsbyHashtagCodec, getPostsbyUserCodec } from "./twitter.interface";
import { createComment, createDirectMessage, createUser, createUserPost, createUserRelation, getPostsbyHashtag, getPostsbyUser } from "./twitter.resolver";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    if (createUserCodec.decode(req?.body)._tag === "Right") {
      const response = await createUser(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const createUserPostHandler = async (req: Request, res: Response) => {
  try {
    if (createUserPostCodec.decode(req?.body)._tag === "Right") {
      const response = await createUserPost(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

// export const createHashtagHandler = async (req: Request, res: Response) => {
//   try {
//     if (createHashtagCodec.decode(req?.body)._tag === "Right") {
//       const response = await createHashtag(req?.body);
//       res.status(200).json(response);
//     } else {
//       res.status(500).json({
//         error: "error",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       error: String(error),
//     });
//   }
// };

export const getPostsByHashtagHandler = async (req: Request, res: Response) => {
  try {
    if (getPostsbyHashtagCodec.decode(req?.body)._tag === "Right") {
      const response = await getPostsbyHashtag(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const createCommentHandler = async (req: Request, res: Response) => {
  try {
    if (createCommentCodec.decode(req?.body)._tag === "Right") {
      const response = await createComment(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const getPostsByUserHandler = async (req: Request, res: Response) => {
  try {
    if (getPostsbyUserCodec.decode(req?.body)._tag === "Right") {
      const response = await getPostsbyUser(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const createDirectMessageHandler = async (req: Request, res: Response) => {
  try {
    if (createDirectMessageCodec.decode(req?.body)._tag === "Right") {
      const response = await createDirectMessage(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const createUserRelationHandler = async (req: Request, res: Response) => {
  try {
    if (createUserRelationCodec.decode(req?.body)._tag === "Right") {
      const response = await createUserRelation(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};




