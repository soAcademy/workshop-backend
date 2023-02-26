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
import {
  createTeacherCodec,
  deleteTeacherCodec,
  getTeacherByNameCodec,
  getTeachersByAgeCodec,
  updateTeacherCodec,
} from "./codec";

export const getTeachersHandler = (req: Request, res: Response) => {
  return getTeachers()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getTeachersByAgeHandler = (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(">>>>>>>>>",body);
  getTeachersByAgeCodec.decode(body)._tag === "Right"
    ? getTeachersByAge({ age: body?.age }).then((response) =>
        res.status(200).send(response)
      )
    : res.status(500).json({ error: "Error to validate" });
};

export const updateTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(">>>>>>>>>>>",body);
  updateTeacherCodec.decode(body)._tag === "Right"
    ? updateTeacher({ id: body?.id, name: body?.name, age: body?.age }).then(
        (response) => res.status(200).json(response)
      )
    : res.status(500).json({ err: "Error to validate" });
};

export const createTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(body);
  createTeacherCodec.decode(body)._tag === "Right"
    ? createTeacher({ name: body?.name, age: body?.age }).then((response) =>
        res.status(200).json(response)
      )
    : res.status(500).json({ err: "Error to validate" });
};
export const deleteTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(body);
  // console.log( deleteTeacherCodec.decode(body));
  deleteTeacherCodec.decode(body)._tag === "Right"
    ? deleteTeacher({ id: body?.id }).then((response) =>
        res.status(200).json(response)
      )
    : res.status(500).json({ err: "Error to delete" });
};

export const getTeacherByNameHandle = (req: Request, res: Response) => {
  const body = req?.body;
  getTeacherByNameCodec.decode(body)._tag === "Right"
    ? getTeacherByName({ name: body?.name }).then((response) =>
        res.status(200).json(response)
      )
    : res.status(500).json({ err: "Error to validate" });
};

export const getCouresHandler = (req: Request, res: Response) => {
  try {
    getCourse().then((response) => res.status(200).json(response));
  } catch (err) {
    res.status(500).json({ err: "Error to validate" });
  }
};

export const getCouresWithJoinHandler = (req: Request, res: Response) => {
  try {
    getCouresWithJoin().then((response) => res.status(200).json(response));
  } catch (err) {
    res.status(500).json({ err: "Error to validate" });
  }
};
