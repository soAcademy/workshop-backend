import {
  createCategoryHandler,
  createMenuHandler,
  createOrderHandler,
  deleteOrderHandler,
  getCategoryHandler,
  getMenuByCategoryHandler,
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
  functionHelloMultiplyHandler,
  functionHelloOrderHandler,
  functionHelloReduceHandler,
  functionHelloSumHandler,
} from "./refactorApi";
import {
  createTeacherHandler,
  deleteTeacherHandler,
  getCoursesHandler,
  getCoursesWithJoinHandler,
  getTeachersByAgeHandler,
  getTeachersByNameHandler,
  getTeachersHandler,
  updateTeacherHandler,
} from "./sql";
import {
  createTaskHandler,
  createTaskManyHandler,
  deleteTaskHandler,
  findUniqueOrThrowHandler,
  findUniqueTaskHandler,
  getTaskHandler,
  updateTaskManyHandler,
  updateTaskStatusHandler,
} from "./todoList";

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
    path: "/getCourseWithJoin",
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
    path: "/createTaskMany",
    method: "post",
    action: createTaskManyHandler,
  },
  {
    path: "/getTask",
    method: "post",
    action: getTaskHandler,
  },
  {
    path: "/updateTask",
    method: "post",
    action: updateTaskStatusHandler,
  },
  {
    path: "/updateTaskMany",
    method: "post",
    action: updateTaskManyHandler,
  },
  {
    path: "/deleteTask",
    method: "post",
    action: deleteTaskHandler,
  },
  {
    path: "/findUniqueTask",
    method: "post",
    action: findUniqueTaskHandler,
  },
  {
    path: "/findUniqueOrThrow",
    method: "post",
    action: findUniqueOrThrowHandler,
  },
  {
    path: "/createCategory",
    method: "post",
    action: createCategoryHandler,
  },
  {
    path: "/getCategory",
    method: "post",
    action: getCategoryHandler,
  },
  {
    path: "/updateCategory",
    method: "post",
    action: updateCategoryHandler,
  },
  {
    path: "/createMenu",
    method: "post",
    action: createMenuHandler,
  },
  {
    path: "/getMenu",
    method: "post",
    action: getMenuHandler,
  },
  {
    path: "/getMenuByCategory",
    method: "post",
    action: getMenuByCategoryHandler,
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
    path: "/getOrders",
    method: "post",
    action: getOrdersHandler,
  },
  {
    path: "/getOrder",
    method: "post",
    action: getOrderHandler,
  },
  {
    path: "/updateOrder",
    method: "post",
    action: updateOrderHandler,
  },
  {
    path: "/deleteOrder",
    method: "post",
    action: deleteOrderHandler,
  },
];
