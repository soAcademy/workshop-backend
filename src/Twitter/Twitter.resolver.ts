import { number } from "io-ts";
import { PrismaClient } from "../../prisma/client";
export const prisma = new PrismaClient();

export const createUser = (args: { name: string; profileImage: string }) =>
  prisma.user.create({
    data: {
      name: args.name,
      profileImage: args.profileImage,
    },
  });

export const getUserProfile = (args: { id: number }) =>
  prisma.user.findUnique({
    where: {
      id: args.id,
    },
    include: {
      fromUserRelations: true,
      toUserRelations: true,
    },
  });

export const createTweetUser = async (args: {
  message: string;
  userId: number;
  hashTags?: string[];
}) => {
  const createdTweet = await prisma.post.create({
    data: {
      message: args.message,
      userId: args.userId,
    },
  });

  if (args.hashTags) {
    await prisma.hashTag.createMany({
      data: args.hashTags.map((hashTag) => ({ name: hashTag })),
    });

    const createdHashTag = await prisma.hashTag.findMany({
      where: {
        name: {
          in: args.hashTags.map((hashtag) => hashtag),
          // ['abc','dcb','bdf']
        },
      },
      orderBy: { id: "asc" },
      distinct: ["name"], //unique
    });

    //hashtag & post relation  : many Hashtag > one post
    await prisma.hashTagOnPost.createMany({
      data: createdHashTag.map((r) => ({
        hashTagId: r.id,
        postId: createdTweet.id,
      })),
    });
    return {
      createdTweet,
      createdHashTag,
    };
  }
  return createdTweet;
};

export const getHashtags = (args: { id: number }) =>
  prisma.hashTag.findMany({});

export const getPostByHashtag = (args: { hashtagId: number }) =>
  prisma.hashTagOnPost.findMany({
    where: {
      hashTagId: args.hashtagId,
    },
    include: {
      post: true,
      hashTags: true,
    },
  });

export const getPostByUser = (args: { userId: number }) =>
  prisma.post.findMany({
    where: {
      userId: args.userId,
    },
    include: {
      reply: true,
      user: true,
    },
  });

export const createReply = (args: {
  message: string;
  postId: number;
  userId: number;
}) =>
  prisma.reply.create({
    data: {
      message: args.message,
      postId: args.postId,
      userId: args.userId,
    },
  });
