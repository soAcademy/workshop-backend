import { createPostHandler, createTWFollowHandler, createTWUsersHandler, getPostByHashtagHandler, getUserProfileHandler } from "./twitter.handler";

export const AppRoutes = [
  {
    path: "/createTWUsers",
    method: "post",
    action: createTWUsersHandler
  },
  {
    path: "/createTWFollow",
    method: "post",
    action: createTWFollowHandler
  },
  {
    path: "/getUserProfile",
    method: "post",
    action: getUserProfileHandler
  },
  {
    path: "/createPost",
    method: "post",
    action: createPostHandler
  },
  {
    path: "/getPostByHashtag",
    method: "post",
    action: getPostByHashtagHandler
  }
]