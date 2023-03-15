import { PrismaClient } from "../../prisma/client";
import {
  ICreateTwitterDM,
  ICreateTwitterPost,
  ICreateTwitterReply,
  ICreateTwitterUser,
  ICreateTwitterUserRelation,
  IUpdateTwitterUser,
} from "./twiitter.interface";
// import { interface } from "./twitter.interface";

export const prisma = new PrismaClient();

// TWITTER USER
export const createTwitterUser = (args: ICreateTwitterUser) =>
  prisma.twitterUser.create({
    data: {
      image: args.image,
      name: args.name,
    },
  });

export const getTwitterUser = () => prisma.twitterUser.findMany();

export const updateTwitterUser = (args: IUpdateTwitterUser) =>
  prisma.twitterUser.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name ?? undefined,
      image: args.image ?? undefined,
    },
  });

// TWITTER USER RELATIONSHIP
export const createTwitterUserRelation = (args: ICreateTwitterUserRelation) =>
  prisma.twitterUserRelation.create({
    data: {
      follower: {
        connect: {
          id: args.followerId,
        },
      },
      following: {
        connect: {
          id: args.followingId,
        },
      },
    },
  });

export const deleteTwitterUserRelation = (args: { id: number }) =>
  prisma.twitterUserRelation.delete({
    where: { id: args.id },
  });

// TWITTER POST
export const createTwitterPost = (args: ICreateTwitterPost) =>
  prisma.twitterPost.create({
    data: {
      user: {
        connect: {
          id: args.userId,
        },
      },
      message: args.message,
      hashTags: {
        connectOrCreate: args.hashTags.map((hashtag) => {
          return {
            where: { message: hashtag.message },
            create: { message: hashtag.message },
          };
        }),
      },
    },
    include: {
      hashTags: true,
    },
  });

export const getTwitterPostByUserId = (args: { userId: number }) =>
  prisma.twitterPost.findMany({ where: { postByUserId: args.userId } });

export const getTwitterPostByHashTagId = (args: { hashTagId: number }) =>
  prisma.twitterPost.findMany({ where: { postByUserId: args.hashTagId } });

export const getTwitterPost = () => prisma.twitterPost.findMany();

// TWITTER HashTags
export const getTwitterHashTag = () => prisma.twitterHashTag.findMany();

export const deleteTwitterPost = (args: { id: number }) =>
  prisma.twitterPost.delete({
    where: { id: args.id },
  });

// TWITTER POST REPLY
export const createTwitterReply = (args: ICreateTwitterReply) =>
  prisma.twitterReply.create({
    data: {
      post: {
        connect: {
          id: args.postId,
        },
      },
      user: {
        connect: {
          id: args.userId,
        },
      },
      message: args.message,
    },
  });

// TWITTER DM
export const createTwitterDM = (args: ICreateTwitterDM) =>
  prisma.twitterDM.create({
    data: {
      directFrom: {
        connect: {
          id: args.directFromId,
        },
      },
      directTo: {
        connect: {
          id: args.directToId,
        },
      },
      message: args.message,
    },
  });
