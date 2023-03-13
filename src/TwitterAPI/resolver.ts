import { PrismaClient } from "@prisma/client";
import {
  ICreateTweet,
  ICreateUser,
  IFollow,
  IGetTweetsByHashtags,
  IGetTweetsByUser,
  IGetUserProfile,
  ILikeTweet,
  IReplyTweet,
  ISendDirectMessage,
  IUnFollow,
  IUpdateUserProfilePicture,
} from "./interface";

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) => {
  return prisma.user.create({
    data: { username: args.username },
  });
};

export const getUserProfile = async (args: IGetUserProfile) => {
  const data = await prisma.user.findFirstOrThrow({
    where: {
      id: args.userId,
    },
    include: {
      followers: true,
    },
  });
  const followings = await prisma.user.findMany({
    where: {
      followers: {
        some: {
          id: args.userId,
        },
      },
    },
  });
  return {
    id: args.userId,
    username: data.username,
    profileImage: data.profileImage,
    followers: data.followers,
    followings: followings,
    createAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
};

export const follow = (args: IFollow) => {
  return prisma.user.update({
    where: {
      id: args.userId,
    },
    data: {
      followings: {
        connect: {
          id: args.followId,
        },
      },
    },
  });
};

export const unfollow = (args: IUnFollow) => {
  return prisma.user.update({
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
};

export const createTweet = (args: ICreateTweet) => {
  return prisma.tweet.create({
    data: {
      message: args.message,
      user: {
        connect: {
          id: args.userId,
        },
      },
      hashtags: {
        connectOrCreate: args.hashtags?.map((e) => ({
          where: {
            hashtag: e,
          },
          create: {
            hashtag: e,
          },
        })),
      },
    },
    include: {
      hashtags: true,
    },
  });
};

export const getHashtags = () => {
  return prisma.hashtag.findMany();
};

export const getTweetsByHashtags = (args: IGetTweetsByHashtags) => {
  return prisma.tweet.findMany({
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
};

export const getTweetsByUser = (args: IGetTweetsByUser) => {
  return prisma.tweet.findMany({
    where: {
      userId: args.userId,
    },
    include: {
      replyBy: true,
      likedBy: true,
    },
  });
};

export const replyTweet = (args: IReplyTweet) => {
  return prisma.tweet.update({
    where: {
      id: args.tweetId,
    },
    data: {
      replyBy: {
        create: {
          message: args.message,
          user: {
            connect: {
              id: args.userId,
            },
          },
          hashtags: {
            connectOrCreate: args.hashtags.map((e) => ({
              where: {
                hashtag: e,
              },
              create: {
                hashtag: e,
              },
            })),
          },
        },
      },
    },
    include: {
      replyBy: true,
    },
  });
};

export const likeTweet = (args: ILikeTweet) => {
  return prisma.tweet.update({
    where: {
      id: args.tweetId,
    },
    data: {
      likedBy: {
        connect: {
          id: args.userId,
        },
      },
    },
    include: {
      likedBy: true,
    },
  });
};

export const unlikeTweet = (args: ILikeTweet) => {
  return prisma.tweet.update({
    where: {
      id: args.tweetId,
    },
    data: {
      likedBy: {
        disconnect: {
          id: args.userId,
        },
      },
    },
    include: {
      likedBy: true,
    },
  });
};

export const updateUserProfilePicture = (args: IUpdateUserProfilePicture) => {
  return prisma.user.update({
    where: {
      id: args.userId,
    },
    data: {
      profileImage: args.imageUrl,
    },
  });
};

export const sendDirectMessage = (args: ISendDirectMessage) => {
  return prisma.directMessage.create({
    data: {
      message: args.message,
      fromUser: {
        connect: {
          id: args.fromUserId,
        },
      },
      toUser: {
        connect: {
          id: args.toUserId,
        },
      },
    },
    include: {
      toUser: {
        include: {
          receivedMessages: true,
        },
      },
    },
  });
};
