import { addChannelAdminHandler, addCommentHandler, addReactionHandler, createChannelHandler, createChannelLevelHandler, createUserHandler, deleteChannelLevelHandler, deleteVideoHandler, postVideoHandler, removeCommentHandler, removeReactionHandler, subscribeHandler, unsubscribeHandler, updateChannelAdminHandler, updateChannelInfoHandler, updateChannelLevelHandler, updateUserHandler, updateVideoHandler } from "./handler";

export const YoutubeRoutes = [
  {
    method: "post",
    path: "/twitter/createUser",
    action: createUserHandler,
  },
  {
    method: "post",
    path: "/twitter/updateUser",
    action: updateUserHandler,
  },
  {
    method: "post",
    path: "/twitter/createChannel",
    action: createChannelHandler,
  },
  {
    method: "post",
    path: "/twitter/updateChannelInfo",
    action: updateChannelInfoHandler,
  },
  {
    method: "post",
    path: "/twitter/addChannelAdmin",
    action: addChannelAdminHandler,
  },
  {
    method: "post",
    path: "/twitter/updateChannelAdmin",
    action: updateChannelAdminHandler,
  },
  {
    method: "post",
    path: "/twitter/subscribe",
    action: subscribeHandler,
  },
  {
    method: "post",
    path: "/twitter/unsubscribe",
    action: unsubscribeHandler,
  },
  {
    method: "post",
    path: "/twitter/postVideo",
    action: postVideoHandler,
  },
  {
    method: "post",
    path: "/twitter/updateVideo",
    action: updateVideoHandler,
  },
  {
    method: "post",
    path: "/twitter/deleteVideo",
    action: deleteVideoHandler,
  },
  {
    method: "post",
    path: "/twitter/addReaction",
    action: addReactionHandler,
  },
  {
    method: "post",
    path: "/twitter/removeReaction",
    action: removeReactionHandler,
  },
  {
    method: "post",
    path: "/twitter/addComment",
    action: addCommentHandler,
  },
  {
    method: "post",
    path: "/twitter/removeComment",
    action: removeCommentHandler,
  },
  {
    method: "post",
    path: "/twitter/createChannelLevel",
    action: createChannelLevelHandler,
  },
  {
    method: "post",
    path: "/twitter/updateChannelLevel",
    action: updateChannelLevelHandler,
  },
  {
    method: "post",
    path: "/twitter/deleteChannelLevel",
    action: deleteChannelLevelHandler,
  },
];
