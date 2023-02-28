import { PrismaClient } from "../../prisma/client";
import {
  ICreateManyTask,
  ICreateTask,
  IDeleteTask,
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

