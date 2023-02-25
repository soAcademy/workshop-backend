import express, { Application, Request, Response } from "express";
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
  getTeachersCodec,
  updateTeacherCodec,
} from "./interface";
// ยิงขึ้น postman ให้ display ฝั่ง front end
export const getTeachersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachers();
    res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getTeachersByAgeHandler = async (req: Request, res: Response) => {
  console.log(req?.body);
  try {
    if (getTeachersByAgeCodec.decode(req?.body)._tag === "Right") {
      const response = await getTeachersByAge({ age: Number(req?.body?.age) });
      res.status(200).send(response);
    } else {
      res.status(500).send("age is required and must be number");
    }
  } catch (error) {
    res.status(500).send(error);
  }
  // console.log(getTeachersByAge({ age: Number(req?.body?.age) }))
};

export const getTeachersByNameHandler = async (req: Request, res: Response) => {
  console.log(req?.body);
  try {
    if (getTeachersByNameCodec.decode(req?.body)._tag === "Right") {
      const response = await getTeachersByName(req?.body);

      res.status(200).send(response);
    } else {
      res.status(500).send("error");
    }
  } catch (error) {
    res.status(500).send(error);
  }
  // console.log(getTeachersByName({ name: String(req?.body?.name) }))
};

export const getCoursesHandler = async (req: Request, res: Response) => {
  try {
    const response = await getCourses();
    res.status(200).send(response);
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
    res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createTeacherHandler = async (req: Request, res: Response) => {
  try {
    if (createTeacherCodec.decode(req?.body)._tag === "Right") {
      const response = await createTeacher(req?.body);
      res.status(200).send(response);
    } else {
      res.status(500).send("error");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateTeacherHandler = async (req: Request, res: Response) => {
  try {
    if (updateTeacherCodec.decode(req?.body)._tag === "Right") {
      const response = await updateTeacher(req?.body);
      res.status(200).send(response);
    } else {
      res.status(500).send("error");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteTeacherHandler = async (req: Request, res: Response) => {
  try {
    if (deleteTeacherCodec.decode(req?.body)._tag === "Right") {
      const response = await deleteTeacher(req?.body);
      res.status(200).send(response);
    } else {
      res.status(500).send("error");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};
