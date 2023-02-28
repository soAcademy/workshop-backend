import {
  createTaskHandler,
  getTasksHandler,
  updateTaskHandler,
} from "./todolist.handler";

export const TodolistRoutes = [
  {
    method: "post",
    path: "/createTask",
    action: createTaskHandler,
  },
  {
    method: "post",
    path: "/getTasks",
    action: getTasksHandler,
  },
  {
    method: "post",
    path: "/updateTask",
    action: updateTaskHandler,
  },
];
