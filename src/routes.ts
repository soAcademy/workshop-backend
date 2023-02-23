import {
  functionAddHandler,
  functionHelloMultiplyHandler,
} from "./refactorApi";

export const AppRoutes = [
  { path: "/function/add", method: "post", action: functionAddHandler },
  {
    path: "/function/",
    method: "post",
    action: functionHelloMultiplyHandler,
  },
];
