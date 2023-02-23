import { functionAddHandler, functionHelloAtHandler, functionHelloMultiplyHandler, functionHelloOrdersHandler, functionHelloReduceHandler, functionHelloSumHandler } from "./RefactorApi/handler";

export const AppRoutes = [
  {
    path: "/function/add",
    method: "post",
    action: functionAddHandler,
  },
  {
    path: "/function/helloAt",
    method: "post",
    action: functionHelloAtHandler
  },
  {
    path: "/function/helloSum",
    method: "post",
    action: functionHelloSumHandler
  },
  {
    path: "/function/helloMultiply",
    method: "post",
    action: functionHelloMultiplyHandler
  },
  {
    path: "/function/helloReduce",
    method: "post",
    action: functionHelloReduceHandler
  },
  {
    path: "/function/helloOrders",
    method: "post",
    action: functionHelloOrdersHandler
  },
];
