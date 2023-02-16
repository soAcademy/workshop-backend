import { getTeachersHandler } from "./handler";

export const AppRoutes = [
  {
    path: "/sql/getTeachers",
    method: "get",
    action: getTeachersHandler
  }
]