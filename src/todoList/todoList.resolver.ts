import { PrismaClient } from "../../prisma/client";
import {
  ICreateManyTasks,
  ICreateTask,
  IDeleteTasks,
  IGetUniqueTask,
  IUpdateTaskStatus,
} from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) =>
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
    // select: {
    //   id: true,
    //   task: true,
    //   status: true,
    // },
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

export const getUniqueTask = (args: IGetUniqueTask) =>
  prisma.todoList.findUnique({
    where: {
      id: args.id,
    },
  });

// export const createManyTasks = (args: ICreateManyTasks) =>
//   prisma.todoList.createMany({
//     data: [{ task: args.task1 }, { task: args.task2 }, { task: args.task3 }],
//   });

export const createManyTasks = (args: ICreateManyTasks) =>
  prisma.todoList.createMany({
    // data: args.data.map((r) => ({
    //   task : r.task;
    // })),
    data: args.data,
  });

export const updateManyTasks = () =>
  prisma.todoList.updateMany({
    where: {
      status: "PENDING",
    },
    data: {
      task: "-----",
    },
  });

export const deleteTasks = (args: IDeleteTasks) =>
  prisma.todoList.delete({
    where: {
      id: args.id,
    },
  });

export const deleteManyTasks = () =>
  prisma.todoList.deleteMany({
    where: {
      status: "DONE",
    },
  });
