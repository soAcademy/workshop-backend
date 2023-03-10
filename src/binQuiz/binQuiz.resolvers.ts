import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateQuiz,
  ICreateRound,
} from "./binQuiz.interfaces";

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

export const getQuizzes = () => {
  return prisma.quiz.findMany({
    select: {
      category: {
        select: {
          name: true,
        },
      },
      questionText: true,
      correctChoice: { select: { answerText: true } },
      otherChoices: { select: { answerText: true } },
    },
  });
};

export const getQuizzesByCategory = (args: { categoryId: number }) => {
  return prisma.quiz.findMany({
    select: {
      category: {
        select: {
          name: true,
        },
      },
      questionText: true,
      correctChoice: { select: { answerText: true } },
      otherChoices: { select: { answerText: true } },
    },
    where: { category: { id: args.categoryId } },
  });
};

export const createRound = (args: ICreateRound) => {};
