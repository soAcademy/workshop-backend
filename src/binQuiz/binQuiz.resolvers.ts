import { PrismaClient } from "../../prisma/client";
import { ICreateCategory } from "./binQuiz.interfaces";

export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) => {
  return prisma.quizCategory.create({
    data: {
      name: args.name,
    },
  });
};

export const getCategories = () => {
  return prisma.quizCategory.findMany({
    orderBy: { name: "asc" },
  });
};
