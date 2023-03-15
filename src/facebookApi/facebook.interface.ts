import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const createUserFacebookCodec = t.type({
  name: t.string,
  profileImage: t.string,
  coverImage: t.string,
  bio: t.string,
});

export interface ICreateUserFacebook
  extends t.TypeOf<typeof createUserFacebookCodec> {}

export const addFriendFacebookCodec = t.type({
  fromUserId: t.number,
  toUserId: t.number,
});

export interface IAddFriendFacebook
  extends t.TypeOf<typeof addFriendFacebookCodec> {}

export const createPostFacebookCodec = t.type({
  userId: t.number,
  postDetail: t.string,
  image: t.string,
  postIngroupId: optional(t.number),
  postInUserId: optional(t.number),
});

export interface ICreatePostFacebook
  extends t.TypeOf<typeof createPostFacebookCodec> {}

export const commentFacebookCodec = t.type({
  postId: t.number,
  commentDetail: t.string,
  fromUserId: t.number,
});

export interface ICommentFacebook
  extends t.TypeOf<typeof commentFacebookCodec> {}

export const subCommentFacebookCodec = t.type({
  commentId: t.number,
  subCommentDetail: t.string,
  fromUserId: t.number,
});

export interface ISubCommentFacebook
  extends t.TypeOf<typeof subCommentFacebookCodec> {}

export const likeFacebookCodec = t.type({
  postId: t.number,
  fromUserId: t.number,
  likeTypeId: t.number,
});

export interface ILikeFacebook extends t.TypeOf<typeof likeFacebookCodec> {}

export const shareFacebookCodec = t.type({
  postId: t.number,
  fromUserId: t.number,
  shareStatusId: t.number,
});

export interface IShareFacebook extends t.TypeOf<typeof shareFacebookCodec> {}

export const createGroupFacebookCodec = t.type({
  groupName: t.string,
  groupImage: t.string,
  userIdOfCreator: t.number,
});

export interface ICreateGroupFacebook
  extends t.TypeOf<typeof createGroupFacebookCodec> {}

export const sendDirectMsgFacebookCodec = t.type({
  fromUserId: t.number,
  toUserId: t.number,
  msgDetail: t.string,
});

export interface ISendDirectMsgFacebook
  extends t.TypeOf<typeof sendDirectMsgFacebookCodec> {}

export const getPostByHashtagFacebookCodec = t.type({
  hashtag: t.string,
});

export interface IGetPostByHashtagFacebook
  extends t.TypeOf<typeof getPostByHashtagFacebookCodec> {}

export const getPostByUserFacebookCodec = t.type({
  userId: t.number,
});

export interface IGetPostByUserFacebook
  extends t.TypeOf<typeof getPostByUserFacebookCodec> {}

export const createLikeTypeFacebookCodec = t.type({
  name: t.string,
});

export interface ICreateLikeTypeFacebook
  extends t.TypeOf<typeof createLikeTypeFacebookCodec> {}

export const createShareTypeFacebookCodec = t.type({
  name: t.string,
});

export interface ICreateShareTypeFacebook
  extends t.TypeOf<typeof createShareTypeFacebookCodec> {}
