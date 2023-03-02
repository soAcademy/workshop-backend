import {
  createTeacherHandler,
  deleteTeacherHandler,
  getCoursesHandler,
  getCoursesWithJoinHandler,
  getLotteryDateHandler,
  getTeachersByAgeHandler,
  getTeachersByNameHandler,
  getTeachersHandler,
  updateTeacherHandler,
} from "./SQL";
import {
  functionAddHandler,
  functionHelloAtHandler,
  functionHelloMultiplyHandler,
  functionHelloOrderHandler,
  functionHelloReduceHandler,
  functionHelloSumHandler,
} from "./refactorApi";
import {
  createTaskHandler,
  createTasksHandler,
  deleteTasksHandler,
  getTasksHandler,
  getUniqueTasksHandler,
  updateTaskHandler,
} from "./todoList/todoList.handler";
import {
  createCategoryHandler,
  createManyCategoryHandler,
  createMenuHandler,
  createOrderHandler,
  getCategoryHandler,
  getMenusHandler,
  getOrderByIdHandler,
  getOrdersByTableIdHandler,
  getOrdersHandler,
  updateCategoryHandler,
} from "./binKitchen";

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
  // Lottery WorkShop
  {
    path: "/lotteryDates",
    method: "post",
    action: getLotteryDateHandler,
  },
  // prisma : todoList WorkShop
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
    path: "/todolist/getUniqueTasks",
    method: "post",
    action: getUniqueTasksHandler,
  },
  {
    path: "/todolist/updateTask",
    method: "post",
    action: updateTaskHandler,
  },
  {
    path: "/todolist/deleteTask",
    method: "post",
    action: deleteTasksHandler,
  },
  //todo: create route for bin kitchen project
  {
    path: "/binKitchen/createCategory",
    method: "post",
    action: createCategoryHandler,
  },
  {
    path: "/binKitchen/createManyCategory",
    method: "post",
    action: createManyCategoryHandler,
  },
  {
    path: "/binKitchen/getCategory",
    method: "post",
    action: getCategoryHandler,
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
    path: "/binKitchen/getMenus",
    method: "post",
    action: getMenusHandler,
  },
  {
    path: "/binKitchen/createOrder",
    method: "post",
    action: createOrderHandler,
  },
  {
    path: "/binKitchen/getOrders",
    method: "post",
    action: getOrdersHandler,
  },
  {
    path: "/binKitchen/getOrdersByTableId",
    method: "post",
    action: getOrdersByTableIdHandler,
  },
  {
    path: "/binKitchen/getOrderById",
    method: "post",
    action: getOrderByIdHandler,
  },
];
