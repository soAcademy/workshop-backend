import * as t from "io-ts";

export interface IGetTeachersByAge {
  age: number;
}

export const getTeachersByAgeCodec = t.type({ age: t.number });

export interface IGetTeachersByName {
  name: string;
}

export const getTeachersByNameCodec = t.type({ name: t.string });

export interface ICreateTeacher {
  name: string;
  age: number;
}

export const createTeacherCodec = t.type({
  name: t.string,
  age: t.number,
});

export interface IUpdateTeacher {
  name: string;
  age: number;
  id: number;
}

export const updateTeacherCodec = t.type({
  name: t.string,
  age: t.number,
  id: t.number,
});

export interface IDeleteTeacher {
  id: number;
}

export const deleteTeacherCodec = t.type({
  id: t.number,
});