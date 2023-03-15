import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategoryTrivia,
  ICreateQuizTrivia,
  IGetQuizTrivia,
  ISubmitQuizTriviaTrivia,
  IUpdateQuizTrivia,
} from "./triviaQuiz.interface";

export const prisma = new PrismaClient();

export const createCategoryTrivia = (args: ICreateCategoryTrivia) =>
  prisma.triviaCategory.create({
    data: {
      categoryName: args.name,
    },
  });

export const getCategoryTrivia = () => prisma.triviaCategory.findMany();

export const createQuizTrivia = (args: ICreateQuizTrivia) =>
  prisma.triviaQuiz.create({
    data: {
      quizName: args.name,
      answer: { create: { choiceName: args.answer } },
      TriviaChoice: {
        create: args.choices.map((r) => ({ choiceName: r.choice })),
      },
      category: {
        connect: {
          id: args.categoryId,
        },
      },
    },
  });

export const getQuizTrivia = async (args: IGetQuizTrivia) => {
  const quizes = await prisma.triviaQuiz.findMany({
    where: {
      categoryId: args.categoryId,
    },
    include: {
      answer: true,
      TriviaChoice: true,
    },
  });
  const result = quizes
    .sort((a, b) => Math.random() - 0.5)
    .slice(0, 3)
    .map((r) => ({
      id: r.id,
      quizName: r.quizName,
      TriviaChoice: [
        ...r.TriviaChoice.sort((a, b) => Math.random() - 0.5)
          .slice(0, 3)
          .map((c) => ({ id: c.id, choiceName: c.choiceName })),
        {
          id: r.answer.id,
          choiceName: r.answer.choiceName,
        },
      ].sort((a, b) => Math.random() - 0.5),
    }));
  return result;
};

export const submitQuizTrivia = async (args: ISubmitQuizTriviaTrivia) => {
  const quizes = await prisma.triviaQuiz.findMany();
  const totalScore = args.TriviaRoundQuiz.reduce((acc: any, r: any) => {
    const isCorrect =
      quizes.find((s) => s.id === r.quizId)?.triviaAnswerChoiceId ===
      r.playerChooseChoice;
    return acc + (isCorrect ? 1 : 0);
  }, 0);

  console.log("totalScore", totalScore);

  const result = prisma.triviaRound.create({
    data: {
      categoryId: args.categoryId,
      name: args.name ?? undefined,
      score: totalScore,
      triviaRoundQuiz: {
        create: args.TriviaRoundQuiz.map((r) => ({
          quizId: r.quizId,
          playerChooseChoice: r.playerChooseChoice,
        })),
      },
    },
  });
  return result;
};

export const getResultsTrivia = () =>
  prisma.triviaRound.findMany({
    orderBy: { score: "desc" },
  });

export const updateQuizTrivia = (args: IUpdateQuizTrivia) =>
  prisma.triviaQuiz.update({
    where: { id: args.id },
    data: {
      answer: { create: { choiceName: args.answer } },
      TriviaChoice: {
        create: args.choices.map((r) => ({ choiceName: r.choice })),
      },
      category: {
        connect: {
          id: args.categoryId,
        },
      },
    },
  });
