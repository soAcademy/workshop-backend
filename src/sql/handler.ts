// เราเอา .then กับ .catch เข้ามาเพราะมันเป็ฯ promise ฟังชัน
import { Request, Response } from "express";
import { getTeachers, getTeachersByAge, getTeachersByName, getCourses} from "./api";

export const getTeachersHandler = (req: Request, res: Response) => {
  return getTeachers()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getTeachersByAgeHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body
  return getTeachersByAge(body)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getTeachersByNameHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body
  return getTeachersByName(body)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

อันนี้ไม่ต้องการ input เพราะมันจะดึงข้อมูลออกมาทั้งหมดให้เรา
export const getCoursesHandler = (req: Request, res: Response) => {
  return getCourses()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};