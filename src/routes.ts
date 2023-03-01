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
];
