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
} from "./api.interface";

export const getTeachersHandler = (req: Request, res: Response) => {
  return getTeachers()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

// todo QA?? ถ้าส่งแบบ query parameters จะ refactor code ยังไง?
// export const getTeachersByAgeHandler = (req: Request, res: Response) => {
//   console.log(req?.query);
//   return getTeachersByAge({ age: Number(req?.query?.age) })
//     .then((response) => res.status(200).send(response))
//     .catch((error) => res.status(500).send(error));
// };
//----------------------------------------------------------------
// export const getTeachersByNameHandler = (req: Request, res: Response) => {
//   console.log(req?.query);
//   return getTeachersByName({ name: String(req?.query?.name) })
//     .then((response) => res.status(200).send(response))
//     .catch((error) => res.status(500).send(error));
// };

export const getTeachersByAgeHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (GetTeachersByAgeCodec.decode(body)._tag === "Right") {
    console.log(body);
    return getTeachersByAge(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

export const getTeachersByNameHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (GetTeachersByNameCodec.decode(body)._tag === "Right") {
    console.log(body);
    return getTeachersByName(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

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
  if (CreateTeacherCodec.decode(body)._tag === "Right") {
    console.log(body);
    return createTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

// export const updateTeacherHandler = (req: Request, res: Response) => {
//   if(CreateTeacherCodec.decode(req?.query)._tag === "Right"){
//     return updateTeacher({
//       id: Number(req?.query?.id),
//       name: String(req?.query?.name),
//       age: Number(req?.query?.age),
//     })
//       .then((response) => res.status(200).send(response))
//       .catch((error) => res.status(500).send(error));
//   }else {
//     res.status(500).json({ error: "invalid" });
//   }

// };

export const updateTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (CreateTeacherCodec.decode(body)._tag === "Right") {
    return updateTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

export const deleteTeacherHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (DeleteTeacherCodec.decode(body)._tag === "Right") {
    return deleteTeacher(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).json({ error: "invalid" });
  }
};
