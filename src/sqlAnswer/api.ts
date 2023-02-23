import { db } from "./db";

export const getTeachers = async () => {
  const sql = "SELECT * FROM public.teachers";
  const res = await db.query(sql);
  return res.rows;
};

export const getTeachersByAge = async (args: { age: number }) => {
  const sql = `SELECT * FROM public.teachers WHERE age = ${args.age}`;
  const res = await db.query(sql);
  return res.rows;
};

export const getTeachersByName = async (args: { name: string }) => {
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
  const sql = `SELECT c.*, t.id AS teacher_id, t.name AS teacher_name, t.age AS teacher_age
  FROM public.courses c
  INNER JOIN public.teachers t ON c.teachers_id = t.id;`;
  const res = await db.query(sql);
  return res.rows;
};

export const createTeacher = async (args: { name: string; age: number }) => {
  const sql = `INSERT INTO public.teachers (name, age)
  VALUES ('${args.name}', ${args.age})`;
  const res = await db.query(sql);
  return res;
};

export const updateTeacher = async (args: {
  id: number;
  name: string;
  age: number;
}) => {
  const sql = `UPDATE public.teachers SET name = '${args.name}',
  age = ${args.age} WHERE id = ${args.id}`;
  const res = await db.query(sql);
  console.log(res);
  return res;
};

export const deleteTeacher = async (args: { id: number }) => {
  const sql = `DELETE FROM public.teachers WHERE id = ${args.id}`;
  const res = await db.query(sql);
  console.log(res);
  return res;
};
