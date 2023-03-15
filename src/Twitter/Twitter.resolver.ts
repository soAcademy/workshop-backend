import { number } from "io-ts";
import { PrismaClient } from "../../prisma/client";
import {
  ICreateReplyTwitter,
  ICreateTweetCodec,
  ICreateUserTwitterCodec,
  IGetHashtagsTwitter,
  IGetPostByUserTwitter,
  IGetUserProfileTwitterCodec,
} from "./Twitter.interface";
export const prisma = new PrismaClient();

export const createUserTwitter = (args: ICreateUserTwitterCodec) =>
  prisma.user.create({
    data: {
      name: args.name,
      profileImage: args.profileImage,
    },
  });

export const getUserProfileTwitter = (args: IGetUserProfileTwitterCodec) =>
  prisma.user.findUnique({
    where: {
      id: args.id,
    },
    include: {
      fromUserRelations: true,
      toUserRelations: true,
    },
  });

export const createTweet = async (args: ICreateTweetCodec) => {
  const createdTweet = await prisma.post.create({
    data: {
      message: args.message,
      user: {
        connect: {
          id: args.userId,
        },
      },
      // HashTagOnPost: {
      //   connectOrCreate: args.hashTags.map((r) => {
      //     return {
      //       where: {
      //         hashTagName: r,
      //       },
      //       create: {
      //         hashTagName: r,
      //       },
      //     };
      //   }),
      // },
    },
  });

  return createdTweet;
};

//-------------------------------------------------------------------

export const createTweetWithHashTag = async (args: {
  hashTagName: string[];
  postId: number;
}) => {
  console.log(args);

  const createTweetWithHashTag = await Promise.all(
    args.hashTagName.map((r) =>
      prisma.hashTagOnPost.create({
        data: {
          postId: args.postId,
          hashTagName: r,
        },
      })
    )
  );
  return createTweetWithHashTag;
};

export const createHashTag = async (args: {
  postId: number;
  hashTagName: string;
}) => {
  const hashtagResult = await prisma.hashTag.upsert({
    //upsert = update0rcreate
    where: {
      name: args.hashTagName,
    },
    create: {
      name: args.hashTagName,
    },
    update: {
      name: args.hashTagName,
    },
  });
  // console.log(hashtagResult);

  const result = await prisma.hashTagOnPost.create({
    data: {
      postId: args.postId,
      hashTagName: hashtagResult.name,
    },
  });
  return result;
};

//-------------------------------------------------------------------

export const getHashtagsTwitter = () => prisma.hashTag.findMany({});

export const getPostByHashtagTwitter = (args: { hashTagName: string }) =>
  prisma.hashTagOnPost.findMany({
    where: {
      hashTagName: args.hashTagName,
    },
    include: {
      post: true,
      hashTag: true,
    },
  });

export const getPostByUserTwitter = (args: IGetPostByUserTwitter) =>
  prisma.post.findMany({
    where: {
      userId: args.userId,
    },
    include: {
      reply: true,
      user: true,
    },
  });

export const createReplyTwitter = (args: ICreateReplyTwitter) =>
  prisma.reply.create({
    data: {
      message: args.message,
      postId: args.postId,
      userId: args.userId,
    },
  });
//---------------------------- DELETE ZONE ------------------------------
// //delete post
export const deletePostTweet = (args: { id: number }) =>
  prisma.post.delete({
    where: {
      id: args.id,
    },
  });
// //delete user
export const deleteUserTweet = (args: { id: number }) =>
  prisma.user.delete({
    where: {
      id: args.id,
    },
  });
// //delete reply
export const deleteReplyTweet = (args: { id: number }) =>
  prisma.reply.delete({
    where: {
      id: args.id,
    },
  });
