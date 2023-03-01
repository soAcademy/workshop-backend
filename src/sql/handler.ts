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
import { any } from "io-ts";
import {
  createTeacherCodec,
  deleteTeacherCodec,
  getTeacherByNameCodec,
  updateTeacherCodec,
} from "./api.interface";

const isNumber = (data: any) => typeof data === "number";

// getTeachers
export const getTeachersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTeachers();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// getTeachersByAge
// express req?. ได้ 2 แบบ คือ body หรือ query ต้องไปกรอกใน params ใน postman

// export const getTeachersByAgeHandler = (req: Request, res: Response) => {
//   console.log(req?.query);
//   return getTeachersByAge({ age: Number(req?.query?.age) })
//     .then((response) => res.status(200).send(response))
//     .catch((error) => res.status(500).send(error));
// };

// export const getTeachersByAgeHandler = async (req: Request, res: Response) => {
//   console.log(req?.query);
//   try {
//     if (isNumber(Number(req?.query?.age))) {
//       const response = await getTeachersByAge({ age: Number(req?.query?.age) });
//       res.status(200).send(response);
//     } else {
//       res.status(500).json({ error: "Error invalid codec" });
//     }
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// };

export const getTeachersByAgeHandler = async (req: Request, res: Response) => {
  console.log(req?.body);
  try {
    if (isNumber(req?.body?.age)) {
      const response = await getTeachersByAge({ age: Number(req?.body?.age) });
      res.status(200).send(response);
    } else {
      res.status(500).json({ error: "Error invalid codec" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getTeachersByNameHandler = async (req: Request, res: Response) => {
  console.log(req?.body);
  console.log(getTeacherByNameCodec.decode(req?.body));
  try {
    const body = req?.body;
    return getTeacherByNameCodec.decode(body)._tag === "Right"
      ? res.status(200).send(await getTeachersByName(body))
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getCoursesHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    return res.status(200).send(await getCourses());
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getCoursesWithJoinHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const body = req?.body;
    return res.status(200).send(await getCoursesWithJoin());
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createTeacherHandler = async (req: Request, res: Response) => {
  console.log(req?.body);
  console.log(createTeacherCodec.decode(req?.body));
  try {
    const body = req?.body;
    return getTeacherByNameCodec.decode(body)._tag === "Right"
      ? res.status(200).send(await createTeacher(body))
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateTeacherHandler = async (req: Request, res: Response) => {
  console.log(req?.body);
  console.log(updateTeacherCodec.decode(req?.body));
  try {
    const body = req?.body;
    return updateTeacherCodec.decode(body)._tag === "Right"
      ? res.status(200).send(await updateTeacher(body))
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteTeacherHandler = async (req: Request, res: Response) => {
  console.log(req?.body);
  console.log(deleteTeacherCodec.decode(req?.body));
  try {
    const body = req?.body;
    return deleteTeacherCodec.decode(body)._tag === "Right"
      ? res.status(200).send(await deleteTeacher(body))
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (error) {
    return res.status(500).send(error);
  }
};
