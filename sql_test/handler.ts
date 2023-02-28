import express, { Application, Request, Response } from "express";
import { getTeacher, getTeacherByName, upDateTeacher } from "./functionApi";

export const getTeacherHandler2 = (req: Request, res: Response) => {
  return getTeacher()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getTeacherByNameHandler2 = (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body", body);
  const result = getTeacherByName({ name: body?.name }).then((response) =>
    res.status(200).json(response)
  );
  return result;
};

export const upDateTeacherHandler2 = (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body>>>", body);
  const result = upDateTeacher({
    id: body?.id,
    name: body?.name,
    age: body?.age,
  }).then((response) =>res.status(200).json(response));
 console.log("result>>>>>>>>>>",result);
  return result;
};
