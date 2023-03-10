import { string } from "io-ts";
import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateQuizCodec,
  IGetQuizbyCategoryCodec,
} from "./QuestionQuiz.interface";
import { connect } from "http2";
import { choice } from "fp-ts";
import { Agent } from "http";
import { id } from "fp-ts/lib/Refinement";
export const prisma = new PrismaClient();

export const getAllCategory = () => prisma.questionCategory.findMany({});

export const createCategory = (args: ICreateCategory) =>
  prisma.questionCategory.create({
    data: {
      name: args.name,
    },
  });

export const createQuiz = (args: ICreateQuizCodec) =>
  prisma.question.create({
    data: {
      textQuestion: args.question,
      answer: {
        create: {
          choiceName: args.answer,
        },
      },
      choice: {
        create: args.choices,
      },
      questionCategories: {
        connect: {
          id: args.categoryId,
        },
      },
    },
  });

//---------------------------------------------------------

export const getQuiz = (args: { questionId: number; choiceId: number }) => {
  const result = prisma.question.findUnique({
    where: {
      id: args.questionId,
    },
    include: {
      choice: true,
      answer: true,
    },
  });
};

//ตอนกดเลือก category
export const getQuizbyCategory = async (args: IGetQuizbyCategoryCodec) => {
  const result = await prisma.question.findMany({
    where: {
      questionCategoryId: args.categoryId,
    },
    include: {
      answer: true,
      choice: true,
    },
  });
  const question = result
    .sort((a, b) => Math.random() - 0.5)
    .slice(0, 3)
    .map((r) => ({
      id: r.id,
      question: r.questionCategoryId,
      choices: [
        ...r.choice
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, 3)
          .map((c) => ({
            id: c.id,
            choice: c.choiceName,
          })),
        {
          id: r.answer.id,
          choice: r.answer.choiceName,
        },
      ].sort((a, b) => Math.random() - 0.5),
    }));

  return result;
};
export const submitQuiz = async (args: {
  userId: number;
  questionCategoryId: number;
  questions: {
    questionId: number;
    userChoose: number;
  }[];
}) => {
  const getQuestionforCompare = await prisma.question.findMany({
    where: {
      id: {
        in: args.questions.map((r) => {
          return r.questionId;
        }),
      },
    },
    //ได้คำถามที่จะเอาไปคำนวณ score ต่อ
  });

  const answerResult = args.questions.map((r) => {
    return {
      ...r,
      correct:
        getQuestionforCompare.find((question) => question.id === r.questionId)
          ?.answerId === r.userChoose,
    };
  });

  prisma.roundQuiz.create({
    data: {
      userId: args.userId,
      questionCategoryId: args.questionCategoryId,
      score: answerResult.filter((r) => r.correct === true).length,
      RoundDetail: {
        create: answerResult.map((r, index) => ({
          questionId: r.questionId,
          questionOrder: index + 1,
          userChoose: r.userChoose,
          result: r.correct,
        })),
      },
    },
  });
  return answerResult;
};

// export const getResult = () => prisma.roundDetail.create({});
