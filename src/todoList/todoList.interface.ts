import * as t from "io-ts";

// export interface IcreateTask {
//   task: string;
// }

export const createTaskCodec = t.type({ task: t.string });

export interface ICreateTask extends t.TypeOf<typeof createTaskCodec> {}

export const updateTaskStatusCodec = t.type({ id: t.number, status: t.string });

export interface IUpdateTaskStatus
  extends t.TypeOf<typeof updateTaskStatusCodec> {}

// export const createManyTasksCodec = t.type({ task: t.string, status: t.string });

// export interface ICreateManyTasks {tasks:{task: string; status: string}[]}

export const createManyTasksCodec = t.type({
  data: t.array(t.type({ task: t.string })),
});

export interface ICreateManyTasks
  extends t.TypeOf<typeof createManyTasksCodec> {}
