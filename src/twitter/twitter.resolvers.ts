import { PrismaClient } from "../../prisma/client";
import { ICreateTweet, ICreateUser } from "./twitter.interfaces";

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
      //     },
      //   });
      // };

      // export const createChildTweet = (args: ICreateTweet) => {
      //   return prisma.tweet.create({
      //     data: {
      //       tweetText: args.tweetText,
      //       userId: args.userId,
      parentTweetId: args.parentTweetId,
    },
  });
};
