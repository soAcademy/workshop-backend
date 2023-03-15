import { PermissionEnum, PrismaClient } from "@prisma/client";
import {
  IAddChannelAdmin,
  IAddComment,
  IAddReaction,
  ICreateChannel,
  ICreateChannelLevel,
  ICreateUser,
  IDeleteChannelLevel,
  IDeleteVideo,
  IPostVideo,
  IRemoveComment,
  ISubscribe,
  IUpdateChannelAdmin,
  IUpdateChannelInfo,
  IUpdateChannelLevel,
  IUpdateUser,
  IUpdateVideo,
} from "./interface";

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) => {
  return prisma.user.create({
    data: {
      username: args.username,
      email: args.email,
      accountName: args.accountName,
      profilePicture: args.profilePicture || undefined,
    },
  });
};

export const updateUser = (args: IUpdateUser) => {
  return prisma.user.update({
    where: {
      id: args.userId,
    },
    data: {
      email: args.email || undefined,
      accountName: args.accountName || undefined,
      profilePicture: args.profilePicture || undefined,
    },
  });
};

export const createChannel = (args: ICreateChannel) => {
  const defaultPermissions = [
    PermissionEnum.CREATE,
    PermissionEnum.DELETE,
    PermissionEnum.EDIT,
    PermissionEnum.POST,
  ];
  return prisma.channel.create({
    data: {
      name: args.name,
      profilePicture: args.profilePicture || undefined,
      ownedBy: {
        create: {
          user: {
            connect: {
              id: args.userId,
            },
          },
          permissions: {
            connectOrCreate: defaultPermissions.map((permission) => ({
              where: {
                permission,
              },
              create: {
                permission,
              },
            })),
          },
        },
      },
    },
  });
};

export const updateChannelInfo = (args: IUpdateChannelInfo) => {
  return prisma.channel.update({
    where: {
      id: args.channelId,
    },
    data: {
      name: args.name || undefined,
      profilePicture: args.profilePicture || undefined,
      about: args.about || undefined,
    },
  });
};

export const addChannelAdmin = (args: IAddChannelAdmin) => {
  return prisma.channelAdmin.create({
    data: {
      user: {
        connect: {
          id: args.userId,
        },
      },
      channel: {
        connect: {
          id: args.channelId,
        },
      },
      roleName: args.roleName,
      permissions: {
        connectOrCreate: args.permissions.map((permission) => ({
          where: {
            permission,
          },
          create: {
            permission,
          },
        })),
      },
    },
  });
};

export const updateChannelAdmin = async (args: IUpdateChannelAdmin) => {
  const previousPermissions = await prisma.channelAdmin.findFirstOrThrow({
    where: { id: args.channelAdminId },
    select: {
      permissions: true,
    },
  });
  return prisma.channelAdmin.update({
    where: {
      id: args.channelAdminId,
    },
    data: {
      roleName: { set: args.roleName || undefined },
      permissions: {
        disconnect: previousPermissions.permissions.map((data) => ({
          permission: data.permission,
        })),
        connect: args.permissions?.map((permission) => ({
          permission,
        })),
      },
    },
    include: {
      permissions: true,
    },
  });
};

export const subscribe = (args: ISubscribe) => {
  return prisma.user.update({
    where: {
      id: args.userId,
    },
    data: {
      subscribings: {
        connectOrCreate: {
          where: {
            channelId: args.channelId,
          },
          create: {
            channelId: args.channelId,
          },
        },
      },
    },
    select: {
      id: true,
      subscribings: true,
    },
  });
};

export const unsubscribe = (args: ISubscribe) => {
  return prisma.user.update({
    where: {
      id: args.userId,
    },
    data: {
      subscribings: {
        disconnect: {
          channelId: args.channelId,
        },
      },
    },
    select: {
      id: true,
      subscribings: true,
    },
  });
};

export const postVideo = (args: IPostVideo) => {
  return prisma.video.create({
    data: {
      channel: {
        connect: {
          id: args.channelId,
        },
      },
      name: args.name,
      description: args.description,
    },
  });
};

export const updateVideo = (args: IUpdateVideo) => {
  return prisma.video.update({
    where: {
      id: args.videoId,
    },
    data: {
      name: args.name || undefined,
      description: args.description || undefined,
    },
  });
};

export const deleteVideo = (args: IDeleteVideo) => {
  return prisma.video.delete({
    where: {
      id: args.videoId,
    },
  });
};

export const addReaction = (args: IAddReaction) => {
  return prisma.video.update({
    where: {
      id: args.videoId,
    },
    data: {
      reactions: {
        upsert: {
          where: {
            videoId_type: {
              videoId: args.videoId,
              type: args.type,
            },
          },
          create: {
            type: args.type,
            user: {
              connect: {
                id: args.userId,
              },
            },
          },
          update: {
            user: {
              connect: {
                id: args.userId,
              },
            },
          },
        },
      },
    },
    select: {
      id: true,
      reactions: {
        include: {
          user: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });
};

export const removeReaction = (args: IAddReaction) => {
  return prisma.user.update({
    where: {
      id: args.userId,
    },
    data: {
      reactions: {
        disconnect: {
          videoId_type: {
            videoId: args.videoId,
            type: args.type,
          },
        },
      },
    },
    select: {
      id: true,
      reactions: true,
    },
  });
};

export const addComment = (args: IAddComment) => {
  return prisma.video.update({
    where: {
      id: args.videoId,
    },
    data: {
      comments: {
        create: {
          comment: args.comment,
          user: {
            connect: {
              id: args.userId,
            },
          },
          ...(args.commentToId && {
            commentTo: {
              connect: {
                id: args.commentToId || undefined,
              },
            },
          }),
        },
      },
    },
  });
};

export const removeComment = (args: IRemoveComment) => {
  return prisma.comment.update({
    where: {
      id: args.commentId,
    },
    data: {
      user: {
        disconnect: true,
      },
      comment: null,
    },
  });
};

export const createChannelLevel = (args: ICreateChannelLevel) => {
  return prisma.channel.update({
    where: { id: args.channelId },
    data: {
      channelLevels: {
        create: {
          level: args.level,
          benefits: {
            connectOrCreate: args.benefits?.map((benefit) => ({
              where: {
                benefit,
              },
              create: {
                benefit,
              },
            })),
          },
        },
      },
    },
  });
};

export const updateChannelLevel = async (args: IUpdateChannelLevel) => {
  const previousBenefits = await prisma.channelLevel.findFirstOrThrow({
    where: {
      id: args.channelLevelId,
    },
    select: {
      benefits: true,
    },
  });
  return prisma.channelLevel.update({
    where: {
      id: args.channelLevelId,
    },
    data: {
      level: args.level || undefined,
      benefits: {
        disconnect: previousBenefits.benefits.map((data) => ({
          benefit: data.benefit,
        })),
        connectOrCreate: args.benefits?.map((benefit) => ({
          where: {
            benefit,
          },
          create: {
            benefit,
          },
        })),
      },
    },
  });
};

export const deleteChannelLevel = (args: IDeleteChannelLevel) => {
  return prisma.channelLevel.delete({
    where: {
      level_channelId: {
        level: args.level,
        channelId: args.channelId,
      },
    },
  });
};
