import { PrismaClient } from "../../prisma/client";
import {
  // ICreatePost,
  ICreatePostAndHashtag,
  ICreateUser,
  IDirectMessage,
  IFollowUser,
  IGetPostByHashtag,
  IReplyPost,
  IUnFollowUser,
  IUpdateUser,
} from "./CloneTwitter.interface";

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) =>
  prisma.twitterUser.create({
    data: {
      username: args.username,
    },
  });

export const updateUser = (args: IUpdateUser) =>
  prisma.twitterUser.update({
    where: { id: args.id },
    data: {
      username: args.username ?? undefined,
      image: args.image ?? undefined,
    },
  });

export const getUser = () =>
  prisma.twitterUser.findMany({
    orderBy: { username: "asc" },
  });

export const followUser = (args: IFollowUser) =>
  prisma.twitterUser.update({
    where: {
      id: args.userId, // คนถูก follow
    },
    data: {
      followings: {
        connect: {
          id: args.followId, // คนกด follow
        },
      },
    },
  });

export const unFollowUser = (args: IUnFollowUser) =>
  prisma.twitterUser.update({
    where: {
      id: args.userId,
    },
    data: {
      followings: {
        disconnect: {
          id: args.unFollowId,
        },
      },
    },
  });

// export const createPost = (args: ICreatePost) =>
//   prisma.twitterPost.create({
//     data: {
//       user: { connect: { id: args.userId } },
//       message: args.message,
//       image: args.image ?? undefined,
//     },
//   });

export const createPostAndHashtag = (args: ICreatePostAndHashtag) =>
  prisma.twitterPost?.create({
    data: {
      user: { connect: { id: args.userId } },
      message: args.message,
      image: args.image ?? undefined,
      hashtags: {
        connectOrCreate: args.hashtags?.map((h) => ({
          where: {
            name: h.name,
          },
          create: {
            name: h.name,
          },
        })),
      },
    },
    include: { hashtags: true },
  });

export const getPost = () =>
  prisma.twitterPost.findMany({
    where: {},
  });

export const getHashtag = () =>
  prisma.twitterHashtag.findMany({
    where: {},
  });

export const getPostByHashtag = (args: IGetPostByHashtag) =>
  prisma.twitterPost.findMany({
    where: { hashtags: { some: { name: args.hashtagName } } },
    include: { hashtags: true },
  });

export const replyPost = (args: IReplyPost) =>
  prisma.twitterPost.update({
    where: { id: args.postId },
    data: {
      replyBy: {
        create: {
          user: { connect: { id: args.userId } },
          message: args.message,
          image: args.image ?? undefined,
        },
      },
      hashtags: {
        connectOrCreate: args.hashtags.map((h) => ({
          where: { name: h.hashtagName },
          create: { name: h.hashtagName },
        })),
      },
    },
    include: {
      replyBy: true,
    },
  });

export const directMessage = (args: IDirectMessage) =>
  prisma.twitterDirectMessage.create({
    data: {
      from: { connect: { id: args.fromUserId } },
      to: { connect: { id: args.toUserId } },
      message: args.message,
      image: args.image ?? undefined,
    },
    include: { to: { include: { directMessageTo: true } } },
  });
