import { PrismaClient } from "../../prisma/client";
import {
  IAddFriendFacebook,
  ICommentFacebook,
  ICreateGroupFacebook,
  ICreateLikeTypeFacebook,
  ICreatePostFacebook,
  ICreateShareTypeFacebook,
  ICreateUserFacebook,
  IGetPostByHashtagFacebook,
  IGetPostByUserFacebook,
  ILikeFacebook,
  ISendDirectMsgFacebook,
  IShareFacebook,
  ISubCommentFacebook,
} from "./facebook.interface";

export const prisma = new PrismaClient();

export const getUserFacebook = () => prisma.fBUser.findMany();

export const createUserFacebook = (args: ICreateUserFacebook) =>
  prisma.fBUser.create({
    data: {
      name: args.name,
      profileImage: args.profileImage,
      coverImage: args.coverImage,
      bio: args.bio,
    },
  });

export const addFriendFacebook = (args: IAddFriendFacebook) =>
  prisma.friends.create({
    data: {
      from: { connect: { id: args.fromUserId } },
      to: { connect: { id: args.toUserId } },
    },
  });

export const createPostFacebook = async (args: ICreatePostFacebook) => {
  const getData = args?.postDetail;
  const pattern = /#\w+/g;
  const matches = getData.match(pattern);
  const hashtags = matches?.map((r) => ({ hashtag: r }));
  console.log(hashtags);

  const result = await prisma.fBPost.create({
    data: {
      postByUser: { connect: { id: args.userId } },
      postDetail: args.postDetail,
      image: args.image,
      PostOnHashtag: {
        create: hashtags?.map((r) => ({
          hashtag: {
            connectOrCreate: {
              where: { hashtag: r.hashtag },
              create: { hashtag: r.hashtag },
            },
          },
        })),
      },
      group: !args?.postIngroupId
        ? undefined
        : {
            connect: { id: args?.postIngroupId },
          },
      postInUser: !args?.postInUserId
        ? undefined
        : {
            connect: { id: args?.postInUserId },
          },
    },
  });
  return result;
};

export const commentFacebook = (args: ICommentFacebook) =>
  prisma.comment.create({
    data: {
      post: { connect: { id: args.postId } },
      commentDetail: args.commentDetail,
      fromUserId: { connect: { id: args.fromUserId } },
    },
  });

export const subCommentFacebook = (args: ISubCommentFacebook) =>
  prisma.subComment.create({
    data: {
      comment: { connect: { id: args.commentId } },
      subCommentDetail: args.subCommentDetail,
      fromUserId: { connect: { id: args.fromUserId } },
    },
  });

export const likeFacebook = (args: ILikeFacebook) =>
  prisma.like.create({
    data: {
      post: { connect: { id: args.postId } },
      fromUserId: { connect: { id: args.fromUserId } },
      likeType: { connect: { id: args.likeTypeId } },
    },
  });

export const shareFacebook = (args: IShareFacebook) =>
  prisma.share.create({
    data: {
      post: { connect: { id: args.postId } },
      fromUserId: { connect: { id: args.fromUserId } },
      shareStatus: { connect: { id: args.shareStatusId } },
    },
  });

export const createGroupFacebook = (args: ICreateGroupFacebook) =>
  prisma.group.create({
    data: {
      groupName: args.groupName,
      groupImage: args.groupImage,
      GroupOnUser: {
        create: { user: { connect: { id: args.userIdOfCreator } } },
      },
    },
  });

export const sendDirectMsgFacebook = (args: ISendDirectMsgFacebook) =>
  prisma.fBDirectMsg.create({
    data: {
      from: { connect: { id: args.fromUserId } },
      to: { connect: { id: args.toUserId } },
      msgDetail: args.msgDetail,
    },
  });

export const getHashtagFacebook = () => prisma.fBHashtag.findMany();

export const getPostByHashtagFacebook = (args: IGetPostByHashtagFacebook) =>
  prisma.fBHashtag.findMany({
    where: { hashtag: args.hashtag },
    include: {
      PostOnHashtag: {
        select: { post: { select: { postByUserId: true, postDetail: true } } },
      },
    },
  });

export const getPostByUserFacebook = (args: IGetPostByUserFacebook) =>
  prisma.fBUser.findMany({
    where: { id: args.userId },
    include: {
      postByUser: {
        select: {
          postDetail: true,
          image: true,
          Comment: {
            select: {
              userId: true,
              commentDetail: true,
              SubComment: { select: { userId: true, subCommentDetail: true } },
            },
          },
        },
      },
      Like: { select: { userId: true, likeTypeId: true } },
      Share: { select: { userId: true, shareStatusId: true } },
    },
  });

export const createLikeTypeFacebook = (args: ICreateLikeTypeFacebook) =>
  prisma.likeType.create({
    data: { name: args.name },
  });

export const createShareTypeFacebook = (args: ICreateShareTypeFacebook) =>
  prisma.shareStatus.create({
    data: { name: args.name },
  });
