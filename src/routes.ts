import { functionAddHandler, functionHelloAtHandler, functionHelloMultiplyHandler, functionHelloOrderHandler, functionHelloReduceHandler, functionHelloSumHandler } from "./refactorApi";

export const AppRoutes = [
  {
  path:"/post/helloMultiply",
  method: "post",
  action: functionHelloMultiplyHandler ,
  },
  {
   path:"/post/add",
   method: "post",
   action: functionAddHandler,
  },
  {
    path:"/post/helloAt",
    method: "post",
    action: functionHelloAtHandler,
  },
  {
    path:"/post/helloSum",
    method: "post",
    action:functionHelloSumHandler,
  },
  {
    path:"/post/helloReduce",
    method: "post",
    action:functionHelloReduceHandler,
  },
  {
    path:"/post/helloOrder",
    method: "post",
    action:functionHelloOrderHandler ,
  },
];