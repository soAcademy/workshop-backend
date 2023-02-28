import { PrismaClient } from "../../prisma/client";
import {
  ICreateManyTask,
  ICreateTask,
  IDeleteManyTasks,
  IDeleteTask,
  IFindUniqueTask,
  IUpdateManyTaskStatus,
  IUpdateTaskStatus,
} from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) => {
  const result = prisma.todolist.create({
    data: {
      task: args.task,
    },
  });
  console.log("result>>>>>", result);
  return result;
};

export const getTask = () => prisma.todolist.findMany();

export const updateTaskStatus = (args: IUpdateTaskStatus) =>
  prisma.todolist.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    },
  });

export const deleteTask = (args: IDeleteTask) => {
  return prisma.todolist.delete({ where: { id: args.id } });
};

export const createManyTask = (args: ICreateManyTask) => {
  // console.log("args", args);
  const result = prisma.todolist.createMany({
    data: args.data,
  });
  return result;
};

export const findUnique = (args: IFindUniqueTask) => {
  console.log("args", args);
  const result = prisma.todolist.findUnique({
    where: {
      id: args.id,
    },
  });
  return result;
};

export const updateManyTasks = (args: IUpdateManyTaskStatus) => {
  console.log(args);
  const result = prisma.todolist.updateMany({
    where: {
      task: args.task,
    },
    data: {
      status: args.status,
    },
  });
  return result;
};

export const deleteManyTasks = (args: IDeleteManyTasks) => {
  console.log(args);
  const result = prisma.todolist.deleteMany({
    where: {
      status: args.status,
    },
  });
  return result;
};
