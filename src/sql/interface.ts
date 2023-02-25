import * as t from "io-ts";
export const getTeachersCodec = t.array(
  t.type({
    id: t.number,
    name: t.string,
    age: t.number,
  })
);

export const getTeachersByAgeCodec = t.type({
  age: t.number,
});

export const getTeachersByNameCodec = t.type({
  name: t.string,
});

export const createTeacherCodec = t.type({
  name: t.string,
  age: t.number,
});

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
