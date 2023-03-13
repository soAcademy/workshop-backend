import { PrismaClient } from "../../prisma/client-trivia";
import {
  ICreateCategory,
  ICreateQuestion,
  IGetQuestions,
  ISubmitAnswer,
} from "./interface";

export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) => {
  return prisma.category.upsert({
    where: { name: args.name },
    create: { name: args.name },
    update: {},
  });
};

export const getCategories = () => {
  return prisma.category.findMany();
};

export const createQuestion = (args: ICreateQuestion) => {
  return prisma.question.create({
    data: {
      question: args.question,
      category: {
        connect: {
          id: args.categoryId,
        },
      },
      answer: {
        create: {
          choice: args.answer,
        },
      },
      choices: {
        createMany: {
          data: args.choices.map((e) => ({
            choice: e,
          })),
        },
      },
    },
  });
};

export const getQuestions = async (args: IGetQuestions) => {
  const questions = await prisma.question.findMany({
    where: {
      categoryId: args.categoryId,
    },
    select: {
      id: true,
      question: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
      choices: {
        select: {
          id: true,
          choice: true,
        },

        take: args.choiceAmount,
      },
      answer: {
        select: {
          id: true,
          choice: true,
        },
      },
    },
  });
  const randomQuestions = questions
    .sort(() => 0.5 - Math.random())
    .slice(0, args.questionAmount);
  return randomQuestions.map((question) => ({
    id: question.id,
    question: question.question,
    choices: [...question.choices, question.answer].sort(
      () => 0.5 - Math.random()
    ),
    category: question.category?.name,
    categoryId: question.category?.id
  }));
};

export const submitAnswer = async (args: ISubmitAnswer) => {
  const correctQuestions = await prisma.question.findMany({
    where: {
      OR: args.answer.map((e) => ({
        id: e.questionId,
        answerChoiceId: e.answerChoiceId,
      })),
    },
  });
  const result = args.answer.map((question) => {
    return {
      ...question,
      correct:
        correctQuestions.find((e) => e.id === question.questionId)
          ?.answerChoiceId === question.answerChoiceId,
    };
  });

  const returnResult = {
    result: result,
    score: result.filter((e) => e.correct).length,
  };

  await prisma.game.create({
    data: {
      user: {
        connectOrCreate: {
          where: {
            name: args.userName,
          },
          create: {
            name: args.userName,
          },
        },
      },
      category: {
        connect: {
          id: args.categoryId,
        },
      },
      score: returnResult.score,
      rounds: {
        createMany: {
          data: args.answer.map((e) => ({
            questionsId: e.questionId,
            selectedChoiceId: e.answerChoiceId,
          })),
        },
      },
    },
  });

  const { bestScore }: any = await prisma.user.findFirst({
    where: {
      name: args.userName,
    },
  });
  returnResult.score > bestScore &&
    (await prisma.user.update({
      where: {
        name: args.userName,
      },
      data: {
        bestScore: returnResult.score,
      },
    }));
  return returnResult;
};

export const getGameHistories = () => {
  return prisma.game.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
      category: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const getRanking = () => {
  return prisma.user.findMany({
    select: {
      id:true,
      name: true,
      bestScore: true,
    },
    orderBy: {
      bestScore: "desc"
    }
  })
}