import { Request, Response } from "express";
import {
  createTeacher,
  deleteTeacher,
  getCourses,
  getCoursesWithJoin,
  getTeachers,
  getTeachersByAge,
  getTeachersByName,
  updateTeacher,
} from "./api";

export const getTeachersHandler = (req: Request, res: Response) => {
  return getTeachers()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getTeachersByAgeHandler = (req: Request, res: Response) => {
  console.log(req?.query);
  return getTeachersByAge({ age: Number(req?.query?.age) })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getTeachersByNameHandler = (req: Request, res: Response) => {
  console.log(req?.query);
  return getTeachersByName({ name: String(req?.query?.name) })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getCoursesHandler = (req: Request, res: Response) => {
  return getCourses()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getCoursesWithJoinHandler = (req: Request, res: Response) => {
  return getCoursesWithJoin()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const createTeacherHandler = (req: Request, res: Response) => {
  return createTeacher({
    name: String(req?.body?.name),
    age: Number(req?.body?.age),
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const updateTeacherHandler = (req: Request, res: Response) => {
  return updateTeacher({
    id: Number(req?.body?.id),
    name: String(req?.body?.name),
    age: Number(req?.body?.age),
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const deleteTeacherHandler = (req: Request, res: Response) => {
  return deleteTeacher({
    id: Number(req?.body?.id),
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};