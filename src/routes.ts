import {
  createQuizCategoryHandler,
  createQuizHandler,
  getCorrectChoiceByQuizHandler,
  getQuizCategoriesHandler,
  getQuizzesByCategoryHandler,
  getQuizzesHandler,
  getRandomizedQuizzesByCategoryHandler,
} from "./binQuiz/binQuiz.handlers";
import {
  createCategoryHandler,
  getCategoriesHandler,
  createMenuHandler,
  getMenusHandler,
  createOrderHandler,
  getOrdersHandler,
  getOrdersByTableHandler,
  updateOrderStatusHandler,
} from "./binKitchen/binKitchen.handlers";
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
import { getUserProfileHandler } from "./twitter/twitter.handlers";

export const AppRoutes = [
  {
    path: "/twitter/user/:id",
    method: "get",
    action: getUserProfileHandler,
  },
  {
    path: "/binQuiz/createCategory",
    method: "post",
    action: createQuizCategoryHandler,
  },
  {
    path: "/binQuiz/getCategories",
    method: "post",
    action: getQuizCategoriesHandler,
  },
  {
    path: "/binQuiz/createQuiz",
    method: "post",
    action: createQuizHandler,
  },
  {
    path: "/binQuiz/getQuizzes",
    method: "post",
    action: getQuizzesHandler,
  },
  {
    path: "/binQuiz/getQuizzesByCategory",
    method: "post",
    action: getQuizzesByCategoryHandler,
  },
  {
    path: "/binQuiz/getRandomizedQuizzesByCategory",
    method: "post",
    action: getRandomizedQuizzesByCategoryHandler,
  },
  {
    path: "/binQuiz/getCorrectChoiceByQuiz",
    method: "post",
    action: getCorrectChoiceByQuizHandler,
  },
  {
    path: "/binKitchen/create-category",
    method: "post",
    action: createCategoryHandler,
  },
  {
    path: "/binKitchen/get-categories",
    method: "post",
    action: getCategoriesHandler,
  },
  {
    path: "/binKitchen/create-menu",
    method: "post",
    action: createMenuHandler,
  },
  {
    path: "/binKitchen/get-menus",
    method: "post",
    action: getMenusHandler,
  },
  {
    path: "/binKitchen/create-order",
    method: "post",
    action: createOrderHandler,
  },
  {
    path: "/binKitchen/get-orders",
    method: "post",
    action: getOrdersHandler,
  },
  {
    path: "/binKitchen/get-orders-by-table",
    method: "post",
    action: getOrdersByTableHandler,
  },
  {
    path: "/binKitchen/update-order-status",
    method: "post",
    action: updateOrderStatusHandler,
  },
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
