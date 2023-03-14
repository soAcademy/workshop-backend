import { PrismaClient } from "../../prisma/client";
import {
  ICreateQuiz,
  ICreateQuizCategory,
  ICreateRound,
  IGetQuiz,
  ISubmitQuiz,
} from "./trivia.interface";

export const prisma = new PrismaClient();

export const sumNumber = (args: {x: number, y: number}) => args.x + args.y;

export const createQuizCategory = (args: ICreateQuizCategory) =>
  prisma.triviaCategory.upsert({
    where:{category: args.category},
    create:{category: args.category},
    update:{},
  });

export const createQuiz = (args: ICreateQuiz) =>
  prisma.triviaQuestion.create({
    data: {
      quiz: args.quiz,
      answer: {
        create: {
          choice: args.answer,
        },
      },
      choices: {
        create: args.choices,
      },
      category: {
        connect: {
          id: args.categoryId,
        },
      },
    },
  });

export const getQuiz = async (args: IGetQuiz) => {
  const quizes = await prisma.triviaQuestion.findMany({
    where: {
      category: { id: args.categoryId },
    },
    include: {
      answer: true,
      choices: true,
    },
  });
  const result = quizes
    .sort((a, b) => Math.random() - 0.5)
    .slice(0, 3)
    .map((r) => ({
      id: r.id,
      quiz: r.quiz,
      choices: [
        ...r.choices
          .sort((a, b) => Math.random() - 0.5)
          .map((c) => ({
            id: c.id,
            choice: c.choice,
          })),
        {
          id: r.answer.id,
          choice: r.answer.choice,
        },
      ].sort((a, b) => Math.random() - 0.5),
    }));
  return result;
};

export const submitQuiz = async (args: ISubmitQuiz) => {
  const getUserRound = await prisma.triviaRound.findMany({
    where: {
      userId: args.userId,
    },
    orderBy: {
      id: "desc",
    },
    select: {
      userId: true,
      roundNo: true,
    },
  });
  console.log(getUserRound);

  const checkRound = getUserRound.map((r) => r.userId).includes(args.userId)
    ? getUserRound.map((r) => r.roundNo).length + 1
    : 1;

  console.log(checkRound);

  const allQuizs = await prisma.triviaQuestion.findMany({
    where: {
      categoryId: args.categoryId,
    },
    select: {
      id: true,
      triviaAnswerChoiceId: true,
    },
  });
  console.log(allQuizs);

  const checkGame = args.play.map((u) => {
    const quizsFilter = allQuizs.filter((a) => a.id === u.quizId)[0];
    return {
      quizId: u.quizId,
      choiceId: u.choiceId,
      quizResult: u.choiceId === quizsFilter.triviaAnswerChoiceId ? 1 : 0,
    };
  });
  console.log(checkGame);

  const recordPlay = await prisma.triviaRound.create({
    data: {
      categoryId: args.categoryId,
      userId: args.userId,
      roundNo: Number(checkRound),
      totalResult: checkGame.reduce((acc, r) => acc + r.quizResult, 0),
      roundQuestions: {
        create: checkGame,
      },
    },
  });
  console.log("recorded");

  const result = checkGame.map((r) => ({
    RoundNo: checkRound,
    ...r,
  }));
  return result;
};

export const createUser = (args: { user: string; avatar: string }) =>
  prisma.triviaUser.create({
    data: {
      user: args.user,
      avatar: args.avatar,
    },
  });
console.log(createUser);

export const createRound = (args: ICreateRound) =>
  prisma.triviaRound.create({
    data: {
      categoryId: args.categoryId,
      totalResult: args.totalResult,
      userId: args.userId,
      roundNo: args.roundNo,
    },
  });

export const getResults = () =>
  prisma.triviaRound.findMany({
    select: {
      createAt: true,
      category: true,
      user: true,
      roundNo: true,
      totalResult: true,
    },
    orderBy: {
      totalResult: "desc",
    },
  });

  export const getQuizCategories = async () => {
  const categoryLists = await prisma.triviaCategory.findMany()
    return categoryLists.sort((a, b) => a.id - b.id);

}