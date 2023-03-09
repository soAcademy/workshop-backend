import { PrismaClient } from "../../prisma/client";

export const prisma = new PrismaClient();

export const createQuiz = (args: {
  quiz: string;
  answer: string;
  categoryId: number;
  choices: { choice: string }[];
}) => prisma.triviaQuiz.create({
  data: {
    quiz: args.quiz,
    answer: {
      create: {
        choice: args.answer
      }
    },
    choices: {
      create: args.choices
    },
    category: {
      connect: {
        id: args.categoryId
      }
    }
  }
})
