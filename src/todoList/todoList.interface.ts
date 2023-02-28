import * as t from "io-ts";

export const CreateCodec = t.type({
  task: t.string,
});
export interface ICreateTask extends t.TypeOf<typeof CreateCodec> {}

export const CreateManyCodec = t.type({ data: t.array(CreateCodec) });
export interface ICreateMany extends t.TypeOf<typeof CreateManyCodec> {}

export const GetTaskUniqueCodec = t.type({ id: t.number });
export interface IGetTaskUnique extends t.TypeOf<typeof GetTaskUniqueCodec> {}

export const UpdateTaskCodec = t.type({
  id: t.number,
  status: t.string,
});
export interface IUpdateTaskStatus extends t.TypeOf<typeof UpdateTaskCodec> {}

export const UpdateManyCodec = t.type({
  curr_status: t.string,
  status: t.string,
});
export interface IUpdateMany extends t.TypeOf<typeof UpdateManyCodec> {}

export const DeleteIdCodec = t.type({ id: t.number });
export interface IDeleteId extends t.TypeOf<typeof DeleteIdCodec> {}
