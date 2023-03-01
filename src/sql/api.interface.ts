import * as t from "io-ts";

// getTeacherByName
export const getTeacherByNameCodec = t.type({
  name: t.string,
});
export interface IGetTeacherByName
  extends t.TypeOf<typeof getTeacherByNameCodec> {}

// createTeacher
export const createTeacherCodec = t.type({
  name: t.string,
  age: t.number,
});
export interface ICreateTeacher extends t.TypeOf<typeof createTeacherCodec> {}

// updateTeacher
export const updateTeacherCodec = t.type({
  id: t.number,
  name: t.string,
  age: t.number,
});
export interface IUpdateTeacher extends t.TypeOf<typeof updateTeacherCodec> {}

// deleteTeacher
export const deleteTeacherCodec = t.type({ id: t.number });
export interface IDeleteTeacher extends t.TypeOf<typeof deleteTeacherCodec> {}
