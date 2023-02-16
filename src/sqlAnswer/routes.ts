import { getTeachersByAgeHandler, getTeachersHandler } from "./handler";

export const AppRoutes = [
  {
    path: "/sql/getTeachers",
    method: "get",
    action: getTeachersHandler
  },
  {
    path: "/sql/getTeachersByAge",
    method: "get",
    action: getTeachersByAgeHandler
  }
]