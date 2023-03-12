import { string } from "io-ts";
import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateQuizCodec,
  IGetQuizbyCategoryCodec,
  ISubmitQuiz,
} from "./QuestionQuiz.interface";
import { connect } from "http2";
import { choice } from "fp-ts";
import { Agent } from "http";
import { id } from "fp-ts/lib/Refinement";
import { checkPrime } from "crypto";
export const prisma = new PrismaClient();

export const getAllCategory = () => prisma.questionCategory.findMany({});

export const createUser = (args: { name: string }) =>
  prisma.user.create({
    data: {
      name: args.name,
    },
  });

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
        //relation
        create: args.choices,
      },
      questionCategories: {
        //relation
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
  const tempResult = [...result];
  const generatedQuestion = tempResult
    .sort((a, b) => Math.random() - 0.5)
    .slice(0, 3)
    .map((r) => ({
      questionId: r.id,
      categoryId: r.questionCategoryId,
      choices: [
        ...r.choice
          .sort((a, b) => Math.random() - 0.5)
          //math random + จะสลับ A,B
          //math random เป็น - ตัว A,B จะอยู่ที่เดิม
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

  // console.log(JSON.stringify(question, null, 2));
  const roundQuizId = await prisma.roundQuiz.create({
    data: {
      score: 0,
      questionCategoryId: args.categoryId,
      userId: args.userId,
    },
    select: {
      id: true,
    },
  });
  await prisma.roundQuestionDetail.createMany({
    data: generatedQuestion.map((question, index) => ({
      roundQuizId: roundQuizId.id,
      questionId: question.questionId,
      questionOrder: index,
      result: false,
    })),
  });
  await prisma.roundQuestionChoiceDetail.createMany({
    data: generatedQuestion.reduce((arr: any, cur) => {
      const choices = cur.choices.map((choice) => ({
        roundQuizId: roundQuizId.id,
        questionId: cur.questionId,
        choiceId: choice.id,
      }));
      arr.push(...choices);
      return arr;
    }, []),
  });
  for (const key in generatedQuestion) {
    Object.assign(generatedQuestion[key], { roundQuizId: roundQuizId.id });
  }
  return generatedQuestion;
};

export const submitQuiz = async (args: ISubmitQuiz) => {
  const allQuestion = await prisma.question.findMany({
    where: {
      questionCategoryId: args.categoryId,
    },
  });
  const checkedAnswer = args.questions.map((userQuestion) => {
    const isCorrect = allQuestion.find(
      (rawQuestion) =>
        rawQuestion.id === userQuestion.questionId &&
        rawQuestion.answerId === userQuestion.userChoose
    );
    const result = isCorrect ? true : false;
    return {
      roundQuiz: args.roundQuizId,
      questionId: userQuestion.questionId,
      userChooseId: userQuestion.userChoose,
      result,
    };
  });
  // console.log(JSON.stringify(checkedAnswer, null, 2));
  const countedScore = checkedAnswer.reduce((arr, cur) => {
    return cur.result ? arr + 1 : arr;
  }, 0);

  const roundQuestionDetailByRoundQuizId =
    await prisma.roundQuestionDetail.findMany({
      where: {
        roundQuizId: args.roundQuizId,
      },
    });

  for (const key in checkedAnswer) {
    const roundQuizId = checkedAnswer[key].roundQuiz;
    const questionId = checkedAnswer[key].questionId;
    const userChoose = checkedAnswer[key].userChooseId;
    const result = checkedAnswer[key].result;
    const updatingQuestion = roundQuestionDetailByRoundQuizId.find(
      (item) =>
        item.roundQuizId === roundQuizId && item.questionId === questionId
    );

    await prisma.roundQuestionDetail.update({
      where: {
        id: updatingQuestion?.id,
      },
      data: {
        userChoose: userChoose,
        result: result,
      },
    });
  }
  await prisma.roundQuiz.update({
    where: {
      id: args.roundQuizId,
    },
    data: {
      score: countedScore,
    },
  });
  return "Success";
};

export const getResult = () => prisma.roundQuestionDetail.findMany({});
