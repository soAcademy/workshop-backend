import { createUserHandler, followHandler, getUserProfileHandler, unFollowingHandler } from "./handler";

export const TwitterRoutes = [
  {
    method: "post",
    path: "/twitter/createUser",
    action: createUserHandler,
  },
  {
    method: "post",
    path: "/twitter/getUserProfile",
    action: getUserProfileHandler,
  },
  {
    method: "post",
    path: "/twitter/follow",
    action: followHandler,
  },
  {
    method: "post",
    path: "/twitter/unfollow",
    action: unFollowingHandler,
  },
]
