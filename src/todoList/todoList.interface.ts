import * as t from "io-ts";

export const createTaskCodec = t.type({
  data: t.array(
    t.type({
      task: t.string,
    })
  ),
});

export interface ICreateTask extends t.TypeOf<typeof createTaskCodec> {}

//--------------------------------------------

export const createTaskOneCodec = t.type({
  task: t.string,
});

export interface ICreateTaskOne extends t.TypeOf<typeof createTaskOneCodec> {}

//--------------------------------------------
export const updateTaskStatusOneCodec = t.type({
  id: t.number,
  status: t.string,
});

export interface IUpdateTaskStatusOneCodec
  extends t.TypeOf<typeof updateTaskStatusOneCodec> {}

//--------------------------------------------

export const updateTaskStatusCodec = t.type({
  id: t.number,
  status: t.string,
});

export interface IUpdateTaskStatus
  extends t.TypeOf<typeof updateTaskStatusCodec> {}

//--------------------------------------------

export const deleteTaskCodec = t.type({
  id: t.number,
});

export interface IDeleteTask extends t.TypeOf<typeof deleteTaskCodec> {}

//---------------------------------------------

export const findUniqueCodec = t.type({
  id: t.number,
});

export interface IFindUnique extends t.TypeOf<typeof findUniqueCodec> {}

//---------------------------------------------

export const getTaskUniqueOrThrowCodec = t.type({
  id: t.number,
});

export interface ITaskUniqueOrThrow
  extends t.TypeOf<typeof getTaskUniqueOrThrowCodec> {}

//---------------------------------------------
