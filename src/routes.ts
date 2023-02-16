import { getTeachersByAgeHandler, getTeachersHandler } from "./sqlAnswer";

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