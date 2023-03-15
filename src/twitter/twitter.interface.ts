import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const GetUserProfileCodec = t.type({ id: t.number });
export interface IGetUserProfile extends t.TypeOf<typeof GetUserProfileCodec> {}

export const CreateUserPostCodec = t.type({
  userId: t.number,
  detail: t.string,
  postId: optional(t.number),
  hashtags: t.array(t.type({ hashtag: t.string })),
});
export interface ICreateUserPost extends t.TypeOf<typeof CreateUserPostCodec> {}

export const GetPostByHashtagCodec = t.type({ hashtagId: t.number });
export interface IGetPostByHashtag
  extends t.TypeOf<typeof GetPostByHashtagCodec> {}

export const GetPostByUserCodec = t.type({ userId: t.number });
export interface IGetPostByUser extends t.TypeOf<typeof GetPostByUserCodec> {}

export const GetPostByIdCodec = t.type({ postId: t.number });
export interface IGetPostById extends t.TypeOf<typeof GetPostByIdCodec> {}

export const CreateUserCodec = t.type({ username: t.string, image: t.string });
export interface ICreateUser extends t.TypeOf<typeof CreateUserCodec> {}
