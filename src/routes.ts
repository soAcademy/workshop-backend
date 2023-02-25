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
  updateTeacherHandler,
} from "./sqlWorkshop";

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
];
