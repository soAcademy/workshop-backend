import { PrismaClient } from "../../prisma/client";
import {
  ICreateTask,
  IDeleteTask,
  IUpdateTaskStatus,
} from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) =>
  prisma.todoList.createMany({
    data: [{ task: "Task1" }, { task: "Task2" }],
  });

export const createTaskOne = (args: { task: string }) =>
  prisma.todoList.create({
    data: {
      task: args.task,
    },
  });

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

export const updateTaskStatusOne = (args: IUpdateTaskStatus) =>
  prisma.todoList.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    },
  });

export const updateTaskStatus = (args: IUpdateTaskStatus) =>
  prisma.todoList.updateMany({
    where: {
      status: "done",
    },
    data: {
      task: "-------",
    },
  });

export const deleteTask = (args: IDeleteTask) =>
  prisma.todoList.delete({
    where: {
      id: args.id,
    },
  });

export const getTaskUnique = (args: { id: number }) =>
  prisma.todoList.findUnique({
    where: {
      id: args.id,
    },
  });
//return เป็นค่าว่าง (null)

export const getTaskUniqueOrThrow = (args: { id: number }) => {
  return prisma.todoList.findUniqueOrThrow({
    where: {
      id: args.id,
    },
  });
};
//return เป็นค่า error
