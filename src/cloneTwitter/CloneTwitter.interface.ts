import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const CreateUserCodec = t.type({
  username: t.string,
});

export interface ICreateUser extends t.TypeOf<typeof CreateUserCodec> {}

export const UpdateUserCodec = t.type({
  id: t.number,
  username: optional(t.string),
  image: optional(t.string),
});

export interface IUpdateUser extends t.TypeOf<typeof UpdateUserCodec> {}

export const FollowUserCodec = t.type({
  userId: t.number,
  followId: t.number,
});

export interface IFollowUser extends t.TypeOf<typeof FollowUserCodec> {}

export const UnFollowUserCodec = t.type({
  userId: t.number,
  unFollowId: t.number,
});

export interface IUnFollowUser extends t.TypeOf<typeof UnFollowUserCodec> {}

// export const CreatePostCodec = t.type({
//   userId: t.number,
//   message: t.string,
//   image: optional(t.string),
// });

// export interface ICreatePost extends t.TypeOf<typeof CreatePostCodec> {}

export const CreatePostAndHashtagCodec = t.type({
  userId: t.number,
  message: t.string,
  image: optional(t.string),
  hashtags: t.array(t.type({ name: t.string })),
});

export interface ICreatePostAndHashtag
  extends t.TypeOf<typeof CreatePostAndHashtagCodec> {}

export const GetPostByHashtagCodec = t.type({
  hashtagName: t.string,
});

export interface IGetPostByHashtag
  extends t.TypeOf<typeof GetPostByHashtagCodec> {}

export const ReplyPostCodec = t.type({
  postId: t.number,
  userId: t.number,
  message: t.string,
  image: optional(t.string),
  hashtags: t.array(t.type({ hashtagName: t.string })),
});

export interface IReplyPost extends t.TypeOf<typeof ReplyPostCodec> {}

export const DirectMessageCodec = t.type({
  fromUserId: t.number,
  toUserId: t.number,
  message: t.string,
  image: optional(t.string),
});

export interface IDirectMessage extends t.TypeOf<typeof DirectMessageCodec> {}
