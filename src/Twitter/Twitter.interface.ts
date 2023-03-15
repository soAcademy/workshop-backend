import * as t from "io-ts";

export const createUserTwitterCodec = t.type({
  name: t.string,
  profileImage: t.string,
});

export interface ICreateUserTwitterCodec
  extends t.TypeOf<typeof createUserTwitterCodec> {}

//-----------------------------------------------------

export const getUserProfileTwitterCodec = t.type({
  id: t.number,
});

export interface IGetUserProfileTwitterCodec
  extends t.TypeOf<typeof getUserProfileTwitterCodec> {}

//-----------------------------------------------------

export const createTweetCodec = t.type({
  message: t.string,
  userId: t.number,
  // hashTags: t.array(t.string),
});
export interface ICreateTweetCodec extends t.TypeOf<typeof createTweetCodec> {}

//-----------------------------------------------------

export const getHashtagsTwitterCodec = t.type({
  id: t.number,
});

export interface IGetHashtagsTwitter
  extends t.TypeOf<typeof getHashtagsTwitterCodec> {}

//-----------------------------------------------------

export const getPostByUserTwitterCodec = t.type({
  userId: t.number,
});

export interface IGetPostByUserTwitter
  extends t.TypeOf<typeof getPostByUserTwitterCodec> {}

//-----------------------------------------------------

export const createReplyTwitterCodec = t.type({
  message: t.string,
  postId: t.number,
  userId: t.number,
});

export interface ICreateReplyTwitter
  extends t.TypeOf<typeof createReplyTwitterCodec> {}

//------------------------------------------------------

export const createTweetWithHashTagCodec = t.type({
  message: t.string,
  hashTagName: t.string,
  userId: t.number,
});

export interface ICreateTweetWithHash
  extends t.TypeOf<typeof createTweetWithHashTagCodec> {}

//------------------------------------------------------

export const createHashTagCodec = t.type({
  hashTagName: t.string,
});

export interface ICreateHashTag extends t.TypeOf<typeof createHashTagCodec> {}

//------------------------------------------------------

export const getPostByHashtagTwitterCodec = t.type({
  hashTagName: t.string,
});

export interface IGetPostByHashtagTwitter
  extends t.TypeOf<typeof getPostByHashtagTwitterCodec> {}

//------------------------------------------------------

export const deletePostTweetCodec = t.type({
  id: t.number,
});

export interface IDeletePostTweet
  extends t.TypeOf<typeof deletePostTweetCodec> {}

//------------------------------------------------------

export const deleteUserTweetCodec = t.type({
  id: t.number,
});

export interface IDeleteUserTweet
  extends t.TypeOf<typeof deleteUserTweetCodec> {}

//------------------------------------------------------

export const deleteReplyTweetCodec = t.type({
  id: t.number,
});

export interface IDeleteReplyTweet
  extends t.TypeOf<typeof deleteReplyTweetCodec> {}

//------------------------------------------------------
