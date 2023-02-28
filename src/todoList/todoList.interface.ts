export interface ICreateTask {
  task: string;
}

export interface IUpdateTaskStatus {
  id: number;
  status: string;
  task?: string;
}