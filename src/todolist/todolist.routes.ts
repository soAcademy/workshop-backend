import {
  createManyTasksHandler,
  createTaskHandler,
  deleteDoneTasksHandler,
  deleteTaskHandler,
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
    path: "/createManyTasks",
    action: createManyTasksHandler,
  },
  {
    method: "post",
    path: "/getTasks",
    action: getTasksHandler,
  },
  // {
  //   method: "post",
  //   path: "/updateTask",
  //   action: updateTaskHandler,
  // },
  // {
  //   method: "post",
  //   path: "/deleteTask",
  //   action: deleteTaskHandler,
  // },
  // {
  //   method: "post",
  //   path: "/deleteDoneTasks",
  //   action: deleteDoneTasksHandler,
  // },
];
