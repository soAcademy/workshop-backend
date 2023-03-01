import { PrismaClient } from "../../prisma/client";
import {
  ICreateTask,
  ICreateTasks,
  IUpdateTasksStatus,
  IUpdateTaskStatus,
} from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) =>
  prisma.todoList.create({
    data: {
      task: args.task,
    },
  });

export const createTasks = (args: ICreateTasks) => {
  console.log(args);
  return prisma.todoList.createMany({
    data: args,
  });
};

export const getTasks = () =>
  prisma.todoList.findMany({
    where: {
      NOT: {
        status: "DELETE",
      },
    },
    orderBy: {
      id: "desc",
    },
  });

export const getUniqueTasks = (args: { id: number }) =>
  prisma.todoList.findUnique({
    where: {
      id: args.id,
    },
  });

export const updateTaskStatus = (args: IUpdateTaskStatus) =>
  prisma.todoList.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    },
  });

export const updateTasksStatus = (args: IUpdateTasksStatus) =>
  prisma.todoList.updateMany({
    where: {
      status: args.status,
    },
    data: {
      task: args.task,
    },
  });

  export const deleteTasks = (args: { id: number }) =>
  prisma.todoList.delete({
    where: {
      id: args.id,
    },
  });
