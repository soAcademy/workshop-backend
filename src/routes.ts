import {
  addHandler,
  helloAtHandler,
  helloMultiplyHandler,
  helloOrderHandler,
  helloReduceHandler,
  helloSumHandler,
} from "./refactorApiAnswer/";

export const AppRoutes = [
  {
    path: "/function/add",
    method: "post",
    action: addHandler,
  },
  {
    path: "/function/helloAt",
    method: "post",
    action: helloAtHandler,
  },
  {
    path: "/function/helloSum",
    method: "post",
    action: helloSumHandler,
  },
  {
    path: "/function/helloMultiply",
    method: "post",
    action: helloMultiplyHandler,
  },
  {
    path: "/function/helloReduce",
    method: "post",
    action: helloReduceHandler,
  },
  {
    path: "/function/helloOrder",
    method: "post",
    action: helloOrderHandler,
  },
];
