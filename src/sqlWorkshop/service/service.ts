import {
  ICreateTeacher,
  IDeleteTeacher,
  IGetTeacherByAge,
  IGetTeachersByName,
  IUpdateTeacher,
} from "../API_Interface";
import * as manager from "../manager/manager"; //connect to manager
import axios from "axios";

export const getTeachers = async () => {
  const result = await manager.getTeachers();
  return result;
};

//-----------------------------------------------------

export const getTeachersByAge = async (args: IGetTeacherByAge) => {
  const result = await manager.getTeachersByAge(args);
  return result;
};

//-----------------------------------------------------

export const getTeachersByName = async (args: IGetTeachersByName) => {
  const result = await manager.getTeachersByName(args);
  return result;
};

//-----------------------------------------------------

export const getCourses = async () => {
  const result = await manager.getCourses();
  return result;
};

//-----------------------------------------------------

export const getCoursesWithJoin = async () => {
  const result = await manager.getCoursesWithJoin();
  return result;
};

//-----------------------------------------------------

export const createTeacher = async (args: ICreateTeacher) => {
  const result = await manager.createTeacher(args);
  return result;
};

//-----------------------------------------------------

export const updateTeacher = async (args: IUpdateTeacher) => {
  const result = await manager.updateTeacher(args);
  return result;
};

//-----------------------------------------------------

export const deleteTeacher = async (args: IDeleteTeacher) => {
  const result = await manager.deleteTeacher(args);
  return result;
};

//####################################################################

export const talkSecret = async () => {
  const getSecret = await axios.get("http://localhost:7700/secret");
  console.log(getSecret);
  return getSecret;
};

//จุดเรียกใช้จะอยู่ที่ handler
