import { PrismaClient } from "../../prisma/client";
import {
  ICreateComment,
  ICreateDirectMessage,
  ICreateUser,
  ICreateUserPost,
  ICreateUserRelation,
  IgetPostsbyHashtag,
  IgetPostsbyUser,
} from "./twitter.interface";

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) =>
  prisma.twitterUser.create({
    data: {
      name: args.name,
      image: args.image,
    },
  });

export const getUser = () => prisma.twitterUser.findMany();

export const createUserPost = (args: ICreateUserPost) =>
  prisma.twitterPost.create({
    data: {
      user: {
        connect: {
          id: args.userId,
        },
      },
      post: args.post,
      postToHashtags: {
        create: args.postToHashtags.map((r) => ({
          hashtag: {
            connectOrCreate: {
              where: {
                id: r.hashtagId,
              },
              create: {
                hashtag: r.hashtag,
              },
            },
          },
        })),
      },
    },
  });

export const getHashtags = () => prisma.twitterHashtag.findMany();

export const getPostsbyHashtag = (args: IgetPostsbyHashtag) =>
  prisma.twitterPostToHashtag.findMany({
    where: {
      twitterHashtagId: args.hashtagId,
    },
    include: {
      post: true,
    },
  });

export const createComment = (args: ICreateComment) =>
  prisma.twitterComment.create({
    data: {
      message: args.message,
      // image: args?.image,
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
    },
  });

export const getPostsbyUser = (args: IgetPostsbyUser) =>
  prisma.twitterComment.findMany({
    where: {
      twitterUserId: args.userId,
    },
    include: {
      post: true,
      user: true,
    },
  });

export const createDirectMessage = (args: ICreateDirectMessage) =>
  prisma.twitterDirectMessage.create({
    data: {
      message: args.message,
      from: {
        connect: {
          id: args.fromUserId,
        },
      },
      to: {
        connect: {
          id: args.toUserId,
        },
      },
    },
  });

  export const createUserRelation = (args: ICreateUserRelation) => 
  prisma.twitterUserRelation.create({
    data: {
      followingUserId: args.followingUserId,
      followerUserId: args.followerUserId
    }
  })
