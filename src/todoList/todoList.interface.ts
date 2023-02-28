import * as t from "io-ts";

// export interface IcreateTask {
//   task: string;
// }

export const createTaskCodec = t.type({ task: t.string });

export interface IcreateTask extends t.TypeOf<typeof createTaskCodec> {}

export const updateTaskStatusCodec = t.type({ id: t.number, status: t.string });

export interface IUpdateTaskStatus
  extends t.TypeOf<typeof updateTaskStatusCodec> {}
