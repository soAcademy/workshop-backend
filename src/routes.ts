import { functionAddHandler, functionHelloMultiplyHandler } from "./refactorApi";
import { getTeachersHandler } from "./sqlAnswer";

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
    action: getTeachersHandler
  }
];