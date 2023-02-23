import {
  functionAddHandler,
  functionHelloMultiplyHandler,
} from "./refactorApi";

import { getTeachersHandler, getTeachersByAgeHandler } from "./sql";

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
    path: "/getTeachers",
    method: "post",
    action: getTeachersHandler,
  },
  {
    path:"/getTeachersByAge",
    method: "post",
    action: getTeachersByAgeHandler,

  },
];