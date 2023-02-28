import {
  createTaskHandler,
  createTaskManyHandler,
  deleteIdHandler,
  getTaskUniqueHandler,
  getTasksHandler,
  getUniqueOrThrowHandler,
  updateManyHandler,
  updateTaskHandler,
} from "./todoList.handler";

export const AppRoutes = [
  {
    path: "/todoList/createTask",
    method: "post",
    action: createTaskHandler,
  },
  {
    path: "/todoList/createTaskMany",
    method: "post",
    action: createTaskManyHandler,
  },
  {
    path: "/todoList/getTasks",
    method: "post",
    action: getTasksHandler,
  },
  {
    path: "/todoList/getTaskUnique",
    method: "post",
    action: getTaskUniqueHandler,
  },
  {
    path: "/todoList/getUniqueOrThrow",
    method: "post",
    action: getUniqueOrThrowHandler,
  },
  {
    path: "/todoList/updateTask",
    method: "post",
    action: updateTaskHandler,
  },
  {
    path: "/todoList/updateMany",
    method: "post",
    action: updateManyHandler,
  },
  {
    path: "/todoList/deleteId",
    method: "post",
    action: deleteIdHandler,
  },
];
