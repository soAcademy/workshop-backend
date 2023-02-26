import * as t from "io-ts";

export const getTeachersByAgeCodec = t.type({ age: t.number });
export interface IGetTeachersByAge
  extends t.TypeOf<typeof getTeachersByAgeCodec> {}

export const getTeacherByNameCodec = t.type({ name: t.string });
export interface IGetTeacherByName
  extends t.TypeOf<typeof getTeacherByNameCodec> {}

export const updateTeacherCodec = t.type({
  id: t.number,
  name: t.string,
  age: t.number,
});
export interface IUpdateTeacher extends t.TypeOf<typeof updateTeacherCodec> {}

export const createTeacherCodec = t.type({ name: t.string, age: t.number });
export interface ICreateTeacher extends t.TypeOf<typeof createTeacherCodec> {}

export const deleteTeacherCodec = t.type({ id: t.number });
export interface IDeleteTeacher extends t.TypeOf<typeof deleteTeacherCodec> {}
