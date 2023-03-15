import * as t from "io-ts";
import { optional } from "io-ts-extra";
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const CreateTwitterUserCodec = t.type({
  name: t.string,
  image: t.string,
});

export interface ICreateTwitterUser
  extends t.TypeOf<typeof CreateTwitterUserCodec> {}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const UpdateTwitterUserCodec = t.type({
  id: t.number,
  name: optional(t.string),
  image: optional(t.string),
});

export interface IUpdateTwitterUser
  extends t.TypeOf<typeof UpdateTwitterUserCodec> {}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const CreateTwitterUserRelationCodec = t.type({
  followerId: t.number,
  followingId: t.number,
});

export interface ICreateTwitterUserRelation
  extends t.TypeOf<typeof CreateTwitterUserRelationCodec> {}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const DeleteTwitterUserRelationCodec = t.type({
  id: t.number,
});
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const CreateTwitterPostCodec = t.type({
  userId: t.number,
  message: t.string,
  hashTags: t.array(t.type({ message: t.string })),
});

export interface ICreateTwitterPost
  extends t.TypeOf<typeof CreateTwitterPostCodec> {}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const GetTwitterPostByUserIdCodec = t.type({
  userId: t.number,
});
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const GetTwitterPostByHashTagIdCodec = t.type({
  hashTagId: t.number,
});
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const CreateTwitterReplyCodec = t.type({
  postId: t.number,
  userId: t.number,
  message: t.string,
});

export interface ICreateTwitterReply
  extends t.TypeOf<typeof CreateTwitterReplyCodec> {}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const CreateTwitterDMCodec = t.type({
  directFromId: t.number,
  directToId: t.number,
  message: t.string,
});

export interface ICreateTwitterDM
  extends t.TypeOf<typeof CreateTwitterDMCodec> {}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const DeleteTwitterPostCodec = t.type({
  id: t.number,
});
