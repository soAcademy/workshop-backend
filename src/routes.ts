import {
  createCategoryHandler,
  createManyMenusHandler,
  createMenuHandler,
  getCategoriesHandler,
} from "./binKitchen/binKitchen.handler";
import {
  functionAddHandler,
  functionHelloMultiplyHandler,
} from "./refactorApi";

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
  createManyTasksHandler,
  createTaskHandler,
  deleteTaskStatusHandler,
  findUniqueOrThrowHandler,
  getTasksHandler,
  updateManyTasksByStatusHandler,
  updateTaskStatusHandler,
} from "./todoList/todoList.handler";

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
  // ToDOList
  {
    path: "/createTask",
    method: "post",
    action: createTaskHandler,
  },
  {
    path: "/getTasks",
    method: "post",
    action: getTasksHandler,
  },
  {
    path: "/createManyTasks",
    method: "post",
    action: createManyTasksHandler,
  },
  {
    path: "/updateTaskStatus",
    method: "post",
    action: updateTaskStatusHandler,
  },
  {
    path: "/updateManyTasksByStatus",
    method: "post",
    action: updateManyTasksByStatusHandler,
  },
  {
    path: "/deleteTaskStatus",
    method: "post",
    action: deleteTaskStatusHandler,
  },
  {
    path: "/findUniqueOrThrow",
    method: "post",
    action: findUniqueOrThrowHandler,
  },
  // BinKitchen
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
    path: "/createManyMenus",
    method: "post",
    action: createManyMenusHandler,
  },
];
