import { Request, Response, response } from "express";
import {
  createTeacher,
  deleteTeacher,
  getCourses,
  getCoursesWithJoin,
  getTeachersByAge,
  getTeachersByName,
  updateTeacher,
} from "../service/index";
import { getTeachers, talkSecret } from "../service/service"; //connect service

//handler คือส่วนที่ใช้สื่อสารกับหน้าบ้าน หรือ controller

export const getTeachersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachers();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};
export const getTeachersByAgeHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachersByAge({ age: Number(req.body.age) });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getTeachersByNameHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachersByName({ name: String(req.body.name) });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getCoursesHandler = async (req: Request, res: Response) => {
  try {
    const response = await getCourses();
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getCoursesWithJoinHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await getCoursesWithJoin();
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const createTeacherHandler = async (req: Request, res: Response) => {
  try {
    const response = await createTeacher({
      name: req.body.name,
      age: req.body.age,
    });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const updateTeacherHandler = async (req: Request, res: Response) => {
  try {
    const response = await updateTeacher({
      id: req.body.id,
      name: req.body.name,
      age: Number(req.body.age),
    });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const deleteTeacherHandler = async (req: Request, res: Response) => {
  try {
    const response = await deleteTeacher({ id: req.body.id });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

//###################################################################
//                          จุดเรียกใช้ service API
//###################################################################

export const setSecretFromOtherServer = async (req: Request, res: Response) => {
  try {
    const response = await talkSecret();
    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).send(err);
  }
};
