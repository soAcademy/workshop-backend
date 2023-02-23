import { Request, Response } from "express";
import {
  // createTeacher,
  // deleteTeacher,
  // getCourses,
  // getCoursesWithJoin,
  getTeachers,
  getTeachersByAge,
  // getTeachersByName,
  // updateTeacher,
} from "./api";

export const getTeachersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachers();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// express req?. ได้ 2 แบบ คือ body หรือ query ต้องไปกรอกใน params ใน postman
export const getTeachersByAgeHandler = (req: Request, res: Response) => {
  console.log(req?.query);
  return getTeachersByAge({ age: Number(req?.query?.age) })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};
