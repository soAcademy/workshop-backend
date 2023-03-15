// import {
//   createCategoryHandler,
//   createMenuHandler,
//   createOrderHandler,
//   createOrderItemHandler,
//   getCategoriesHandler,
//   getMenuHandler,
//   getOrderHandler,
//   getOrdersHandler,
//   updateCategoryHandler,
//   updateMenuHandler,
//   updateOrderHandler,
// } from "./BinKitchen";
// import {
//   createCategoryHandler,
//   createQuizHandle,
//   createUserHandler,
//   getAllCategoryHandle,
//   getQuizbyCategoryHandle,
//   getResultHandler,
//   getStatisticHandler,
//   submitQuizHandler,
// } from "./QuestionQuiz";
import {
  createHashTagHandler,
  createReplyTwitterHandler,
  createTweetHandler,
  createTweetWithHashTagHandler,
  createUserTwitterHandler,
  deletePostTweetHandler,
  deleteReplyTweetHandler,
  deleteUserTweetHandler,
  getHashtagsTwitterHandler,
  getPostByHashtagTwitterHandler,
  getPostByUserTwitterHandler,
  getUserProfileTwitterHandler,
} from "./Twitter/Twitter.handler";
import {
  functionHelloAtHandler,
  functionHelloSumHandler,
  functionMultiplyHandler,
  functionReduceHandler,
} from "./refactorAPI";
import {
  createTeacherHandler,
  deleteTeacherHandler,
  getCoursesHandler,
  getCoursesWithJoinHandler,
  getTeachersByAgeHandler,
  getTeachersByNameHandler,
  getTeachersHandler,
  setSecretFromOtherServer,
  updateTeacherHandler,
} from "./sqlWorkshop/handler/index";
// import {
//   createTaskOneHandler,
//   createTasksHandler,
//   deleteTaskHandler,
//   findUniqueHandler,
//   getTaskUniqueOrThrowHandler,
//   getTasksHandler,
//   updateTaskHandler,
//   updateTaskOneHandler,
// } from "./todoList/todoList.handler";

