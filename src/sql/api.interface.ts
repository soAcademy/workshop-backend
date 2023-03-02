import * as t from "io-ts";

export const GetTeachersByAgeCodec = t.type({
  age: t.number,
});

export interface IGetTeachersByAge
  extends t.TypeOf<typeof GetTeachersByAgeCodec> {}

export const GetTeachersByNameCodec = t.type({
  name: t.string,
});

export interface IGetTeachersByName
  extends t.TypeOf<typeof GetTeachersByNameCodec> {}

export const CreateTeacherCodec = t.type({
  name: t.string,
  age: t.number,
});

export interface ICreateTeacher extends t.TypeOf<typeof CreateTeacherCodec> {}

export const UpdateTeacherCodec = t.type({
  id: t.number,
  name: t.string,
  age: t.number,
});

export interface IUpdateTeacher extends t.TypeOf<typeof UpdateTeacherCodec> {}

export const DeleteTeacherCodec = t.type({
  id: t.number,
});

export interface IDeleteTeacher extends t.TypeOf<typeof DeleteTeacherCodec> {}
