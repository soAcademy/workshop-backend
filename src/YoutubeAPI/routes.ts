import { addChannelAdminHandler, addCommentHandler, addReactionHandler, createChannelHandler, createChannelLevelHandler, createUserHandler, deleteChannelLevelHandler, deleteVideoHandler, postVideoHandler, removeCommentHandler, removeReactionHandler, subscribeHandler, unsubscribeHandler, updateChannelAdminHandler, updateChannelInfoHandler, updateChannelLevelHandler, updateUserHandler, updateVideoHandler } from "./handler";

export const YoutubeRoutes = [
  {
    method: "post",
    path: "/youtube/createUser",
    action: createUserHandler,
  },
  {
    method: "post",
    path: "/youtube/updateUser",
    action: updateUserHandler,
  },
  {
    method: "post",
    path: "/youtube/createChannel",
    action: createChannelHandler,
  },
  {
    method: "post",
    path: "/youtube/updateChannelInfo",
    action: updateChannelInfoHandler,
  },
  {
    method: "post",
    path: "/youtube/addChannelAdmin",
    action: addChannelAdminHandler,
  },
  {
    method: "post",
    path: "/youtube/updateChannelAdmin",
    action: updateChannelAdminHandler,
  },
  {
    method: "post",
    path: "/youtube/subscribe",
    action: subscribeHandler,
  },
  {
    method: "post",
    path: "/youtube/unsubscribe",
    action: unsubscribeHandler,
  },
  {
    method: "post",
    path: "/youtube/postVideo",
    action: postVideoHandler,
  },
  {
    method: "post",
    path: "/youtube/updateVideo",
    action: updateVideoHandler,
  },
  {
    method: "post",
    path: "/youtube/deleteVideo",
    action: deleteVideoHandler,
  },
  {
    method: "post",
    path: "/youtube/addReaction",
    action: addReactionHandler,
  },
  {
    method: "post",
    path: "/youtube/removeReaction",
    action: removeReactionHandler,
  },
  {
    method: "post",
    path: "/youtube/addComment",
    action: addCommentHandler,
  },
  {
    method: "post",
    path: "/youtube/removeComment",
    action: removeCommentHandler,
  },
  {
    method: "post",
    path: "/youtube/createChannelLevel",
    action: createChannelLevelHandler,
  },
  {
    method: "post",
    path: "/youtube/updateChannelLevel",
    action: updateChannelLevelHandler,
  },
  {
    method: "post",
    path: "/youtube/deleteChannelLevel",
    action: deleteChannelLevelHandler,
  },
];
