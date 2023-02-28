import * as t from "io-ts";

export interface ICreateTask {
  task: string;
}

export const createTaskCodec = t.type({
  task: t.string,
});

export interface IUpdateTaskStatus {
  id: number;
  status: string;
}

export const updateTaskStatusCodec = t.type({
  id: t.number,
  status: t.string,
});
