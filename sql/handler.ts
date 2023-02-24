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
import {
  createTeacherCodec,
  deleteTeacherCodec,
  getTeachersByAgeCodec,
  getTeachersByNameCodec,
  updateTeacherCodec,
} from "./api.interface";

export const getTeachersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachers();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getTeachersByAgeHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(body);
  try {
    return getTeachersByAgeCodec.decode(body)._tag === "Right"
      ? res.status(200).send(await getTeachersByAge(body))
      : res.status(500).send(`ERROR: data mismatch!`);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getTeachersByNameHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(body);
  try {
    return getTeachersByNameCodec.decode(body)._tag === "Right"
      ? res.status(200).send(await getTeachersByName(body))
      : res.status(500).send(`ERROR: data mismatch!`);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getCoursesHandler = async (req: Request, res: Response) => {
  try {
    const response = await getCourses();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getCoursesWithJoinHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await getCoursesWithJoin();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createTeacherHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(body);

  try {
    return createTeacherCodec.decode(body)._tag === "Right"
      ? res.status(200).send(await createTeacher(body))
      : res.status(500).send(`ERROR: data mismatch!`);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateTeacherHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(body);
  try {
    return updateTeacherCodec.decode(body)._tag === "Right"
      ? res.status(200).send(await updateTeacher(body))
      : res.status(500).send(`ERROR: data mismatch!`);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteTeacherHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    return deleteTeacherCodec.decode(body)._tag === "Right"
      ? res.status(200).send(await deleteTeacher(body))
      : res.status(500).send(`ERROR: data mismatch!`);
  } catch (error) {
    return res.status(500).send(error);
  }
};
