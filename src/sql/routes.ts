// import {
//   functionAddHandler,
//   functionHelloMultiplyHandler, getTeachersHandler

// } from "./refactorApi";

// export const AppRoutes = [
//   { 
//     path: "/function/add", 
//     method: "post", 
//     action: functionAddHandler 
//   },
//   {
//     path: "/function/",
//     method: "post",
//     action: functionHelloMultiplyHandler,
//   },
//   {
    
//   },
// ];

import {getTeachersHandler, getTeachersByAgeHandler, getTeachersByNameHandler} from "./sql";

export const AppRoutes = [
  { 
    path: "/getTeachers", 
    method: "post", 
    action: getTeachersHandler
  },
  {
    path: "/getTeachersByAge",
    method: "post",
    action: getTeachersByAgeHandler
  },
  {
    path: "/getTeachersByName",
    method: "post",
    action: getTeachersByNameHandler
  },
];