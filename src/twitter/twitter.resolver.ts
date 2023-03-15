import { PrismaClient } from "../../prisma/client";
import {
  ICreateUser,
  ICreateUserPost,
  IGetPostByHashtag,
  IGetPostById,
  IGetPostByUser,
  IGetUserProfile,
} from "./twitter.interface";
export const prisma = new PrismaClient();

// getUserProfile
// createUserPost
// getHashtags
// getPostByHashtag (ส่ง hashtag ที่ต้องการไป แล้วแสดง post ทั้งหมด)
// getPostByUser (แสดงรายละเอียดของ user คนนั้น พร้อม reply)

export const getUserProfile = async (args: IGetUserProfile) =>
  prisma.user.findUnique({
    where: {
      id: args.id,
    },
  });

export const createUserPost = async (args: ICreateUserPost) =>
  prisma.post.create({
    data: {
      userId: args.userId,
      detail: args.detail,
      postId: args.postId ?? undefined,
      hashtagOnPosts: {
        create: args.hashtags.map((hashtag) => ({
          hashtag: {
            connectOrCreate: {
              create: {
                topic: hashtag.hashtag,
              },
              where: {
                topic: hashtag.hashtag,
              },
            },
          },
        })),
      },
    },
  });

export const getSumHashtags = async () =>
  prisma.hashtagOnPost.groupBy({
    by: ["hashtagId"],
    _count: {
      hashtagId: true,
    },
    orderBy: {
      _count: {
        hashtagId: "desc",
      },
    },
  });

export const getHashtags = async () => prisma.hashtag.findMany();

export const getPostByHashtag = async (args: IGetPostByHashtag) =>
  prisma.post.findMany({
    where: {
      hashtagOnPosts: {
        some: {
          hashtagId: args.hashtagId,
        },
      },
    },
    include: {
      user: true,
      hashtagOnPosts: {
        include: {
          hashtag: true,
        },
      },
      replyToPost: {
        include: {
          user: true,
          hashtagOnPosts: {
            include: {
              hashtag: true,
            },
          },
          replyToPost: true,
        },
      },
    },
  });

export const getPostByUser = async (args: IGetPostByUser) =>
  prisma.post.findMany({
    where: {
      userId: args.userId,
    },
    include: {
      user: true,
      hashtagOnPosts: {
        include: {
          hashtag: true,
        },
      },
      replyToPost: {
        include: {
          user: true,
          hashtagOnPosts: {
            include: {
              hashtag: true,
            },
          },
          replyToPost: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

const mergeDataFunc = (allPosts: any[]) => {
  const mainPosts = allPosts.filter((post) => post.postId === null);
  console.log("mainPosts", mainPosts.length);

  const firstReply = allPosts.filter((post) => post.postId !== null);
  console.log("firstReply", firstReply.length);

  const mergeOnMainPost = mainPosts.map((post) => {
    //find reply on step 1
    const findReplyOnMain = firstReply.filter(
      (reply) => reply.postId === post.id
    );
    //find reply in reply (step 2)
    const findReplyInReply = findReplyOnMain.map((reply) => {
      const rInR = firstReply.filter((fR) => fR.postId === reply.id);
      console.log(rInR.length);

      return { ...reply, replies: rInR };
    });

    return { ...post, replies: findReplyInReply };
  });
  // console.log("mergeOnMainPost", mergeOnMainPost);
  return mergeOnMainPost;
};

export const getPosts = async () => {
  const allPosts = await prisma.post.findMany({
    include: {
      user: true,
      hashtagOnPosts: {
        include: {
          hashtag: true,
        },
      },
      replyToPost: {
        include: {
          user: true,
          hashtagOnPosts: {
            include: {
              hashtag: true,
            },
          },
          replyToPost: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  // console.log(allPosts);
  // return allPosts;
  return mergeDataFunc(allPosts);
};

export const getPostById = async (args: IGetPostById) => {
  const postById = await prisma.post.findMany({
    where: { id: args.postId },
    include: {
      user: true,
      hashtagOnPosts: {
        include: {
          hashtag: true,
        },
      },
      replyToPost: {
        include: {
          user: true,
          hashtagOnPosts: {
            include: {
              hashtag: true,
            },
          },
          replyToPost: true,
        },
      },
    },
  });
  // console.log(postById);
  return postById;
  // return mergeDataFunc(postById, "postById", args.postId);
};

export const getUsers = async () =>
  prisma.user.findMany({
    orderBy: {
      username: "asc",
    },
  });

export const createUser = async (args: ICreateUser) =>
  prisma.user.create({
    data: {
      username: args.username,
      image: args.image,
    },
  });
