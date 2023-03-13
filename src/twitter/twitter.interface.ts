import * as t from "io-ts";

export const GetUserProfileCodec = t.type({ id: t.number });
export interface IGetUserProfile extends t.TypeOf<typeof GetUserProfileCodec> {}

export const CreateUserPostCodec = t.type({
  userId: t.number,
  detail: t.string,
  hashtags: t.array(t.type({ hashtag: t.string })),
});
export interface ICreateUserPost extends t.TypeOf<typeof CreateUserPostCodec> {}

export const GetPostByHashtagCodec = t.type({ hashtagId: t.number });
export interface IGetPostByHashtag
  extends t.TypeOf<typeof GetPostByHashtagCodec> {}

export const GetPostByUserCodec = t.type({ userId: t.number });
export interface IGetPostByUser extends t.TypeOf<typeof GetPostByUserCodec> {}
