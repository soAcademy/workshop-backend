import { PrismaClient } from "../../prisma/client";
import { ICreateTask } from "./todoList.interfaces";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) => {
  prisma.todoList.create({
    data: {
      task: args.task,
    },
  });
};
