import { PrismaClient } from "../../prisma/client";
import { IcreateTask } from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: IcreateTask) =>
  prisma.todoList.create({
    data: {
      task: args.task
    }
  })