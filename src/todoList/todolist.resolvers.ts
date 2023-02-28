import { PrismaClient } from "../../prisma/client";

export const prisma = new PrismaClient();

export const createTask = (task: string) => {
  prisma.todoList.create({
    data: {
      task: task,
    },
  });
};
