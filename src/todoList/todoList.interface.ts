import * as t from "io-ts";

// createTask
export const createTaskCodec = t.type({
  task: t.string,
});
export interface ICreateTask extends t.TypeOf<typeof createTaskCodec> {}

// createMany
export const createManyTasksCodec = t.array(createTaskCodec);
export interface ICreateManyTasks
  extends t.TypeOf<typeof createManyTasksCodec> {}

// updateTaskStatus
export const updateTaskStatusCodec = t.type({
  id: t.number,
  status: t.string,
});
export interface IUpdateTaskStatus
  extends t.TypeOf<typeof updateTaskStatusCodec> {}

// updateManyTasksByStatus
export const updateManyTasksByStatusCodec = t.type({
  status: t.string,
  task: t.string,
});
export interface IUpdateManyTaskByStatus
  extends t.TypeOf<typeof updateManyTasksByStatusCodec> {}

// deleteTaskStatus
export const deleteTaskStatusCodec = t.type({
  id: t.number,
});
export interface IDeleteTaskStatus
  extends t.TypeOf<typeof deleteTaskStatusCodec> {}

  // deleteManyStatus

  // findUniqueOrThrow
  export const findUniqueOrThrowCodec = t.type({
    id: t.number,
  })
  export interface IFindUniqueOrThrow extends t.TypeOf<typeof findUniqueOrThrowCodec> {}