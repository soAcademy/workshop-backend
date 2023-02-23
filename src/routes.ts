import {
  functionAddHandler,
  functionHelloAtHandler,
  functionHelloMultiplyHandler,
  functionHelloOrderHandler,
  functionHelloReduceHandler,
  functionHelloSumHandler,
} from "./refactorApi";
import {
  getCoursesHandler,
  getTeachersByAgeHandler,
  getTeachersByNameHandler,
  getTeachersHandler,
} from "./sql";

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
    path: "/getCourse",
    method: "post",
    action: getCoursesHandler,
  },
];
