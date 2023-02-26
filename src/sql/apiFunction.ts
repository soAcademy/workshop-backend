import { db } from "./db";

export const getTeachers = () => {
  const sql = "SELECT * FROM public.teachers";
  return db.query(sql).then((res) => res.rows);
};

export const getTeachersByAge = (args: { age: number }) => {
  const sql = `SELECT * FROM public.teachers WHERE age = ${args.age}`;
  return db.query(sql).then((res) => res.rows);
};

export const getTeachersByName = (args: { name: string }) => {
  const sql = `SELECT * FROM public.teachers WHERE name LIKE '%${args.name}%'`;
  return db.query(sql).then((res) => res.rows);
};

export const getCourses = () => {
  const sql = "SELECT * FROM public.courses";
  return db.query(sql).then((res) => {
    return res.rows});
};

export const getCoursesWithJoin = () => {
  const sql = `SELECT c.*, t.id as teacher_id, t.name as teacher_name, 
    t.age as teacher_age FROM public.courses as c, public.teachers as t WHERE c.teachers_id = t.id`;
  return db.query(sql).then((res) => res.rows);
};

export const createTeacher = (args: { name: string; age: number }) => {
  const sql = `INSERT INTO public.teachers (name, age) 
  VALUES ('${args.name}',${args.age})`;
  return db.query(sql).then((res) => res.rows);
};

export const updateTeacher = (args: {
  id: number;
  name: string;
  age: number;
}) => {
  const sql = `UPDATE public.teachers SET name = '${args.name}',
  age = ${args.age} WHERE id = ${args.id}`;
  return db.query(sql).then((res) => res.rows);
};

export const deleteTeacher = (args: { id: number }) => {
  const sql = `DELETE FROM public.teachers WHERE id = ${args.id}`;
  return db.query(sql).then((res) => res.rows);
};
