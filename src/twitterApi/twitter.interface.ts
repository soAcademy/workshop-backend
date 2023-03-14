import * as t from "io-ts";

export const createTWUsersCodec = t.type({
  data: t.array(
    t.type({
      name: t.string,
      image: t.string,
      join: t.string,
    })
  ),
});
export interface ICreateTWUsers extends t.TypeOf<typeof createTWUsersCodec> {}

export const createTWFollowCodec = t.type({
  data: t.array(
    t.type({
      fromUserId: t.number,
      toUserId: t.number,
    })
  ),
});
export interface ICreateTWFollow extends t.TypeOf<typeof createTWFollowCodec> {}

export const getUserProfileCodec = t.type({ name: t.string });
export interface IGetUserProfile extends t.TypeOf<typeof getUserProfileCodec> {}

export const createPostCodec = t.type({
  userId: t.number,
  caption: t.string,
  hashtags: t.array(t.type({ hashtag: t.string })),
});
export interface ICreatePost extends t.TypeOf<typeof createPostCodec> {}
