import {
  createTaskHandler,
  createTasksHandler,
  getTasksHandler,
  updateTaskStatusHandler,
} from "./todoList/todoList.handlers";
import {
  functionAddHandler,
  functionHelloAtHandler,
  functionHelloSumHandler,
  functionHelloMultiplyHandler,
  functionHelloReduceHandler,
  functionHelloOrderHandler,
} from "./refactorApi";
import {
  getTeachersByAgeHandler,
  getTeachersByNameHandler,
  getTeachersHandler,
} from "./sql";

export const AppRoutes = [
  {
    path: "/todolist/createTask",
    method: "post",
    action: createTaskHandler,
  },
  {
    path: "/todolist/createTasks",
    method: "post",
    action: createTasksHandler,
  },
  {
    path: "/todolist/getTasks",
    method: "post",
    action: getTasksHandler,
  },
  {
    path: "/todolist/updateTaskStatus",
    method: "post",
    action: updateTaskStatusHandler,
  },
  {
    path: "/function/add",
    method: "post",
    action: functionAddHandler,
  },
  {
    path: "/function/helloAt",
    method: "post",
    action: functionHelloAtHandler,
  },
  {
    path: "/function/helloSum",
    method: "post",
    action: functionHelloSumHandler,
  },
  {
    path: "/function/helloMultiply",
    method: "post",
    action: functionHelloMultiplyHandler,
  },
  {
    path: "/function/helloReduce",
    method: "post",
    action: functionHelloReduceHandler,
  },
  {
    path: "/function/helloOrder",
    method: "post",
    action: functionHelloOrderHandler,
  },
  {
    path: "/sql/getTeachers",
    method: "get",
    action: getTeachersHandler,
  },
  {
    path: "/sql/getTeachersByAge",
    method: "get",
    action: getTeachersByAgeHandler,
  },
  {
    path: "/sql/getTeachersByName",
    method: "get",
    action: getTeachersByNameHandler,
  },
];
