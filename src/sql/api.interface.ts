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
