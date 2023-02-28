import * as t from "io-ts";

const taskType = t.type({ task: t.string });
const noteType = t.partial({ note: t.string });

export const createTaskCodec = t.intersection([taskType, noteType]);

export interface ICreateTask {
  task: string;
  note?: string;
}

export const updateTaskCodec = t.type({ id: t.number, status: t.string });

export interface IUpdateTask extends t.TypeOf<typeof updateTaskCodec> {}

