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
import {
  createCategoryHandler,
  createMenuHandler,
  createOrderHandler,
  deleteMenuHandler,
  getCategoriesHandler,
  getMenusHandler,
  getOrderHandler,
  getOrdersHandler,
  updateCategoryHandler,
  updateMenuHandler,
  updateOrderHandler,
} from "./korKitchen/korKitchen.handler";
import {
  createQuizCategoryHandler,
  createQuizHandler,
  createRoundHandler,
  createUserHandler,
  getQuizHandler,
  getResultsHandler,
  submitQuizHandler,
  // submitQuizHandler,
} from "./Trivia/trivia.handler";
import {
  createTWFollowHandler,
  createTWUsersHandler,
} from "./twitterApi/twitter.handler";

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
    path: "/getMenus",
    method: "post",
    action: getMenusHandler,
  },
  {
    path: "/updateMenu",
    method: "post",
    action: updateMenuHandler,
  },
  {
    path: "/createOrder",
    method: "post",
    action: createOrderHandler,
  },
  {
    path: "/getOrder",
    method: "post",
    action: getOrderHandler,
  },
  {
    path: "/getOrders",
    method: "post",
    action: getOrdersHandler,
  },
  {
    path: "/updateOrder",
    method: "post",
    action: updateOrderHandler,
  },
  {
    path: "/deleteMenu",
    method: "post",
    action: deleteMenuHandler,
  },
  {
    path: "/createQuizCategory",
    method: "post",
    action: createQuizCategoryHandler,
  },
  {
    path: "/createQuiz",
    method: "post",
    action: createQuizHandler,
  },
  {
    path: "/getQuiz",
    method: "post",
    action: getQuizHandler,
  },
  {
    path: "/submitQuiz",
    method: "post",
    action: submitQuizHandler,
  },
  {
    path: "/createUser",
    method: "post",
    action: createUserHandler,
  },
  {
    path: "/createRound",
    method: "post",
    action: createRoundHandler,
  },
  {
    path: "/getResults",
    method: "post",
    action: getResultsHandler,
  },
  {
    path: "/createTWUsers",
    method: "post",
    action: createTWUsersHandler,
  },
  {
    path: "/createTWFollow",
    method: "post",
    action: createTWFollowHandler,
  },
];
