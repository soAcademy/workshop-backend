import * as t from "io-ts";

export const CreateTaskCodec = t.type({
  task: t.string,
});

export interface ICreateTask extends t.TypeOf<typeof CreateTaskCodec> {}

export const CreateTaskManyCodec = t.array(t.type({ task: t.string }));

export interface ICreateTaskMany extends t.TypeOf<typeof CreateTaskManyCodec> {}

export const UpdateTaskStatusCodec = t.type({
  id: t.number,
  status: t.string,
});

export interface IUpdateTaskStatus
  extends t.TypeOf<typeof UpdateTaskStatusCodec> {}

export const UpdateTaskManyCodec = t.type({
  id: t.number,
  status: t.string,
  updateStatus: t.string,
});

export interface IUpdateTaskMany extends t.TypeOf<typeof UpdateTaskManyCodec> {}

export const DeleteTaskCodec = t.type({
  id: t.number,
});

export interface IDeleteTask extends t.TypeOf<typeof DeleteTaskCodec> {}

export const FindUniqueTaskCodec = t.type({
  id: t.number,
});

export interface IFindUniqueTask extends t.TypeOf<typeof FindUniqueTaskCodec> {}

export const FindUniqueOfThrowCodec = t.type({
  id: t.number,
});

export interface IFindUniqueOfThrow
  extends t.TypeOf<typeof FindUniqueOfThrowCodec> {}
