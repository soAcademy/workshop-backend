import {
  createTeacherHandler,
  deleteTeacherHandler,
  getCouresHandler,
  getCouresWithJoinHandler,
  getTeacherByNameHandle,
  getTeachersByAgeHandler,
  getTeachersHandler,
  updateTeacherHandler,
} from "../sql/handler";
import {
  getTeacherByNameHandler2,
  getTeacherHandler2,
  upDateTeacherHandler2,
} from "../sql_test/handler";
import {
  createCategoryhandler,
  createManyMenuHandler,
  createMenuHandler,
  createOrderHandler,
  deleteAllOrderHandler,
  deleteCategoryHandler,
  deleteMenuHandler,
  getCategoriesHandler,
  getMenuHandler,
  getOrderByTableIdHandler,
  getOrderHandler,
  getOrdersHandler,
  updateCategoryHandler,
  updateMenuHandler,
  updateOrderHandler,
} from "./DewKitchen/handler";
import {
  AddPost2Handler,
  AddUser2Handler,
  addProfileHandler,
} from "./FacebookApi/handler";
import {
  createAnswerQuizeGameHandler,
  createCategoriesHandler,
  createChoicesHandler,
  createQuestionsHandler,
 
  delateRoundQuizeGameHandler,
  getCategoriesQuizeHandler,
  getQuestionByRoundHandler,
  getQuestionsByCategoryIdHandler,
  getScoreByUserHandler,
  submitAnswerHandler,
  updateCategoryQuizeGameHandler,
  updateQuestionHandler,
} from "./QuizeGame/handler";
import {
  createManyTaskHandler,
  createTaskHandler,
  deleteManyTasksHandler,
  deleteTaskHandler,
  findUniqueHandler,
  getTaskHandler,
  updateManyTasksHandler,
  updateNoteHandler,
  updateTaskStatusHandler,
} from "./TodoList/todolistHandler";
import {
  functionAddHandler,
  functionHelloAtHandler,
  functionHelloMultiplyHandler,
  functionHelloOrderHandler,
  functionHelloReduceHandler,
  functionHelloSumHandler,
} from "./refactorApi";

