import { PrismaClient } from "../../prisma/client";
import { ICreateCategory, ICreateQuiz } from "./binQuiz.interfaces";

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

export const createQuiz = (args: ICreateQuiz) => {
  return prisma.quiz.create({
    data: {
      questionText: args.questionText,
      category: { connect: { id: args.quizCategoryId } },
      correctChoice: { create: args.correctChoice },
      otherChoices: { create: args.otherChoices },
    },
  });
};
