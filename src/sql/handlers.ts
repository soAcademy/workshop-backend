import { Request, Response } from "express";
import { getTeachers, getTeachersByAge, getTeachersByName } from "./api";

export const getTeachersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachers();
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getTeachersByAgeHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachersByAge({ age: Number(req.query.age) });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getTeachersByNameHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachersByName({ name: String(req?.query.name) });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};
