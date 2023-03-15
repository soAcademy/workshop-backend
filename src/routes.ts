import {
  createCategoryHandler,
  createMenuHandler,
  createOrderHandler,
  getCategoryHandler,
  getMenuHandler,
  getOrderHandler,
  getOrdersHandler,
  updateCategoryHandler,
  updateMenuHandler,
  updateOrderHandler,
} from "./binKitchen";
import {
  functionAddHandler,
  functionHelloAtHandler,
  functionHelloMultipyHandler,
  functionHelloOrderHandler,
  functionHelloReduceHandler,
  functionHelloSumHandler,
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
  deleteManyTasksHandler,
  deleteTasksHandler,
  getTasksHandler,
  getUniqueTaskHandler,
  updateManyTasksHandler,
  updateTaskStatusHandler,
} from "./todoList";
import {
  createCategoryTriviaHandler,
  createQuizTriviaHandler,
  getCategoryTriviaHandler,
  getQuizTriviaHandler,
  getResultsTriviaHandler,
  submitQuizTriviaHandler,
  updateQuizTriviaHandler,
} from "./triviaQuizApi";
import {
  clickFollowTwitterHandler,
  createPostTwitterHandler,
  createReplyTwitterHandler,
  createUserTwitterHandler,
  getHashtagTwitterHandler,
  getPostByHashtagTwitterHandler,
  getPostByUserTwitterHandler,
  getUserTwitterHandler,
  sendDirectMsgTwitterHandler,
} from "./twitterApi";

export const AppRoutes = [
  {
    path: "/function/add",
    method: "post",
    action: functionAddHandler,
  },
  {
    path: "/function/helloMultipy",
    method: "post",
    action: functionHelloMultipyHandler,
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
    path: "/function/getTeachers",
    method: "post",
    action: getTeachersHandler,
  },
  {
    path: "/function/getTeachersByAge",
    method: "post",
    action: getTeachersByAgeHandler,
  },
  {
    path: "/function/getTeachersByName",
    method: "post",
    action: getTeachersByNameHandler,
  },
  {
    path: "/function/getCourses",
    method: "post",
    action: getCoursesHandler,
  },
  {
    path: "/function/getCoursesWithJoin",
    method: "post",
    action: getCoursesWithJoinHandler,
  },
  {
    path: "/function/createTeacher",
    method: "post",
    action: createTeacherHandler,
  },
  {
    path: "/function/updateTeacher",
    method: "post",
    action: updateTeacherHandler,
  },
  {
    path: "/function/deleteTeacher",
    method: "post",
    action: deleteTeacherHandler,
  },
  {
    path: "/function/createTask",
    method: "post",
    action: createTaskHandler,
  },
  {
    path: "/function/updateTaskStatus",
    method: "post",
    action: updateTaskStatusHandler,
  },
  {
    path: "/function/getTasks",
    method: "post",
    action: getTasksHandler,
  },
  {
    path: "/function/getUniqueTask",
    method: "post",
    action: getUniqueTaskHandler,
  },
  {
    path: "/function/createManyTasks",
    method: "post",
    action: createManyTasksHandler,
  },
  {
    path: "/function/updateManyTasks",
    method: "post",
    action: updateManyTasksHandler,
  },
  {
    path: "/function/deleteTasks",
    method: "post",
    action: deleteTasksHandler,
  },
  {
    path: "/function/deleteManyTasks",
    method: "post",
    action: deleteManyTasksHandler,
  },
  {
    path: "/function/createCategory",
    method: "post",
    action: createCategoryHandler,
  },
  {
    path: "/function/getCategory",
    method: "post",
    action: getCategoryHandler,
  },
  {
    path: "/function/createMenu",
    method: "post",
    action: createMenuHandler,
  },
  {
    path: "/function/updateCategory",
    method: "post",
    action: updateCategoryHandler,
  },
  {
    path: "/function/getMenu",
    method: "post",
    action: getMenuHandler,
  },
  {
    path: "/function/updateMenu",
    method: "post",
    action: updateMenuHandler,
  },
  {
    path: "/function/createOrder",
    method: "post",
    action: createOrderHandler,
  },
  {
    path: "/function/getOrders",
    method: "post",
    action: getOrdersHandler,
  },
  {
    path: "/function/getOrder",
    method: "post",
    action: getOrderHandler,
  },
  {
    path: "/function/updateOrder",
    method: "post",
    action: updateOrderHandler,
  },
  {
    path: "/function/createCategoryTrivia",
    method: "post",
    action: createCategoryTriviaHandler,
  },
  {
    path: "/function/getCategoryTrivia",
    method: "post",
    action: getCategoryTriviaHandler,
  },
  {
    path: "/function/createQuizTrivia",
    method: "post",
    action: createQuizTriviaHandler,
  },
  {
    path: "/function/getQuizTrivia",
    method: "post",
    action: getQuizTriviaHandler,
  },
  {
    path: "/function/submitQuizTrivia",
    method: "post",
    action: submitQuizTriviaHandler,
  },
  {
    path: "/function/getResultsTrivia",
    method: "post",
    action: getResultsTriviaHandler,
  },
  {
    path: "/function/updateQuizTrivia",
    method: "post",
    action: updateQuizTriviaHandler,
  },
  {
    path: "/function/getUserTwitter",
    method: "post",
    action: getUserTwitterHandler,
  },
  {
    path: "/function/createUserTwitter",
    method: "post",
    action: createUserTwitterHandler,
  },
  {
    path: "/function/clickFollowTwitter",
    method: "post",
    action: clickFollowTwitterHandler,
  },
  {
    path: "/function/createPostTwitter",
    method: "post",
    action: createPostTwitterHandler,
  },
  {
    path: "/function/sendDirectMsgTwitter",
    method: "post",
    action: sendDirectMsgTwitterHandler,
  },
  {
    path: "/function/getHashtagTwitter",
    method: "post",
    action: getHashtagTwitterHandler,
  },
  {
    path: "/function/getPostByHashtagTwitter",
    method: "post",
    action: getPostByHashtagTwitterHandler,
  },
  {
    path: "/function/getPostByUserTwitter",
    method: "post",
    action: getPostByUserTwitterHandler,
  },
  {
    path: "/function/createReplyTwitter",
    method: "post",
    action: createReplyTwitterHandler,
  },
];
