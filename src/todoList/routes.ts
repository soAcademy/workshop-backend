import { createTaskHandler } from "./todoList.handlers";

export const AppRoutes = [
  {
    path: "/todolist/createTask",
    method: "post",
    action: createTaskHandler,
  },
];
