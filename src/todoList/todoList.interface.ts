import * as t from "io-ts";

export const createTaskCodec = t.type({
  task: t.string,
});

export interface ICreateTask extends t.TypeOf<typeof createTaskCodec> {}

export const createManyTasksCodec = t.array(createTaskCodec);
export interface ICreateManyTasks
  extends t.TypeOf<typeof createManyTasksCodec> {}

export const updateTaskCodec = t.type({
  id: t.number,
  status: t.string,
});

export interface IUpdateTask extends t.TypeOf<typeof updateTaskCodec> {}

export const updateManyTasksCodec = t.type({
  status1: t.string,
  status2: t.string,
});

export interface IUpdateManyTasks
  extends t.TypeOf<typeof updateManyTasksCodec> {}

export const findUniqueTaskCodec = t.type({
  id: t.number,
});

export interface IFindUniqueTask extends t.TypeOf<typeof findUniqueTaskCodec> {}

export const findUniqueOrThrowTaskCodec = t.type({
  id: t.number,
});

export interface IFindUniqueOrThrowTask
  extends t.TypeOf<typeof findUniqueOrThrowTaskCodec> {}

export const deleteTaskCodec = t.type({
  id: t.number,
});

export interface IDeleteTask extends t.TypeOf<typeof deleteTaskCodec> {}

export const deleteManyTasksCodec = t.type({
  status: t.string,
});
export interface IDeleteManyTasks
  extends t.TypeOf<typeof deleteManyTasksCodec> {}
