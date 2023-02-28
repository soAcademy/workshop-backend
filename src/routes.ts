import {
  functionAddHandler,
  functionHelloAtHandler,
  functionHelloMultiplyHandler,
  functionHelloSumHandler,
} from "./refactorApi/handler";
import {
  getCoursesHandler,
  getCoursesWithJoinHandler,
  getTeachersByAgeHandler,
  getTeachersByNameHandler,
  getTeachersHandler,
  createTeacherHandler,
  updateTeacherHandler,
  deleteTeacherHandler,
} from "./sql";
import { createManyTasksHandler, createTaskHandler, getTasksHandler, updateManyTasksHandler, updateTaskHandler } from "./todoList";
export const AppRoutes = [
  {
    path: "/function/add",
    method: "post",
    action: functionAddHandler,
  },
  {
    path: "/function/helloMultiply",
    method: "post",
    action: functionHelloMultiplyHandler,
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
    path: "/getTeachers",
    method: "post",
    action: getTeachersHandler,
  },
  {
    path: "/getTeachersByAge",
    method: "post",
    action: getTeachersByAgeHandler,
  },
  {
    path: "/getTeachersByName",
    method: "post",
    action: getTeachersByNameHandler,
  },
  {
    path: "/getCourses",
    method: "post",
    action: getCoursesHandler,
  },
  {
    path: "/getCoursesWithJoin",
    method: "post",
    action: getCoursesWithJoinHandler,
  },
  {
    path: "/createTeacher",
    method: "post",
    action: createTeacherHandler,
  },
  {
    path: "/updateTeacher",
    method: "post",
    action: updateTeacherHandler,
  },
  {
    path: "/deleteTeacher",
    method: "post",
    action: deleteTeacherHandler,
  },
  {
    path: "/todoList/createTask",
    method: "post",
    action: createTaskHandler,
  },
  {
    path: "/todoList/getTasks",
    method: "post",
    action: getTasksHandler,
  },
  {
    path: "/todoList/updateTask",
    method: "post",
    action: updateTaskHandler,
  },
  {
    path: "/todoList/createManyTasks",
    method: "post",
    action: createManyTasksHandler,
  },
  {
    path: "/todoList/updateManyTasks",
    method: "post",
    action: updateManyTasksHandler,
  },
];
