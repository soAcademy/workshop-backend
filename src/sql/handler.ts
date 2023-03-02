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
  CreateTeacherCodec,
  DeleteTeacherCodec,
  GetTeachersByAgeCodec,
  GetTeachersByNameCodec,
  UpdateTeacherCodec,
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
  const body = req.body;
  // console.log(body);
  // console.log(GetTeachersByAgeCodec.decode(body));

  if (GetTeachersByAgeCodec.decode(body)._tag === "Right") {
    const response = await getTeachersByAge(body);
    res.status(200).send(response);
  } else {
    res.status(500).send("Error invalid codec");
  }
};

export const getTeachersByNameHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  // console.log(body);
  // console.log(GetTeachersByNameCodec.decode(body));

  if (GetTeachersByNameCodec.decode(body)._tag === "Right") {
    const response = await getTeachersByName(body);
    res.status(200).send(response);
  } else {
    res.status(500).send("Error invalid codec");
  }
};

export const getCoursesHandler = async (req: Request, res: Response) => {
  try {
    const response = await getCourses();
    console.log(response);
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
    console.log(response);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createTeacherHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(CreateTeacherCodec.decode(body));

  if (CreateTeacherCodec.decode(body)._tag === "Right") {
    return createTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Error invalid codec");
  }
};

export const updateTeacherHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(UpdateTeacherCodec.decode(body));

  if (UpdateTeacherCodec.decode(body)._tag === "Right") {
    return updateTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Error invalid codec");
  }
};

export const deleteTeacherHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(DeleteTeacherCodec.decode(body));

  if (DeleteTeacherCodec.decode(body)._tag === "Right") {
    return deleteTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Error invalid codec");
  }
};
