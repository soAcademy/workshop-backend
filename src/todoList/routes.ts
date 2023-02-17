import { createTaskHandler, getTasksHandler, updateTaskHandler } from "./todoList.handler";

export const AppRoutes = [
  {
    path: "/todolist/createTask",
    method: "post",
    action: createTaskHandler,
  },
  {
    path: "/todolist/getTasks",
    method: "post",
    action: getTasksHandler,
  },
  {
    path: "/todolist/updateTask",
    method: "post",
    action: updateTaskHandler,
  },
];
