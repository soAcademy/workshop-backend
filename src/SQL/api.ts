import { ICreateTeacher, IUpdateTeacher } from "./api.interface";
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
  const sql = `SELECT * FROM public.courses`;
  return db.query(sql).then((res) => res.rows);
};

export const getCoursesWithJoin = () => {
  const sql = `SELECT c.*, t.id AS teacher_id, t.name AS teacher_name, t.age AS teacher_age
  FROM public.courses c
  INNER JOIN public.teachers t ON c.teachers_id = t.id;`;
  return db.query(sql).then((res) => res.rows);
};

export const createTeacher = (args: ICreateTeacher) => {
  const sql = `INSERT INTO public.teachers (name, age)
  VALUES ('${args.name}', ${args.age})`;
  return db.query(sql).then((res) => res);
};

export const updateTeacher = (args: IUpdateTeacher) => {
  const sql = `UPDATE public.teachers SET name = '${args.name}',
  age = ${args.age} WHERE id = ${args.id}`;
  return db.query(sql).then((res) => {
    console.log(res);
    return res;
  });
};

export const deleteTeacher = (args: { id: number }) => {
  const sql = `DELETE FROM public.teachers WHERE id = ${args.id}`;
  return db.query(sql).then((res) => {
    console.log(res);
    return res;
  });
};
