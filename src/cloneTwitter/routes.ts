import {
  createPostAndHashtagHandler,
  // createPostHandler,
  createUserHandler,
  directMessageHandler,
  followUserHandler,
  getHashtagHandler,
  getPostByHashtagHandler,
  getPostHandler,
  getUserHandler,
  replyPostHandler,
  unFollowUserHandler,
  updateUserHandler,
} from "./CloneTwitter.handler";

export const AppRoutes = [
  {
    path: "/createUser",
    method: "post",
    action: createUserHandler,
  },
  {
    path: "/updateUser",
    method: "post",
    action: updateUserHandler,
  },
  {
    path: "/getUser",
    method: "post",
    action: getUserHandler,
  },
  {
    path: "/followUser",
    method: "post",
    action: followUserHandler,
  },
  {
    path: "/unFollowUser",
    method: "post",
    action: unFollowUserHandler,
  },
  // {
  //   path: "/createPost",
  //   method: "post",
  //   action: createPostHandler,
  // },
  {
    path: "/createPostAndHashtag",
    method: "post",
    action: createPostAndHashtagHandler,
  },
  {
    path: "/getPost",
    method: "post",
    action: getPostHandler,
  },
  {
    path: "/getHashtag",
    method: "post",
    action: getHashtagHandler,
  },
  {
    path: "/getPostByHashtag",
    method: "post",
    action: getPostByHashtagHandler,
  },
  {
    path: "/replyPost",
    method: "post",
    action: replyPostHandler,
  },
  {
    path: "/directMessage",
    method: "post",
    action: directMessageHandler,
  },
];
