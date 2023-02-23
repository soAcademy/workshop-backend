import { Request, Response } from "express";
import {
  getCourses,
  getTeachers,
  getTeachersByAge,
  getTeachersByName,
} from "./api";
import { GetTeachersByAgeCodec, GetTeachersByNameCodec } from "./api.interface";

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
