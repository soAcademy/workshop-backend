import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const createUserCodec = t.type({
  username: t.string,
});
export interface ICreateUser extends t.TypeOf<typeof createUserCodec> {}

export const getUserProfileCodec = t.type({
  userId: t.number,
});
export interface IGetUserProfile extends t.TypeOf<typeof getUserProfileCodec> {}

export const followCodec = t.type({
  userId: t.number,
  followId: t.number,
});

export interface IFollow extends t.TypeOf<typeof followCodec> {}

export const unFollowCodec = t.type({
  userId: t.number,
  unFollowId: t.number,
});

export interface IUnFollow extends t.TypeOf<typeof unFollowCodec> {}

export const createTweetCodec = t.type({
  userId: t.number,
  message: t.string,
  hashtags: optional(t.array(t.string)),
});

export interface ICreateTweet extends t.TypeOf<typeof createTweetCodec> {}

export const getTweetsByHashtagsCodec = t.type({
  hashtag: t.string,
});

export interface IGetTweetsByHashtags
  extends t.TypeOf<typeof getTweetsByHashtagsCodec> {}

export const getTweetsByUserCodec = t.type({
  userId: t.number,
});

export interface IGetTweetsByUser
  extends t.TypeOf<typeof getTweetsByUserCodec> {}

export const replyTweetCodec = t.type({
  tweetId: t.number,
  message: t.string,
  hashtags: t.array(t.string),
  userId: t.number,
});

export interface IReplyTweet extends t.TypeOf<typeof replyTweetCodec> {}

export const likeTweetCodec = t.type({
  tweetId: t.number,
  userId: t.number,
});

export interface ILikeTweet extends t.TypeOf<typeof likeTweetCodec> {}

export const updateUserProfilePictureCodec = t.type({
  userId: t.number,
  imageUrl: t.string,
});

export interface IUpdateUserProfilePicture
  extends t.TypeOf<typeof updateUserProfilePictureCodec> {}

export const sendDirectMessageCodec = t.type({
  fromUserId: t.number,
  toUserId: t.number,
  message: t.string,
});

export interface ISendDirectMessage
  extends t.TypeOf<typeof sendDirectMessageCodec> {}
