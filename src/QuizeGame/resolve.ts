import { PrismaClient } from "../../prisma/client";
import {
  ICreateAnswer,
  ICreateCategories,
  ICreateChoices,
  ICreateQuestion,
  ICreateRound,
  IDeleteRound,
  IGetQuestionByCategoryId,
  IGetQuestionByRound,
  IGetScoreByuser,
  ISubmitAnswer,
  ISubmitEachAnswer,
  IUpdateCategory,
  IUpdateQuestion,
} from "./inteface";
export const prisma = new PrismaClient();

export const createCategories = async (args: ICreateCategories) => {
  const result = await prisma.quizeCategory.createMany({
    data: args.data,
  });
  return result;
};

export const createQuestions = async (args: ICreateQuestion) => {
  console.log(args);
  const result = await prisma.quizeQuestion.createMany({
    data: {
      question: args.question,
      quizeCategoryId: args.quizeCategoryId,
    },
  });
  return result;
};

export const getCategories = async () => {
  const result = await prisma.quizeCategory.findMany();
  return result;
};

export const getQuestionsByCategory = async (
  args: IGetQuestionByCategoryId
) => {
  const result = await prisma.quizeQuestion.findMany({
    select: {
      id: true,
      question: true,
      answer: true,
      choices: true,
      quizeAnswerId: true,
    },
    where: {
      quizeCategoryId: args.quizeCategoryId,
    },
  });
  const randomQuestion = result
    .sort((a, b) => Math.random() - 0.5)
    .slice(0, 3)
    .map((r) => {
      return {
        id: r.id,
        question: r.question,
        answerId: r.answer?.choiceId,
        choice: r.choices.map((c) => {
          return {
            choiceId: c.id,
            name: c.choice,
          };
        }),
      };
    });

  return randomQuestion;
};

export const createChoices = async (args: ICreateChoices) => {
  console.log(args);
  const result = await prisma.quizeChoice.createMany({
    data: args.choice.map((r) => {
      return {
        choice: r.choice,
        questionId: r.questionId,
      };
    }),
  });
  return result;
};

export const updateCategory = async (args: IUpdateCategory) => {
  console.log(args);
  const result = await prisma.quizeCategory.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });
  return result;
};

export const createAnswer = async (args: ICreateAnswer) => {
  console.log(args);
  const result = await prisma.quizeAnswer.create({
    data: {
      answer: args.answer,
      choice: {
        connect: { id: args.id },
      },
    },
  });
  return result;
};


export const getQuestionByRound = async (args: IGetQuestionByRound) => {
  console.log(args);
  const result = await prisma.quizeQuestion.findMany({
    where: {
      quizeCategoryId: args.quizeCategoryId,
    },
  });
  return result;
};

export const updateQuestion = async (args: IUpdateQuestion) => {
  console.log(args);
  const result = await prisma.quizeQuestion.update({
    data: {
      quizeAnswerId: args.answerId,
    },

    where: {
      id: args.id,
    },
  });
  return result;
};


export const delateRound = async (args:IDeleteRound) => {
  const result = await prisma.quizeGameRound.delete({
    where: {
      id:args.id
    },
  });
  return result;
};

export const submitAnswer = async(args:ISubmitAnswer)=>{
  console.log("args submitAnswer",args)

  const result = await prisma.quizeGameRound.create({
    include:{
      choice: true,
      answer:true,
    },
    data:{
      user:args.user,
      score:args.score,
      question:{
        connect:{id:args.id}
      },
      answer:{
        connect:{choiceId:args.answerChoiceId}
      },

      choice:{
        connect:{id:args.choiceId}
      }

    }
  })
  return result;
};

export const getScoreByUser = async(args:IGetScoreByuser)=>{
  const result = await prisma.quizeGameRound.findMany({
    where:{
      user:args.user
    }
  });
  return result;
}

// export const submitEachAnswer = async(args:ISubmitEachAnswer)=>{
// console.log("args submitEachAnswer",args);
// const result = await prisma.
// };