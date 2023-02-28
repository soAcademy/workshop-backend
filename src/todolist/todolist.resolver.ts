import { PrismaClient } from "../../prisma/client";
import {
  ICreateManyTasks,
  ICreateTask,
  IDeleteTask,
  IGetTasks,
  IUpdateTask,
} from "./todolist.interface";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) =>
  prisma.todoList.create({
    data: {
      task: args.task,
      note: args.note,
    },
  });

export const createManyTasks = (args: ICreateManyTasks) =>
  prisma.todoList.createMany({
    data: args.map((e) => ({
      task: e.task,
      note: e.note,
    })),
  });

export const getTasks = (args: IGetTasks) =>
  args.status ?
  prisma.todoList.findMany({
    where: {
      OR: { status: args.status },
    },
    orderBy: {
      id: "desc",
    },
  })
  : prisma.todoList.findMany({
    orderBy: {
      id: "desc",
    },
  })

export const getPendingTasks = (args: IUpdateTask) =>
  prisma.todoList.findMany({
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

export const deleteTask = (args: IDeleteTask) =>
  prisma.todoList.delete({
    where: {
      id: args.id,
    },
  });

export const deleteDoneTasks = () =>
  prisma.todoList.deleteMany({
    where: {
      status: "DONE",
    },
  });
