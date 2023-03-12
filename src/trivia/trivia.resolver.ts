import { PrismaClient } from "../../prisma/client";
import {
  ICreateQuizCategory,
  ICreateQuiz,
  IGetQuiz,
  ISubmitQuiz,
} from "./trivia.interface";

export const prisma = new PrismaClient();

export const createQuizCategory = (args: ICreateQuizCategory) =>
  prisma.quizCategory.create({
    data: {
      name: args.name,
    },
  });

export const getCategories = () => prisma.quizCategory.findMany();

export const createQuiz = (args: ICreateQuiz) =>
  prisma.quizQuestion.create({
    data: {
      name: args.name,
      answer: {
        create: {
          choice: args.answer,
        },
      },
      quizChoices: {
        create: args.quizChoices,
      },
      category: {
        connect: {
          id: args.category,
        },
      },
    },
  });

export const getQuiz = async (args: IGetQuiz) => {
  const quizzes = await prisma.quizQuestion.findMany({
    where: {
      category: {
        id: args.categoryId, //find by categoryId available in quizQuestion
      },
    },
    include: {
      answer: true, //in relation with "quizChoice"
      quizChoices: true, //in relation with "quizChoice" => is an array according to prisma
    },
  });

  const result = quizzes
    .sort((a, b) => Math.random() - 0.5) //0.5 for a fair shuffle of questions
    .slice(0, 3) //slice three questions out of all questions
    .map((r) => ({
      id: r.id,
      quiz: r.name,
      choices: [
        ...r.quizChoices
          .sort((a, b) => Math.random() - 0.5) //shuffle all choices without answer (answer will always be the last choice)
          .slice(0, 3) // get only 3 choices out of all choices availabe in the question (eg 3 out of 5 choices)
          .map((c) => ({
            id: c.id,
            choice: c.choice,
          })),
        {
          id: r.answer.id,
          choice: r.answer.choice,
        },
      ].sort((a, b) => Math.random() - 0.5), //shuffle choice order (include answer)
    }));

  return result;
};

export const submitQuiz = async (args: ISubmitQuiz) => {
  const quizzes = await prisma.quizQuestion.findMany({
    where: {
      OR: args.quizRecords.map((r) => ({ id: r.quizQuestionId })), //the "where" clause of the query uses an OR operator to search for quiz questions that match any of the ids provided in the args.quizRecord array.
    },
  });
  const totalScore = args.quizRecords.reduce((acc, r) => {
    const findQuiz = quizzes.find((s) => s.id === r.quizQuestionId); //finds the corresponding quiz question object in the quizzes array using its id property  (check each object in the array)
    const isCorrect = findQuiz?.quizAnswerChoiceId === r.choice; //checking if the quizAnswerChoiceId property of the object matches the user's answer
    return acc + (isCorrect ? 1 : 0); //If the user's answer matches the correct answer, the accumulator is incremented by 1, otherwise, it remains unchanged.
  }, 0);

  const result = await prisma.quizRound.create({
    data: {
      name: args.name,
      totalScore: totalScore,
      category: {
        connect: {
          id: args.category,
        },
      },
      quizRecords: {
        create: args.quizRecords.map((r) => ({
          quizQuestionId: r.quizQuestionId,
          quizChoiceId: r.choice,
        })),
      },
    },
  });

  return result;
};

export const getResults = async () => {
  const result = await prisma.quizRound.findMany();
  return result;
};
