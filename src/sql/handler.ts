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

export const getTeachersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachers();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// export const getTeachersByAgeHandler = async (req: Request, res: Response) => {
//   console.log("body:",req?.body)
//   console.log("query:",req?.query);
//   try {
//     const response = await getTeachersByAge({ age: Number(req?.body?.age) });
//     return res.status(200).send(response);
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// };

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

// export const getTeachersByNameHandler = (req: Request, res: Response) => {
//   console.log("body:",req?.body)
//   return getTeachersByName({ name: String(req?.body?.name)})
//     .then((response) => res.status(200).send(response))
//     .catch((error) => res.status(500).send(error))
// }

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

// export const createTeacherHandler = async (req: Request, res: Response) => {
//   try {
//     const response = await createTeacher({
//       name: String(req?.body?.name),
//       age: Number(req?.body?.age),
//     });
//     return res.status(200).send(response);
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// }

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

// export const updateTeacherHandler = async (req: Request, res: Response) => {
//   return updateTeacher ({
//     id: Number(req?.body?.id),
//     name: String(req?.body?.name),
//     age: Number(req?.body?.age),
//   })
//   .then ((response) => res.status(200).send(response))
//   .catch ((error) => res.status(500).send(error))
// }

export const deleteTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (deleteTeacherCodec.decode(body)._tag === "Right") {
    return deleteTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send("error"));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

// export const deleteTeacherHandler = async (req: Request, res: Response) => {
//   return deleteTeacher({
//     id: Number(req?.body?.id),
//   })
//   .then((response) => res.status(200).send(response))
//   .catch((error) => res.status(500).send(error))
// }
