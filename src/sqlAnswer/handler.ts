import { Request, Response } from "express";
import { getTeachers, getTeachersByAge } from "./api";

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
