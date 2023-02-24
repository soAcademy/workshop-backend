import { Request, Response } from "express";
import {
  createTeacher,
  deleteTeacher,
  getCouresWithJoin,
  getCourse,
  getTeacherByName,
  getTeachers,
  getTeachersByAge,
  updateTeacher,
} from "./api";

export const getTeachersHandler = (req: Request, res: Response) => {
  return getTeachers()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getTeachersByAgeHandler = (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(">>>>>>>>>",body);
  return getTeachersByAge({ age: body?.age }).then((response) =>
    res.status(200).send(response)
  );
};
export const updateTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(">>>>>>>>>>>",body);
  return updateTeacher({ id: body?.id, name: body?.name, age: body?.age }).then(
    (response) => res.status(200).json(response)
  );
};
export const createTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  const result = createTeacher({ name: body?.name, age: body?.age }).then(
    (response) => res.status(200).json(response)
  );
  return result;
};
export const deleteTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  const result = deleteTeacher({ id: body?.id }).then((response) =>
    res.status(200).json(response)
  );
  return result;
};

export const getTeacherByNameHandle = (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(">>>>", body.name);
  const result = getTeacherByName({ name: body?.name }).then((response) =>
    res.status(200).json(response)
  );
  return result;
};

export const getCouresHandler = (req: Request, res: Response) => {
  const result = getCourse().then((response) => res.status(200).json(response));
  return result;
};

export const getCouresWithJoinHandler = (req: Request, res: Response) =>{
  const result = getCouresWithJoin().then((response) => res.status(200).json(response));
  return result;
}
