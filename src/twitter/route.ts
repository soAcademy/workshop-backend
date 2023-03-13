import {
  CreateUserPostHandler,
  GetHashtagsHandler,
  GetPostByHashtagHandler,
  GetPostByUserHandler,
  GetUserProfileHandler,
} from "./twitter.handler";

export const AppRoutes = [
  {
    path: "/twitter/getUserProfile",
    method: "post",
    action: GetUserProfileHandler,
  },
  {
    path: "/twitter/createUserPost",
    method: "post",
    action: CreateUserPostHandler,
  },
  {
    path: "/twitter/getHashtags",
    method: "post",
    action: GetHashtagsHandler,
  },
  {
    path: "/twitter/getPostByHashtag",
    method: "post",
    action: GetPostByHashtagHandler,
  },
  {
    path: "/twitter/getPostByUser",
    method: "post",
    action: GetPostByUserHandler,
  },
];
