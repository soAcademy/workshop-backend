import { PrismaClient } from "../../prisma/client";
// import { interface } from "./twitter.interface";

export const prisma = new PrismaClient();

// TWITTER USER
export const createTwitterUser = (args: { image: string; name: string }) =>
  prisma.twitterUser.create({
    data: {
      image: args.image,
      name: args.name,
    },
  });

export const getTwitterUser = () => prisma.twitterUser.findMany();

export const updateTwitterUser = (args: {
  id: number;
  name?: string;
  image?: string;
}) =>
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
export const createTwitterUserRelation = (args: {
  followerId: number;
  followingId: number;
}) =>
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
export const createTwitterPost = (args: {
  userId: number;
  message: string;
  hashTags: { message: string }[];
}) =>
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
export const createTwitterReply = (args: {
  postId: number;
  userId: number;
  message: string;
}) =>
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
export const createTwitterDM = (args: {
  directFromId: number;
  directToId: number;
  message: string;
}) =>
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
