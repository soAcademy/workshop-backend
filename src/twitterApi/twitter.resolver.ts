import { PrismaClient } from "../../prisma/client";
import {
  ICreatePost,
  ICreateTWFollow,
  ICreateTWUsers,
  IGetUserProfile,
} from "./twitter.interface";

export const prisma = new PrismaClient();

export const createTWUsers = (args: ICreateTWUsers) =>
  prisma.twitterUser.createMany({
    data: args.data,
  });

export const createTWFollow = (args: ICreateTWFollow) =>
  prisma.twitterFollow.createMany({
    data: args.data,
  });

export const getUserProfile = (args: IGetUserProfile) =>
  prisma.twitterUser.findUniqueOrThrow({
    where: { name: args.name },
    select: {
      id: true,
      name: true,
      image: true,
      join: true,
      fromFollowing: {
        select: {
          to: {
            select: {
              name: true,
            },
          },
        },
      },
      toFollowing: {
        select: {
          from: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

export const createPost = (args: ICreatePost) =>
  prisma.twitterPost.create({
    data: {
      userId: args.userId,
      caption: args.caption,
      hashtags: {
        connectOrCreate: args.hashtags.map((e) => {
          return {
            where: { hashtag: e.hashtag },
            create: { hashtag: e.hashtag },
          };
        }),
      },
    },
    include: {
      hashtags: true,
    },
  });

export const getHashtags = () => prisma.twitterHashtag.findMany();

export const getPostByHashtag = (args: { hashtag: string }) =>
  prisma.twitterPost.findMany({
    where: {
      hashtags: {
        some: {
          hashtag: args.hashtag,
        },
      },
    },
    include: {
      hashtags: true,
    },
  });

export const getPostByUser = (args: { userId: number }) =>
  prisma.twitterPost.findMany({
    where: {
      userId: args.userId,
    },
    include: {
      replyBy: true,
    },
  });

export const replyPost = (args: {
  postId: number;
  reply: string;
  userId: number;
  hashtags: { hashtag: string }[];
}) =>
  prisma.twitterPost.update({
    where: {
      id: args.postId,
    },
    data: {
      replyBy: {
        create: {
          caption: args.reply,
          user: {
            connect: {
              id: args.userId,
            },
          },
        },
      },
      hashtags: {
        connectOrCreate: args.hashtags.map((h) => ({
          where: { hashtag: h.hashtag },
          create: { hashtag: h.hashtag },
        })),
      },
    },
    include:{
      replyBy: true,
    }
  });
