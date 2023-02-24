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

export const getTeachersHandler = (req: Request, res: Response) => {
  return getTeachers()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getTeachersByAgeHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(getTeachersByAgeCodec.decode(body));

  if (getTeachersByAgeCodec.decode(body)._tag === "Right") {
    const result = await getTeachersByAge(body);
    res.status(200).send(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getTeachersByNameHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(getTeachersByNameCodec.decode(body));

  if (getTeachersByNameCodec.decode(body)._tag === "Right") {
    const result = await getTeachersByName(body);
    res.status(200).send(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getCoursesHandler = (req: Request, res: Response) => {
  return getCourses()
    .then((response: any) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getCoursesWithJoinHandler = (req: Request, res: Response) => {
  return getCoursesWithJoin()
    .then((response: any) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const createTeacherHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(createTeacherCodec.decode(body));

  if (createTeacherCodec.decode(body)._tag === "Right") {
    const result = await createTeacher(body);
    res.status(200).send(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateTeacherHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(updateTeacherCodec.decode(body));

  if (updateTeacherCodec.decode(body)._tag === "Right") {
    const result = await updateTeacher(body);
    res.status(200).send(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const deleteTeacherHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(deleteTeacherCodec.decode(body));

  if (deleteTeacherCodec.decode(body)._tag === "Right") {
    const result = await deleteTeacher(body);
    res.status(200).send(result);
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
