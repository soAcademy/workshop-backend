import * as t from "io-ts";

export const CreateTaskCodec = t.type({
  task: t.string,
});
export interface ICreateTask extends t.TypeOf<typeof CreateTaskCodec> {}

export const UpdateTaskStatusCodec = t.type({
  id: t.number,
  status: t.string,
});
export interface IUpdateTaskStatus
  extends t.TypeOf<typeof UpdateTaskStatusCodec> {}

export const DeleteTaskCodec = t.type({
  id: t.number,
});
export interface IDeleteTask extends t.TypeOf<typeof DeleteTaskCodec> {}

export const CreateManyTaskCodec = t.type({
  data: t.array(t.type({ task: t.string })),
});

export interface ICreateManyTask extends t.TypeOf<typeof CreateManyTaskCodec> {}

// export interface IFindUnique {
//   id: number;
// }

export const FindUniqueTaskCodec = t.type({ id: t.number });
export interface IFindUniqueTask extends t.TypeOf<typeof FindUniqueTaskCodec> {}

// export interface IUpdateManyTaskStatus{
//   task: string,
//   status: string,
// }

export const UpdateManyTaskStatusCodec = t.type({
  task: t.string,
  status: t.string,
});
export interface IUpdateManyTaskStatus
  extends t.TypeOf<typeof UpdateManyTaskStatusCodec> {}

export interface IDeleteManyTasks {
  status: string;
}

export const DeleteManyTaskCodec = t.type({ status: t.string });
export interface IDeleteManyTasks
  extends t.TypeOf<typeof DeleteManyTaskCodec> {}

export const UpdateNoteCodec = t.type({ status: t.string, notes: t.string });
export interface IUpdateNote extends t.TypeOf<typeof UpdateNoteCodec> {}
