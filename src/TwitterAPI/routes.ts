import {
  createTweetHandler,
  createUserHandler,
  followHandler,
  getHashtagsHandler,
  getTweetsByHashtagsHandler,
  getTweetsByUserHandler,
  getUserProfileHandler,
  likeTweetHandler,
  replyTweetHandler,
  sendDirectMessageHandler,
  unFollowHandler,
  unlikeTweetHandler,
  updateUserProfilePictureHandler,
} from "./handler";

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
    action: unFollowHandler,
  },
  {
    method: "post",
    path: "/twitter/createTweet",
    action: createTweetHandler,
  },
  {
    method: "post",
    path: "/twitter/getHashtags",
    action: getHashtagsHandler,
  },
  {
    method: "post",
    path: "/twitter/getTweetsByHashtags",
    action: getTweetsByHashtagsHandler,
  },
  {
    method: "post",
    path: "/twitter/getTweetsByUser",
    action: getTweetsByUserHandler,
  },
  {
    method: "post",
    path: "/twitter/replyTweet",
    action: replyTweetHandler,
  },
  {
    method: "post",
    path: "/twitter/likeTweet",
    action: likeTweetHandler,
  },
  {
    method: "post",
    path: "/twitter/unlikeTweet",
    action: unlikeTweetHandler,
  },
  {
    method: "post",
    path: "/twitter/updateUserProfilePicture",
    action: updateUserProfilePictureHandler,
  },
  {
    method: "post",
    path: "/twitter/sendDirectMessage",
    action: sendDirectMessageHandler,
  },
];
