import { createTeacherHandler, deleteTeacherHandler, getCouresHandler, getCouresWithJoinHandler, getTeacherByNameHandle, getTeachersByAgeHandler, getTeachersHandler, updateTeacherHandler } from "../sql/handler";
import {  getTeacherByNameHandler2, getTeacherHandler2, upDateTeacherHandler2 } from "../sql_test/handler";
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
  {
    path:"/getTeacher",
    method:"post",
    action:getTeachersHandler,
  },
  {
    path:"/getTeachersByAge",
    method:"post",
    action:getTeachersByAgeHandler,
  },
  {
    path:"/updateTeacher",
    method:"post",
    action:updateTeacherHandler,
  },
  {
    path:"/createTeacher",
    method:"post",
    action:createTeacherHandler,
  },
  {
    path:"/deleteTeacher",
    method:"post",
    action:deleteTeacherHandler,
  },
  {
    path:"/getTeacherByName",
    method:"post",
    action:getTeacherByNameHandle,
  },
  {
    path:"/getCoures",
    method:"post",
    action:getCouresHandler,
  },
  {
    path:"/getCouresWithJoin",
    method:"post",
    action:getCouresWithJoinHandler,
  },
  {
    path:"/getTeacher2",
    method:"post",
    action:getTeacherHandler2,
  },
  {
    path:"/getTeacherByName2",
    method:"post",
    action:getTeacherByNameHandler2,
  },
  {
    path:"/updateTeacher2",
    method:"post",
    action:upDateTeacherHandler2,
  },
  

];