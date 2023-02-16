import {
  getCoursesHandler,
  getCoursesWithJoinHandler,
  getTeachersByAgeHandler,
  getTeachersByNameHandler,
  getTeachersHandler,
} from "./handler";

export const AppRoutes = [
  {
    path: "/sql/getTeachers",
    method: "get",
    action: getTeachersHandler,
  },
  {
    path: "/sql/getTeachersByAge",
    method: "get",
    action: getTeachersByAgeHandler,
  },
  {
    path: "/sql/getTeachersByName",
    method: "get",
    action: getTeachersByNameHandler,
  },
  {
    path: "/sql/getCourses",
    method: "get",
    action: getCoursesHandler,
  },
  {
    path: "/sql/getCoursesWithJoin",
    method: "get",
    action: getCoursesWithJoinHandler,
  },
];
