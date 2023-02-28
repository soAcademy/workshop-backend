import { PrismaClient } from "../../prisma/client";
import { ICreateTask, IUpdateTaskStatus } from "./todoList.interface";

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