export const AppRoutes = [
  {
    path: "/post/helloMultiply",
    method: "post",
    action: functionHelloMultiplyHandler,
  },
  {
    path: "/post/add",
    method: "post",
    action: functionAddHandler,
  },
  {
    path: "/post/helloAt",
    method: "post",
    action: functionHelloAtHandler,
  },
  {
    path: "/post/helloSum",
    method: "post",
    action: functionHelloSumHandler,
  },
  {
    path: "/post/helloReduce",
    method: "post",
    action: functionHelloReduceHandler,
  },
  {
    path: "/post/helloOrder",
    method: "post",
    action: functionHelloOrderHandler,
  },
  {
    path: "/getTeacher",
    method: "post",
    action: getTeachersHandler,
  },
  {
    path: "/getTeachersByAge",
    method: "post",
    action: getTeachersByAgeHandler,
  },
  {
    path: "/updateTeacher",
    method: "post",
    action: updateTeacherHandler,
  },
  {
    path: "/createTeacher",
    method: "post",
    action: createTeacherHandler,
  },
  {
    path: "/deleteTeacher",
    method: "post",
    action: deleteTeacherHandler,
  },
  {
    path: "/getTeacherByName",
    method: "post",
    action: getTeacherByNameHandle,
  },
  {
    path: "/getCoures",
    method: "post",
    action: getCouresHandler,
  },
  {
    path: "/getCouresWithJoin",
    method: "post",
    action: getCouresWithJoinHandler,
  },
  {
    path: "/getTeacher2",
    method: "post",
    action: getTeacherHandler2,
  },
  {
    path: "/getTeacherByName2",
    method: "post",
    action: getTeacherByNameHandler2,
  },
  {
    path: "/updateTeacher2",
    method: "post",
    action: upDateTeacherHandler2,
  },
  {
    path: "/todolist/createTask",
    method: "post",
    action: createTaskHandler,
  },
  {
    path: "/todolist/getTask",
    method: "post",
    action: getTaskHandler,
  },
  {
    path: "/todolist/updateTaskStatus",
    method: "post",
    action: updateTaskStatusHandler,
  },
  {
    path: "/todolist/deleteTask",
    method: "post",
    action: deleteTaskHandler,
  },
  {
    path: "/todolist/createMany",
    method: "post",
    action: createManyTaskHandler,
  },
  {
    path: "/todolist/findUnique",
    method: "post",
    action: findUniqueHandler,
  },
  {
    path: "/todolist/updateManyTasks",
    method: "post",
    action: updateManyTasksHandler,
  },
  {
    path: "/todolist/deleteManyTasks",
    method: "post",
    action: deleteManyTasksHandler,
  },
  {
    path: "/todolist/updateNote",
    method: "post",
    action: updateNoteHandler,
  },
  {
    path: "/dewKitchen/createCategory",
    method: "post",
    action: createCategoryhandler,
  },
  {
    path: "/dewKitchen/getCategories",
    method: "post",
    action: getCategoriesHandler,
  },
  {
    path: "/dewKitchen/updateCategory",
    method: "post",
    action: updateCategoryHandler,
  },
  {
    path: "/dewKitchen/createMenu",
    method: "post",
    action: createMenuHandler,
  },
  {
    path: "/dewKitchen/getMenu",
    method: "post",
    action: getMenuHandler,
  },
  {
    path: "/dewKitchen/createOrder",
    method: "post",
    action: createOrderHandler,
  },
  {
    path: "/dewKitchen/getOrders",
    method: "post",
    action: getOrdersHandler,
  },
  {
    path: "/dewKitchen/getOrder",
    method: "post",
    action: getOrderHandler,
  },
  {
    path: "/dewKitchen/updateOrder",
    method: "post",
    action: updateOrderHandler,
  },
  {
    path: "/dewKitchen/deletedCategory",
    method: "post",
    action: deleteCategoryHandler,
  },
  {
    path: "/dewKitchen/deletedMenu",
    method: "post",
    action: deleteMenuHandler,
  },
  {
    path: "/dewKitchen/updateMenu",
    method: "post",
    action: updateMenuHandler,
  },
  {
    path: "/dewKitchen/updateManyMenu",
    method: "post",
    action: createManyMenuHandler,
  },
  {
    path: "/dewKitchen/deleteAllOrder",
    method: "post",
    action: deleteAllOrderHandler,
  },
  {
    path: "/dewKitchen/getOrderByTableId",
    method: "post",
    action: getOrderByTableIdHandler,
  },
  {
    path: "/facebook/addPost",
    method: "post",
    action: AddPost2Handler,
  },
  {
    path: "/facebook/addUser",
    method: "post",
    action: AddUser2Handler,
  },
  {
    path: "/facebook/addProfile",
    method: "post",
    action: addProfileHandler,
  },
  {
    path: "/quizeGame/createCategories",
    method: "post",
    action: createCategoriesHandler,
  },
  {
    path: "/quizeGame/createQuestions",
    method: "post",
    action: createQuestionsHandler,
  },
  {
    path: "/quizeGame/getCategories",
    method: "post",
    action: getCategoriesQuizeHandler,
  },
  {
    path: "/quizeGame/getQuestionsByCategoryIdHandler",
    method: "post",
    action: getQuestionsByCategoryIdHandler,
  },
  {
    path: "/quizeGame/createChoicesHandler",
    method: "post",
    action: createChoicesHandler,
  },
  {
    path: "/quizeGame/updateCategoryQuizeGameHandler",
    method: "post",
    action: updateCategoryQuizeGameHandler,
  },
  {
    path: "/quizeGame/createAnswerQuizeGameHandler",
    method: "post",
    action: createAnswerQuizeGameHandler,
  },
  {
    path: "/quizeGame/getQuestionByRoundHandler",
    method: "post",
    action: getQuestionByRoundHandler,
  },
  {
    path: "/quizeGame/updateQuestionHandler",
    method: "post",
    action: updateQuestionHandler,
  },
  {
    path: "/quizeGame/delateRoundQuizeGameHandler",
    method: "post",
    action: delateRoundQuizeGameHandler,
  },
  {
    path: "/quizeGame/submitAnswerHandler",
    method: "post",
    action: submitAnswerHandler,
  },
  {
    path: "/quizeGame/getScoreByUserHandler",
    method: "post",
    action: getScoreByUserHandler,
  }


 
 

  
];
