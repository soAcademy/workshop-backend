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
  const sql = `SELECT courses.*, t.id AS teacher_id, t.name AS teacher_name, t.age AS teacher_age 
  FROM public.courses 
  INNER JOIN public.teachers t ON courses.teacher_id = t.id;`;
  const res = await db.query(sql);
  return res.rows;
};