export const AppRoutes = [
  {
    path: "/function/add",
    method: "post",
    action: functionMultiplyHandler,
  },
  {
    path: "/function/helloAt",
    method: "post",
    action: functionHelloAtHandler,
  },
  {
    path: "/function/helloMultiply",
    method: "post",
    action: functionMultiplyHandler,
  },
  {
    path: "/function/helloReduce",
    method: "post",
    action: functionReduceHandler,
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
    path: "/getTeachersByAgeHandler",
    method: "post",
    action: getTeachersByAgeHandler,
  },
  {
    path: "/getTeachersByAgeHandler",
    method: "post",
    action: getTeachersByAgeHandler,
  },
  {
    path: "/getTeachersByNameHandler",
    method: "post",
    action: getTeachersByNameHandler,
  },
  {
    path: "/getCoursesHandler",
    method: "post",
    action: getCoursesHandler,
  },
  {
    path: "/getCoursesWithJoinHandler",
    method: "post",
    action: getCoursesWithJoinHandler,
  },
  {
    path: "/createTeacherHandler",
    method: "post",
    action: createTeacherHandler,
  },
  {
    path: "/updateTeacherHandler",
    method: "post",
    action: updateTeacherHandler,
  },
  {
    path: "/updateTeacherHandler",
    method: "post",
    action: updateTeacherHandler,
  },
  {
    path: "/deleteTeacherHandler",
    method: "post",
    action: deleteTeacherHandler,
  },
  //------ secret message from boeing --------
  {
    path: "/setSecretFromOtherServer",
    method: "get",
    action: setSecretFromOtherServer,
  },
  //------ secret message from boeing --------

  //------ todolist --------
  // {
  //   path: "/todolist/createTask",
  //   method: "post",
  //   action: createTasksHandler,
  // },
  // {
  //   path: "/todolist/createTaskOne",
  //   method: "post",
  //   action: createTaskOneHandler,
  // },
  // {
  //   path: "/todolist/getTasks",
  //   method: "post",
  //   action: getTasksHandler,
  // },
  // {
  //   path: "/todoList/updateTask",
  //   method: "post",
  //   action: updateTaskHandler,
  // },
  // {
  //   path: "/todoList/updateTaskOne",
  //   method: "post",
  //   action: updateTaskOneHandler,
  // },
  // {
  //   path: "/todoList/deleteTask",
  //   method: "post",
  //   action: deleteTaskHandler,
  // },
  // {
  //   path: "/todoList/getTaskUnique",
  //   method: "post",
  //   action: findUniqueHandler,
  // },
  // {
  //   path: "/todoList/getTaskUniqueOrThrowHandler",
  //   method: "post",
  //   action: getTaskUniqueOrThrowHandler,
  // },

  //------ bin kitchen --------

  // {
  //   path: "/binkitchen/createCategory",
  //   method: "post",
  //   action: createCategoryHandler,
  // },
  // {
  //   path: "/binkitchen/getCategories",
  //   method: "post",
  //   action: getCategoriesHandler,
  // },
  // {
  //   path: "/binkitchen/createMenu",
  //   method: "post",
  //   action: createMenuHandler,
  // },
  // {
  //   path: "/binkitchen/createOrder",
  //   method: "post",
  //   action: createOrderHandler,
  // },
  // {
  //   path: "/binkitchen/createOrderItem",
  //   method: "post",
  //   action: createOrderItemHandler,
  // },
  // {
  //   path: "/binkitchen/updateOrder",
  //   method: "post",
  //   action: updateOrderHandler,
  // },
  // {
  //   path: "/binkitchen/getOrders",
  //   method: "post",
  //   action: getOrdersHandler,
  // },
  // {
  //   path: "/binkitchen/getOrder",
  //   method: "post",
  //   action: getOrderHandler,
  // },

  // {
  //   path: "/binkitchen/updateMenu",
  //   method: "post",
  //   action: updateMenuHandler,
  // },
  // {
  //   path: "/binkitchen/getMenus",
  //   method: "post",
  //   action: getMenuHandler,
  // },
  // {
  //   path: "/binkitchen/updateCategory",
  //   method: "post",
  //   action: updateCategoryHandler,
  // },

  //------------- questionquiz ----------------
  // {
  //   path: "/questionquiz/createCategory",
  //   method: "post",
  //   action: createCategoryHandler,
  // },
  // {
  //   path: "/questionquiz/getAllCategory",
  //   method: "post",
  //   action: getAllCategoryHandle,
  // },
  // {
  //   path: "/questionquiz/createQuiz",
  //   method: "post",
  //   action: createQuizHandle,
  // },
  // {
  //   path: "/questionquiz/getQuizbyCategory",
  //   method: "post",
  //   action: getQuizbyCategoryHandle,
  // },
  // {
  //   path: "/questionquiz/submitQuiz",
  //   method: "post",
  //   action: submitQuizHandler,
  // },
  // {
  //   path: "/questionquiz/getResult",
  //   method: "post",
  //   action: getResultHandler,
  // },
  // {
  //   path: "/questionquiz/createUser",
  //   method: "post",
  //   action: createUserHandler,
  // },
  // {
  //   path: "/questionquiz/getStatistic",
  //   method: "post",
  //   action: getStatisticHandler,
  // },
  //------------- twitter ----------------
  {
    path: "/twitter/createUserTwitter",
    method: "post",
    action: createUserTwitterHandler,
  },
  {
    path: "/twitter/getUserProfileTwitter",
    method: "post",
    action: getUserProfileTwitterHandler,
  },
  {
    path: "/twitter/createTweet",
    method: "post",
    action: createTweetHandler,
  },
  {
    path: "/twitter/getHashtagsTwitter",
    method: "post",
    action: getHashtagsTwitterHandler,
  },
  {
    path: "/twitter/getPostByHashtagTwitter",
    method: "post",
    action: getPostByHashtagTwitterHandler,
  },
  {
    path: "/twitter/getPostByUserTwitter",
    method: "post",
    action: getPostByUserTwitterHandler,
  },
  {
    path: "/twitter/createReplyTwitter",
    method: "post",
    action: createReplyTwitterHandler,
  },
  {
    path: "/twitter/deletePostTweet",
    method: "post",
    action: deletePostTweetHandler,
  },
  {
    path: "/twitter/deleteReplyTweet",
    method: "post",
    action: deleteReplyTweetHandler,
  },
  {
    path: "/twitter/createTweetWithHashTag",
    method: "post",
    action: createTweetWithHashTagHandler,
  },
  {
    path: "/twitter/createHashTagHashTag",
    method: "post",
    action: createHashTagHandler,
  },

  //------------- twitter ----------------
];
