import {
  CreateUserHandler,
  CreateUserPostHandler,
  GetSumHashtagsHandler,
  GetPostByHashtagHandler,
  GetPostByUserHandler,
  GetPostsHandler,
  GetUserProfileHandler,
  GetUsersHandler,
  GetHashtagsHandler,
  GetPostByIdHandler,
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
    path: "/twitter/getSumHashtags",
    method: "post",
    action: GetSumHashtagsHandler,
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
  {
    path: "/twitter/getPosts",
    method: "post",
    action: GetPostsHandler,
  },
  {
    path: "/twitter/getPostById",
    method: "post",
    action: GetPostByIdHandler,
  },
  {
    path: "/twitter/getUsers",
    method: "post",
    action: GetUsersHandler,
  },
  {
    path: "/twitter/createUser",
    method: "post",
    action: CreateUserHandler,
  },
];
