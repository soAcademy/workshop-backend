import {
  getTeachersHandler,
  getTeachersByAgeHandler,
  getTeachersByNameHandler,
  getCoursesHandler,
  getCoursesWithJoinHandler,
  createTeacherHandler,
  updateTeacherHandler,
  deleteTeacherHandler,
} from "./sql";
import {
  functionAddHandler,
  functionHelloAtHandler,
  functionHelloMultiplyHandler,
  functionHelloOrderHandler,
  functionHelloReduceHandler,
  functionHelloSumHandler,
} from "./refactorApi";
import {
  createManyTasksHandler,
  createTaskHandler,
  deleteManyTaskHandler,
  deleteTaskHandler,
  findUniqueTaskHandler,
  getTasksHandler,
  updateManyTaskStatusesHandler,
  updateTaskStatusHandler,
} from "./todoList";
import { createCategoryHandler, createMenuHandler, getCategoriesHandler, getMenusHandler, updateCategoryHandler } from "./korKitchen/korKitchen.handler";

export const AppRoutes = [
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
  },
  {
    path: "/createCategory",
    method: "post",
    action: createCategoryHandler,
  },
  {
    path: "/getCategories",
    method: "post",
    action: getCategoriesHandler,
  },
  {
    path: "/createMenu",
    method: "post",
    action: createMenuHandler,
  },
  {
    path: "/updateCategory",
    method: "post",
    action: updateCategoryHandler,
  },
  {
    path: "/getMenu",
    method: "post",
    action: getMenusHandler,
  }
];
