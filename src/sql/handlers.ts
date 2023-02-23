import { Request, Response } from "express";
import { getTeachers } from "./api";

export const getTeachersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachers();
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};
