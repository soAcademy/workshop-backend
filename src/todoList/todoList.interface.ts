// จัดการตัวที่สาม
export interface ICreateTask {
  task: string;
}

export interface IGetTasks {
  id: number;
  status: string;
}

export interface IUpdateTaskStatus {
  id: number;
  status: string;
  task: string;
}

export interface ICreateManyTasks {
  id: number;
  // status: string;
  task: string;
}

export interface IDeleteTasks {
  id: number;
  status: string;
}

export interface IDeleteManyTasks {
  id: number;
  status: string;
}

export interface IUpdateTasks {
  id: number;
  status: string;
  task: string;
}

export interface IFindThrow {
  id: number;
  status: string;
}

export interface IFindTask {
  id: number;
  status: string;
}

export interface IGetTasks {
  id: number;
  status: string;
};