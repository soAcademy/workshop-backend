import { PrismaClient } from "../../prisma/client";
import { IUpdateTaskStatus, IcreateTask } from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: IcreateTask) =>
  prisma.todoList.create({
    data: {
      task: args.task,
    },
  });

export const getTasks = () =>
  prisma.todoList.findMany({
    where: {
      NOT: {
        status: "DELETED",
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

export const createManyTasks = () =>
  prisma.todoList.createMany({
    data: [
      { task: "SQL", status: "Under progress" },
      { task: "CSS", status: "Completed" },
    ],
  });

export const updateManyTaskStatuses = () =>
  prisma.todoList.updateMany({
    where: {
      status: "Completed",
    },
    data: {
      task: "React",
    },
  });

export const findUniqueTask = () =>
  prisma.todoList.findUnique({
    where: {
      id: 1,
    },
  });

export const deleteTask = () =>
  prisma.todoList.delete({
    where: {
      id: 1,
    },
  });

export const deleteManyTask = () =>
  prisma.todoList.deleteMany({
    where: {
      status: "Under progress",
    },
  });
