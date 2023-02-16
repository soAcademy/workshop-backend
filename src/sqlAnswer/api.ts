import { query } from "./db";

export const getTeachers = () => {
  const sql = "SELECT * FROM public.teachers";
  return query(sql).then((res) => res.rows);
};

export const getTeachersByAge = (args: { age: number }) => {
  const sql = `SELECT * FROM public.teachers WHERE age = ${args.age}`;
  return query(sql).then((res) => res.rows);
};

export const getTeachersByName = (args: { name: string }) => {
  const sql = `SELECT * FROM public.teachers WHERE name LIKE '%${args.name}%'`;
  return query(sql).then((res) => res.rows);
};

export const getCourses = () => {
  const sql = `SELECT * FROM public.courses`;
  return query(sql).then((res) => res.rows);
};

export const getCoursesWithJoin = () => {
  const sql = `SELECT c.*, t.id AS teacher_id, t.name AS teacher_name, t.age AS teacher_age
  FROM public.courses c
  INNER JOIN public.teachers t ON c.teachers_id = t.id;`;
  return query(sql).then((res) => res.rows);
};

export const createTeacher = (args: { name: string; age: number }) => {
  const sql = `INSERT INTO public.teachers (name, age)
  VALUES ('${args.name}', ${args.age})`;
  return query(sql).then((res) => res.rows);
};
