import { PrismaClient } from "../../prisma/client";
import {
  ICreateTask,
  ICreateTaskMany,
  IDeleteTask,
  IFindUniqueOfThrow,
  IFindUniqueTask,
  IUpdateTaskMany,
  IUpdateTaskStatus,
} from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) =>
  prisma.todoList.create({
    data: {
      task: args.task,
    },
  });

export const createTaskMany = (args: ICreateTaskMany) =>
  prisma.todoList.createMany({
    data: args, //args
  });

export const getTask = () =>
  prisma.todoList.findMany({
    where: { NOT: { status: "DELETE" } },
    // orderBy: { id: "desc" }, // เรียง id จาก มากไป -> น้อย
    orderBy: { status: "desc" },
  });

export const updateTaskStatus = (args: IUpdateTaskStatus) =>
  prisma.todoList.update({
    where: { id: args.id },
    data: { status: args.status },
  });

export const updateTaskMany = (args: IUpdateTaskMany) =>
  prisma.todoList.updateMany({
    where: {
      id: args.id,
      status: args.status,
    },
    data: { status: args.updateStatus },
  });

export const deleteTask = (args: IDeleteTask) =>
  prisma.todoList.delete({
    where: { id: args.id },
  });

export const findUniqueTask = (args: IFindUniqueTask) =>
  prisma.todoList.findUnique({
    where: { id: args.id },
  });

export const findUniqueOrThrow = (args: IFindUniqueOfThrow) =>
  prisma.todoList.findUniqueOrThrow({
    where: { id: args.id },
  });
