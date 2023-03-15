import { PrismaClient } from "../../prisma/client";
import {
  IClickFollowTwitter,
  IClickUnFollowTwitter,
  ICreatePostTwitter,
  ICreateReplyTwitter,
  ICreateUserTwitter,
  IGetPostByHashtagTwitter,
  IGetPostByUserTwitter,
  ISendDirectMsgTwitter,
} from "./twitter.interface";

export const prisma = new PrismaClient();

export const getUserTwitter = () => prisma.user.findMany();

export const createUserTwitter = (args: ICreateUserTwitter) =>
  prisma.user.create({
    data: {
      name: args.name,
      profileImage: args.profileImage,
    },
  });

export const clickFollowTwitter = (args: IClickFollowTwitter) =>
  prisma.following.create({
    data: {
      from: { connect: { id: args.fromUserId } },
      to: { connect: { id: args.toUserId } },
    },
  });

export const createPostTwitter = async (args: ICreatePostTwitter) => {
  const getData = args?.postDetail;
  const pattern = /#\w+/g;
  const matches = getData.match(pattern);
  const hashtags = matches?.map((r) => ({ hashtag: r }));
  console.log(hashtags);

  const result = await prisma.post.create({
    data: {
      user: { connect: { id: args.userId } },
      postDetail: args.postDetail,
      postOnHashtag: {
        create: hashtags?.map((r) => ({
          hashtag: {
            connectOrCreate: {
              where: { hashtag: r.hashtag },
              create: { hashtag: r.hashtag },
            },
          },
        })),
      },
    },
    include: { postOnHashtag: { include: { hashtag: true } } },
  });
  return result;
};

export const sendDirectMsgTwitter = (args: ISendDirectMsgTwitter) =>
  prisma.directMsg.create({
    data: {
      from: { connect: { id: args.fromUserId } },
      to: { connect: { id: args.toUserId } },
      msgDetail: args.msgDetail,
    },
  });

export const getHashtagTwitter = () => prisma.hashtag.findMany();

export const getPostByHashtagTwitter = (args: IGetPostByHashtagTwitter) =>
  prisma.hashtag.findMany({
    where: { hashtag: args.hashtag },
    include: {
      postOnHashtag: {
        select: { post: { select: { userId: true, postDetail: true } } },
      },
    },
  });

export const getPostByUserTwitter = (args: IGetPostByUserTwitter) =>
  prisma.user.findMany({
    where: { id: args.userId },
    include: {
      post: {
        select: {
          postDetail: true,
          reply: {
            select: {
              reply: true,
              replyUser: { select: { id: true, name: true } },
            },
          },
        },
      },
    },
  });

export const createReplyTwitter = (args: ICreateReplyTwitter) =>
  prisma.reply.create({
    data: {
      post: {
        connect: { id: args.postId },
      },
      reply: args.reply,
      replyUser: { connect: { id: args.userId } },
    },
  });

export const clickUnFollowTwitter = (args: IClickUnFollowTwitter) =>
  prisma.following.delete({
    where: {
      fromUserId_toUserId: {
        fromUserId: args.fromUserId,
        toUserId: args.toUserId,
      },
    },
  });
