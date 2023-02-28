import e from "express";
import * as t from "io-ts";

const taskType = t.type({ task: t.string });
const noteType = t.partial({ note: t.string });

export const createTaskCodec = t.intersection([taskType, noteType]);

export const createManyTasksCodec = t.array(createTaskCodec);

export interface ICreateManyTasks
  extends t.TypeOf<typeof createManyTasksCodec> {}

export interface ICreateTask {
  task: string;
  note?: string;
}

export const getTasksCodec = t.union([
  t.record(t.string, t.undefined),
  t.type({
    status: t.string,
  }),
]);

export interface IGetTasks {
  status?: string;
}

export const updateTaskCodec = t.type({ id: t.number, status: t.string });

export interface IUpdateTask extends t.TypeOf<typeof updateTaskCodec> {}

export const deleteTaskCodec = t.type({ id: t.number });

export interface IDeleteTask extends t.TypeOf<typeof deleteTaskCodec> {}
