import { task } from "fp-ts";
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

export interface IGetUniqueTask {
  id: number;
}

export const getUniqueTaskCodec = t.type({
  id: t.number,
});

// export interface ICreateManyTasks {
//   task1: string;
//   task2: string;
//   task3: string;
// }

// export const createManyTasksCodec = t.type({
//   task1: t.string,
//   task2: t.string,
//   task3: t.string,
// });

export interface ICreateManyTasks {
  data: {
    task: string;
  }[];
}

export const createManyTasksCodec = t.type({
  data: t.array(t.type({ task: t.string })),
});

export interface IDeleteTasks {
  id: number;
}

export const deleteTasksCodec = t.type({
  id: t.number,
});
