import { ICreateTeacher, IDeleteTeacher, IGetTeachersByAge, IGetTeachersByName, IUpdateTeacher } from "./api.interface";
import { db } from "./db";

export const getTeachers = async () => {
  const sql = "select * from public.teachers";
  const res = await db.query(sql);
  return res.rows;
};

export const getTeachersByAge = async (args: IGetTeachersByAge) => {
  const sql = `select * from public.teachers where age = ${args.age}`;
  const res = await db.query(sql);
  return res.rows;
};

export const getTeachersByName = async (args: IGetTeachersByName) => {
  const sql = `SELECT * FROM public.teachers WHERE name LIKE '%${args.name}%'`;
  const res = await db.query(sql);
  return res.rows;
};

export const getCourses = async () => {
  const sql = `SELECT * FROM public.courses`;
  const res = await db.query(sql);
  return res.rows;
};

export const getCoursesWithJoin = async () => {
  const sql = `SELECT c.*, t.id AS teacher_id, t.name AS teacher_name, t.age AS teacher_age FROM public.courses c INNER JOIN public.teachers t ON c.teachers_id = t.id`;
  const res = await db.query(sql);
  return res.rows;
};

export const createTeacher = async (args: ICreateTeacher) => {
  const sql = `INSERT INTO public.teachers (name, age) VALUES ('${args.name}', ${args.age})`;
  const res = await db.query(sql);
  return res;
};

export const updateTeacher = async (args: IUpdateTeacher) => {
  const sql = `UPDATE public.teachers SET name = '${args.name}', age = ${args.age} WHERE id = ${args.id}`;
  const res = await db.query(sql);
  console.log(res);
  return res;
};

export const deleteTeacher = async (args: IDeleteTeacher) => {
  const sql = `DELETE FROM public.teachers WHERE id = ${args.id}`;
  const res = await db.query(sql);
  console.log(res)
  return res;
}