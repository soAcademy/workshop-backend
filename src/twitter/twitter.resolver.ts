import { PrismaClient } from "../../prisma/client";
import {
  ICreateUser,
  ICreateUserPost,
  IGetPostByHashtag,
  IGetPostByUser,
  IGetUserProfile,
} from "./twitter.interface";
export const prisma = new PrismaClient();

// getUserProfile
// createUserPost
// getHashtags
// getPostByHashtag (ส่ง hashtag ที่ต้องการไป แล้วแสดง post ทั้งหมด)
// getPostByUser (แสดงรายละเอียดของ user คนนั้น พร้อม reply)

export const getUserProfile = async (args: IGetUserProfile) =>
  prisma.user.findUnique({
    where: {
      id: args.id,
    },
  });

export const createUserPost = async (args: ICreateUserPost) =>
  prisma.post.create({
    data: {
      userId: args.userId,
      detail: args.detail,
      hashtagOnPosts: {
        create: args.hashtags.map((hashtag) => ({
          hashtag: {
            connectOrCreate: {
              create: {
                topic: hashtag.hashtag,
              },
              where: {
                topic: hashtag.hashtag,
              },
            },
          },
        })),
      },
    },
  });

export const getSumHashtags = async () =>
  prisma.hashtagOnPost.groupBy({
    by: ["hashtagId"],
    _count: {
      hashtagId: true,
    },
    orderBy: {
      _count: {
        hashtagId: "desc",
      },
    },
  });

export const getHashtags = async () => prisma.hashtag.findMany();

export const getPostByHashtag = async (args: IGetPostByHashtag) =>
  prisma.post.findMany({
    where: {
      hashtagOnPosts: {
        some: {
          hashtagId: args.hashtagId,
        },
      },
    },
    include: {
      user: true,
      replies: true,
      hashtagOnPosts: {
        include: {
          hashtag: true,
        },
      },
    },
  });

export const getPostByUser = async (args: IGetPostByUser) =>
  prisma.post.findMany({
    where: {
      userId: args.userId,
    },
    include: {
      user: true,
      replies: {
        where: {
          userId: args.userId,
        },
      },
      hashtagOnPosts: {
        include: {
          hashtag: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

export const getPosts = async () =>
  prisma.post.findMany({
    include: {
      user: true,
      replies: true,
      hashtagOnPosts: {
        include: {
          hashtag: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

export const getUsers = async () =>
  prisma.user.findMany({
    orderBy: {
      username: "asc",
    },
  });

export const createUser = async (args: ICreateUser) =>
  prisma.user.create({
    data: {
      username: args.username,
      image: args.image,
    },
  });
