import { PrismaClient } from "../../prisma/client";
import { ICreateCategory } from "./binKitchen.interfaces";

export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) => {
  return prisma.category.create({
    data: {
      name: args.name,
    },
  });
};
