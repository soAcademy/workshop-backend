import { PrismaClient } from "../../prisma/client";
import {
  ICreateDirectMessage,
  ICreateTweet,
  ICreateUser,
} from "./twitter.interfaces";

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) => {
  return prisma.user.create({
    data: {
      name: args.name,
      imageUrl: args.imageUrl,
      bio: args.bio,
    },
  });
};

export const createTweet = (args: ICreateTweet) => {
  return prisma.tweet.create({
    data: {
      tweetText: args.tweetText,
      userId: args.userId,
      parentTweetId: args.parentTweetId,
      hashTags: {
        connectOrCreate: args.hashTags.map((hashTag) => ({
          where: { hashTagText: hashTag.hashTagText },
          create: { hashTagText: hashTag.hashTagText },
        })),
      },
    },
  });
};

export const getTweetWithReplies = (args: { id: number }) => {
  return prisma.tweet.findUnique({
    select: {
      tweetText: true,
      tweetingUser: { select: { id: true, name: true } },
      parentTweet: { select: { id: true } },
      childTweets: { select: { id: true, tweetText: true } },
      hashTags: { select: { id: true, hashTagText: true } },
    },
    where: { id: args.id },
  });
};

export const getUserProfile = (args: { id: number }) => {
  return prisma.user.findUnique({
    select: {
      name: true,
      bio: true,
      tweets: {
        select: {
          id: true,
          tweetText: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
      },
    },
    where: { id: args.id },
  });
};

export const createUserRelation = (args: {
  followingUserId: number;
  followedUserId: number;
}) => {
  return prisma.userRelation.create({
    data: {
      followingUser: { connect: { id: args.followingUserId } },
      followedUser: { connect: { id: args.followedUserId } },
    },
  });
};

export const CreateDirectMessage = (args: ICreateDirectMessage) => {
  return prisma.directMessage.create({
    data: {
      dmText: args.dmText,
      fromUser: { connect: { id: args.fromUserId } },
      toUser: { connect: { id: args.toUserId } },
    },
  });
};
