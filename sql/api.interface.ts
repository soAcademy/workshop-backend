import * as t from "io-ts";

export const getTeachersByAgeCodec = t.type({ age: t.number });
export interface IGetTeacherByAge extends t.TypeOf<typeof getTeachersByAgeCodec> {}

export const getTeachersByNameCodec = t.type({ name: t.string });
export interface IGetTeacherByName extends t.TypeOf<typeof getTeachersByNameCodec> {}

export const createTeacherCodec = t.type({ name: t.string, age: t.number });
export interface ICreateTeacher extends t.TypeOf<typeof createTeacherCodec> {}

export const updateTeacherCodec = t.type({
  id: t.number,
  name: t.string,
  age: t.number,
});
export interface IUpdateTeacher extends t.TypeOf<typeof updateTeacherCodec> {}

export const deleteTeacherCodec = t.type({
  id: t.number,
});
export interface IDeleteTeacher extends t.TypeOf<typeof deleteTeacherCodec> {}
