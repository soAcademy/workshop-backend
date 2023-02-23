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
} from "./apiFunction";
import {
  createTeacherCodec,
  deleteTeacherCodec,
  getTeachersByAgeCodec,
  getTeachersByNameCodec,
  updateTeacherCodec,
} from "./apiFunction.interface";

export const getTeachersHandler = (req: Request, res: Response) => {
  return getTeachers()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getTeachersByAgeHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (getTeachersByAgeCodec.decode(body)._tag === "Right") {
    return getTeachersByAge(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getTeachersByNameHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (getTeachersByNameCodec.decode(body)._tag === "Right") {
    return getTeachersByName(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
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
  const body = req?.body;
  if (createTeacherCodec.decode(body)._tag === "Right") {
    return createTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const updateTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (updateTeacherCodec.decode(body)._tag === "Right") {
    return updateTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const deleteTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (deleteTeacherCodec.decode(body)._tag === "Right") {
    return deleteTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};
