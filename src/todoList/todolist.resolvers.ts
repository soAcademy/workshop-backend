import { PrismaClient } from "../../prisma/client";
import {
  ICreateTask,
  ICreateTasks,
  IUpdateTaskStatus,
} from "./todoList.interfaces";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) =>
  prisma.todoList.create({
    data: {
      task: args.task,
      bgColor: args.bgColor,
    },
  });

export const createTasks = (args: ICreateTasks) =>
  prisma.todoList.createMany({
    data: args,
  });

export const getTasks = () =>
  prisma.todoList.findMany({
    where: {
      NOT: { status: "DELETED" },
    },
    orderBy: { id: "desc" },
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
