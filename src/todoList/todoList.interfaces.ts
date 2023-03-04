import * as t from "io-ts";

export const CreateTaskCodec = t.type({ task: t.string, bgColor: t.string });

export interface ICreateTask extends t.TypeOf<typeof CreateTaskCodec> {}

// export interface ICreateTask {
//   task: string;
// }

export const CreateTasksCodec = t.array(CreateTaskCodec);

export interface ICreateTasks extends t.TypeOf<typeof CreateTasksCodec> {}

export const UpdateTaskStatusCodec = t.type({
  id: t.number,
  status: t.string,
});

export interface IUpdateTaskStatus
  extends t.TypeOf<typeof UpdateTaskStatusCodec> {}

// export interface IUpdateTaskStatus {
//   id: number;
//   status: string;
// }
