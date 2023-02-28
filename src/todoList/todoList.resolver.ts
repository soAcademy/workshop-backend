import { PrismaClient } from "../../prisma/client";
import {
  ICreateManyTasks,
  ICreateTask,
  IUpdateManyTasks,
  IUpdateTask,
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

export const updateTask = (args: IUpdateTask) =>
  prisma.todoList.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    },
  });

export const updateManyTasks = (args: IUpdateManyTasks) =>
  prisma.todoList.updateMany({
    where: {
      status: args.status1,
    },
    data: {
      status: args.status2,
    },
  });


