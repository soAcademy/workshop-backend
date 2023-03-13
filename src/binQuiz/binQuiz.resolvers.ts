import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateQuiz,
  ICreateRound,
} from "./binQuiz.interfaces";

export const prisma = new PrismaClient();

export const sumNumbers = (args: { number1: number; number2: number }) =>
  args.number1 + args.number2;

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
      id: true,
      category: {
        select: {
          name: true,
        },
      },
      questionText: true,
      correctChoice: { select: { id: true, answerText: true } },
      otherChoices: { select: { id: true, answerText: true } },
    },
    where: { category: { id: args.categoryId } },
  });
};

export const getCorrectChoiceByQuiz = (args: { id: number }) => {
  return prisma.quiz.findUnique({
    select: {
      correctChoice: { select: { id: true } },
    },
    where: { id: args.id },
  });
};

export const createRound = (args: ICreateRound) => {
  // prisma.shuffledQuizzes.create
  return prisma.round.create({
    data: {
      quizCategoryId: args.quizCategoryId,
      // create: {
      //   shuffledQuizzes:
      // }
    },
  });
};
