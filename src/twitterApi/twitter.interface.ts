import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const createUserTwitterCodec = t.type({
  name: t.string,
  profileImage: t.string,
});

export interface ICreateUserTwitter
  extends t.TypeOf<typeof createUserTwitterCodec> {}

export const clickFollowTwitterCodec = t.type({
  fromUserId: t.number,
  toUserId: t.number,
});

export interface IClickFollowTwitter
  extends t.TypeOf<typeof clickFollowTwitterCodec> {}

export const createPostTwitterCodec = t.type({
  userId: t.number,
  postDetail: t.string,
});

export interface ICreatePostTwitter
  extends t.TypeOf<typeof createPostTwitterCodec> {}

export const sendDirectMsgTwitterCodec = t.type({
  fromUserId: t.number,
  toUserId: t.number,
  msgDetail: t.string,
});

export interface ISendDirectMsgTwitter
  extends t.TypeOf<typeof sendDirectMsgTwitterCodec> {}

export const getPostByHashtagTwitterCodec = t.type({
  hashtag: t.string,
});

export interface IGetPostByHashtagTwitter
  extends t.TypeOf<typeof getPostByHashtagTwitterCodec> {}

export const getPostByUserTwitterCodec = t.type({
  userId: t.number,
});

export interface IGetPostByUserTwitter
  extends t.TypeOf<typeof getPostByUserTwitterCodec> {}

export const createReplyTwitterCodec = t.type({
  postId: t.number,
  userId: t.number,
  reply: t.string,
});

export interface ICreateReplyTwitter
  extends t.TypeOf<typeof createReplyTwitterCodec> {}

export const clickUnFollowTwitterCodec = t.type({
  fromUserId: t.number,
  toUserId: t.number,
});

export interface IClickUnFollowTwitter
  extends t.TypeOf<typeof clickUnFollowTwitterCodec> {}
