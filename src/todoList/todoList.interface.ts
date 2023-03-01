import * as t from "io-ts";

// export interface ICreateTask {
//   task: string;
// }
export const CreateTaskCodec = t.type({
  task: t.string,
});
export interface ICreateTask extends t.TypeOf<typeof CreateTaskCodec> {}

export const CreateTasksCodec = t.array(CreateTaskCodec);

export interface ICreateTasks extends t.TypeOf<typeof CreateTasksCodec> {}

// export interface IUpdateTaskStatus {
//   id: number;
//   status: string;
// }

export const UpdateTaskStatusCodec = t.type({
  id: t.number,
  status: t.string,
});

export interface IUpdateTaskStatus
  extends t.TypeOf<typeof UpdateTaskStatusCodec> {}

export const UpdateTasksStatusCodec = t.type({
  status: t.string,
  task: t.string,
});

export interface IUpdateTasksStatus
  extends t.TypeOf<typeof UpdateTasksStatusCodec> {}
