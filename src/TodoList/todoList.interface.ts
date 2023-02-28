import * as t from "io-ts";

export const CreateTaskCodec= t.type({
  task : t.string, 
})
export interface ICreateTask extends t.TypeOf<typeof CreateTaskCodec>{}
  
export const UpdateTaskStatusCodec = t.type({
  id:t.number,
  status:t.string,
})
export interface IUpdateTaskStatus extends t.TypeOf<typeof UpdateTaskStatusCodec>{}