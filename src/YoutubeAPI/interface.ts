import {
  AdminRoleEnum,
  BenefitEnum,
  PermissionEnum,
  ReactionEnum,
} from "@prisma/client";
import * as t from "io-ts";
import { optional, strict } from "io-ts-extra";

export const createUserCodec = strict({
  username: t.string,
  email: t.string,
  accountName: t.string,
  profilePicture: optional(t.string),
});

export interface ICreateUser extends t.TypeOf<typeof createUserCodec> {}

export const updateUserCodec = strict({
  userId: t.number,
  email: optional(t.string),
  accountName: optional(t.string),
  profilePicture: optional(t.string),
});

export interface IUpdateUser extends t.TypeOf<typeof updateUserCodec> {}

export const createChannelCodec = strict({
  name: t.string,
  profilePicture: optional(t.string),
  userId: t.number,
});

export interface ICreateChannel extends t.TypeOf<typeof createChannelCodec> {}

export const updateChannelInfoCodec = strict({
  channelId: t.number,
  name: optional(t.string),
  profilePicture: optional(t.string),
  about: optional(t.string),
});

export interface IUpdateChannelInfo
  extends t.TypeOf<typeof updateChannelInfoCodec> {}

export const addChannelAdminCodec = strict({
  channelId: t.number,
  userId: t.number,
  roleName: t.keyof({
    [AdminRoleEnum.ADMIN]: null,
    [AdminRoleEnum.CREATOR]: null,
    [AdminRoleEnum.EDITOR]: null,
  }),
  permissions: t.array(
    t.keyof({
      [PermissionEnum.CREATE]: null,
      [PermissionEnum.DELETE]: null,
      [PermissionEnum.EDIT]: null,
      [PermissionEnum.POST]: null,
    })
  ),
});

export interface IAddChannelAdmin
  extends t.TypeOf<typeof addChannelAdminCodec> {}

export const updateChannelAdminCodec = strict({
  channelAdminId: t.number,
  roleName: optional(
    t.keyof({
      [AdminRoleEnum.ADMIN]: null,
      [AdminRoleEnum.CREATOR]: null,
      [AdminRoleEnum.EDITOR]: null,
    })
  ),
  permissions: optional(
    t.array(
      t.keyof({
        [PermissionEnum.CREATE]: null,
        [PermissionEnum.DELETE]: null,
        [PermissionEnum.EDIT]: null,
        [PermissionEnum.POST]: null,
      })
    )
  ),
});

export interface IUpdateChannelAdmin
  extends t.TypeOf<typeof updateChannelAdminCodec> {}

export const subscribeCodec = t.type({
  userId: t.number,
  channelId: t.number,
});

export interface ISubscribe extends t.TypeOf<typeof subscribeCodec> {}

export const postVideoCodec = strict({
  channelId: t.number,
  name: t.string,
  description: optional(t.string),
});

export interface IPostVideo extends t.TypeOf<typeof postVideoCodec> {}

export const updateVideoCodec = strict({
  videoId: t.number,
  name: optional(t.string),
  description: optional(t.string),
});

export interface IUpdateVideo extends t.TypeOf<typeof updateVideoCodec> {}

export const deleteVideoCodec = t.type({
  videoId: t.number,
});

export interface IDeleteVideo extends t.TypeOf<typeof deleteVideoCodec> {}

export const addReactionCodec = t.type({
  videoId: t.number,
  userId: t.number,
  type: t.keyof({
    [ReactionEnum.DISLIKE]: null,
    [ReactionEnum.LIKE]: null,
  }),
});

export interface IAddReaction extends t.TypeOf<typeof addReactionCodec> {}

export const addCommentCodec = strict({
  userId: t.number,
  videoId: t.number,
  comment: t.string,
  commentToId: optional(t.number),
});

export interface IAddComment extends t.TypeOf<typeof addCommentCodec> {}

export const removeCommentCodec = t.type({
  commentId: t.number,
});

export interface IRemoveComment extends t.TypeOf<typeof removeCommentCodec> {}

export const createChannelLevelCodec = strict({
  level: t.string,
  channelId: t.number,
  benefits: optional(
    t.array(
      t.keyof({
        [BenefitEnum.COMMUNITY_VIDEO]: null,
        [BenefitEnum.EARLY_ACCESS]: null,
        [BenefitEnum.EMOTICON]: null,
      })
    )
  ),
});

export interface ICreateChannelLevel
  extends t.TypeOf<typeof createChannelLevelCodec> {}

export const deleteChannelLevelCodec = t.type({
  channelId: t.number,
  level: t.string,
});

export interface IDeleteChannelLevel
  extends t.TypeOf<typeof deleteChannelLevelCodec> {}

export const updateChannelLevelCodec = strict({
  channelLevelId: t.number,
  level: optional(t.string),
  benefits: optional(
    t.array(
      t.keyof({
        [BenefitEnum.COMMUNITY_VIDEO]: null,
        [BenefitEnum.EARLY_ACCESS]: null,
        [BenefitEnum.EMOTICON]: null,
      })
    )
  ),
});

export interface IUpdateChannelLevel
  extends t.TypeOf<typeof updateChannelLevelCodec> {}
