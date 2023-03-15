import * as t from "io-ts";

export const createUserCodec = t.type({
  name: t.string,
  image: t.string,
});

export interface ICreateUser extends t.TypeOf<typeof createUserCodec> {}

export const createUserPostCodec = t.type({
  userId: t.number,
  post: t.string,
  postToHashtags: t.array(t.type({ hashtagId: t.number, hashtag: t.string })),
});

export interface ICreateUserPost extends t.TypeOf<typeof createUserPostCodec> {}

// export const createHashtagCodec = t.type({
//   hashtag: t.string,
// });

// export interface ICreateHashtag extends t.TypeOf<typeof createHashtagCodec> {}

export const getPostsbyHashtagCodec = t.type({
  hashtagId: t.number,
});

export interface IgetPostsbyHashtag
  extends t.TypeOf<typeof getPostsbyHashtagCodec> {}

export const createCommentCodec = t.type({
  message: t.string,
  // image: t.string,
  postId: t.number,
  userId: t.number,
});

export interface ICreateComment extends t.TypeOf<typeof createCommentCodec> {}

export const getPostsbyUserCodec = t.type({
  userId: t.number,
});

export interface IgetPostsbyUser extends t.TypeOf<typeof getPostsbyUserCodec> {}

export const createDirectMessageCodec = t.type({
  message: t.string,
  fromUserId: t.number,
  toUserId: t.number,
});

export interface ICreateDirectMessage
  extends t.TypeOf<typeof createDirectMessageCodec> {}

export const createUserRelationCodec = t.type({
  followingUserId: t.number,
  followerUserId: t.number,
});

export interface ICreateUserRelation
  extends t.TypeOf<typeof createUserRelationCodec> {}
