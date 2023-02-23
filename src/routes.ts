import { functionAddHandler, functionHelloMultiplyHandler } from "./refactorApi";

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
];