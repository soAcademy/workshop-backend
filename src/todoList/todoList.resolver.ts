import { PrismaClient } from "../../prisma/client";
import {
  ICreateManyTasks,
  ICreateTask,
  IDeleteTaskStatus,
  IFindUniqueOrThrow,
  IUpdateManyTaskByStatus,
  IUpdateTaskStatus,
} from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) =>
  prisma.todoList.create({
    data: {
      task: args.task,
    },
  });

export const createManyTasks = (args: ICreateManyTasks) =>
  prisma.todoList.createMany({
    data: args,
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

export const updateTaskStatus = (args: IUpdateTaskStatus) =>
  prisma.todoList.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    },
  });

export const updateManyTaskByStatus = (args: IUpdateManyTaskByStatus) =>
  prisma.todoList.updateMany({
    where: {
      status: args.status,
    },
    data: {
      task: args.task,
    },
  });

  // export const updateManyStatusByStatus = (args: IUpdateManyStatusByStatus) =>
  //   prisma.todoList.updateMany({
  //     where: {
  //       status: args.findStatus,
  //     },
  //     data: {
  //       status: args.updateStatus,
  //     },
  //   });

export const deleteTaskStatus = (args: IDeleteTaskStatus) =>
  prisma.todoList.delete({
    where: { id: args.id },
  });

export const findUniqueOrThrow = (args: IFindUniqueOrThrow) =>
prisma.todoList.findUniqueOrThrow({
  where: {
    id: args.id,
  }
})
