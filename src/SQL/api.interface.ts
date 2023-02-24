import * as t from "io-ts";

// 1. getTeacher ไม่ต้อง validate

// todo 2. getTeacherByAge
export const GetTeachersByAgeCodec = t.type({
  age: t.number,
});

// todo 3. getTeacherByName
export const GetTeachersByNameCodec = t.type({
  name: t.string,
});

// 4. getCourses ไม่ต้อง validate

// 5. getCoursesWithJoin ไม่ต้อง validate

// todo 6. createTeacher
export const CreateTeacherCodec = t.type({
  name: t.string,
  age: t.number,
});

export interface ICreateTeacher extends t.TypeOf<typeof CreateTeacherCodec> {}

// todo 7. updateTeacher
export const UpdateTeacherCodec = t.type({
  id: t.number,
  name: t.string,
  age: t.number,
});

export interface IUpdateTeacher extends t.TypeOf<typeof UpdateTeacherCodec> {}

// todo 8. deleteTeacher
export const DeleteTeacherCodec = t.type({
  id: t.number,
});