import {
  createManyTasksHandler,
  createTaskHandler,
  deleteManyTaskHandler,
  deleteTaskHandler,
  findUniqueTaskHandler,
  getTasksHandler,
  updateManyTaskStatusesHandler,
  updateTaskStatusHandler,
} from "./todoList.handler";

export const AppRoutes = [
  {
    path: "/createTask",
    method: "post",
    action: createTaskHandler,
  },
  {
    path: "/getTask",
    method: "post",
    action: getTasksHandler,
  },
  {
    path: "/updateTaskStatus",
    method: "post",
    action: updateTaskStatusHandler,
  },
  {
    path: "/createManyTasks",
    method: "post",
    action: createManyTasksHandler,
  },
  {
    path: "/updateManyTaskStatuses",
    method: "post",
    action: updateManyTaskStatusesHandler,
  },
  {
    path: "/findUniqueTask",
    method: "post",
    action: findUniqueTaskHandler,
  },
  {
    path: "/deleteTask",
    method: "post",
    action: deleteTaskHandler,
  },
  {
    path: "/deleteManyTask",
    method: "post",
    action: deleteManyTaskHandler,
  }
]