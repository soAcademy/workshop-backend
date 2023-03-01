import { PrismaClient } from "../../prisma/client-food";
import { IAddCategory } from "./foodOrdering.interface";

export const prisma = new PrismaClient();

export const addCategory = (args: IAddCategory) => {
  return prisma.category.create({
    data: { name: args.name },
  });
};
