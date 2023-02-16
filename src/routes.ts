import { getTeachersHandler } from "./sqlAnswer";

export const AppRoutes = [
  {
    path: "/sql/getTeachers",
    method: "get",
    action: getTeachersHandler
  }
]