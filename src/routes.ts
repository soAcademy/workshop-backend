import { createCategoryHandler, createManyMenusHandler, createMenuHandler, createOrderHandler, getCategoriesHandler, getMenuHandler, getManyOrdersHandler, updateCategoryHandler, updateMenuHandler, getOrderHandler, updateOrderHandler } from "./binKitchen/binKitchen.handler";
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
import { createManyTasksHandler, createTaskHandler, deleteManyTasksHandler, deleteTaskHandler, findUniqueOrThrowTaskHandler, findUniqueTaskHandler, getTasksHandler, updateManyTasksHandler, updateTaskHandler } from "./todoList";
import { createManyQuizzesHandler, createQuizCategoryHandler, createQuizHandler, getQuizHandler, getResultsHandler, submitQuizHandler } from "./trivia/trivia.handler";
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
  {
    path: "/todoList/findUniqueTask",
    method: "post",
    action: findUniqueTaskHandler,
  },
  {
    path: "/todoList/findUniqueOrThrowTask",
    method: "post",
    action: findUniqueOrThrowTaskHandler,
  },
  {
    path: "/todoList/deleteTask",
    method: "post",
    action: deleteTaskHandler,
  },
  {
    path: "/todoList/deleteManyTasks",
    method: "post",
    action: deleteManyTasksHandler,
  },
  {
    path: "/todoList/deleteManyTasks",
    method: "post",
    action: deleteManyTasksHandler,
  },
  {
    path: "/binKitchen/createCategory",
    method: "post",
    action: createCategoryHandler,
  },
  {
    path: "/binKitchen/getCategories",
    method: "post",
    action: getCategoriesHandler,
  },
  {
    path: "/binKitchen/updateCategory",
    method: "post",
    action: updateCategoryHandler,
  },
  {
    path: "/binKitchen/createMenu",
    method: "post",
    action: createMenuHandler,
  },
  {
    path: "/binKitchen/createMenu",
    method: "post",
    action: createMenuHandler,
  },
  {
    path: "/binKitchen/createManyMenus",
    method: "post",
    action: createManyMenusHandler,
  },
  {
    path: "/binKitchen/getMenu",
    method: "post",
    action: getMenuHandler,
  },
  {
    path: "/binKitchen/updateMenu",
    method: "post",
    action: updateMenuHandler,
  },
  {
    path: "/binKitchen/createOrder",
    method: "post",
    action: createOrderHandler,
  },
  {
    path: "/binKitchen/getManyOrders",
    method: "post",
    action: getManyOrdersHandler,
  },
  {
    path: "/binKitchen/getOrder",
    method: "post",
    action: getOrderHandler,
  },
  {
    path: "/binKitchen/updateOrder",
    method: "post",
    action: updateOrderHandler,
  },
  {
    path: "/trivia/createQuizCategory",
    method: "post",
    action: createQuizCategoryHandler,
  },
  {
    path: "/trivia/createQuiz",
    method: "post",
    action: createQuizHandler,
  },
  {
    path: "/trivia/getQuiz",
    method: "post",
    action: getQuizHandler,
  },
  {
    path: "/trivia/submitQuiz",
    method: "post",
    action: submitQuizHandler,
  },
  {
    path: "/trivia/getResults",
    method: "post",
    action: getResultsHandler,
  },
  {
    path: "/trivia/createManyQuizzes",
    method: "post",
    action: createManyQuizzesHandler,
  },
];
