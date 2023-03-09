import { PrismaClient } from "../../prisma/client";

export const prisma = new PrismaClient();

export const createQuiz = (args: {
  quiz: string;
  answer: string;
  categoryId: number;
  choices: { choice: string }[];
}) =>
  prisma.triviaQuiz.create({
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

interface IGetQuiz {
  categoryId: number;
}

export const getQuiz = async (args: IGetQuiz) => {
  const quizes = await prisma.triviaQuiz.findMany({
    where: { category: { id: args.categoryId } },
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
          .slice(0, 3)
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

// const submitQuiz = async () => {
//   const quizes = await prisma.triviaQuiz.findMany({
//     // where: {
//     //   OR: args.roundQuizes.map((r) => ({id: r.id}))
//     // }
//   });

//   const totalScore = args.roundQuizes.reduce((acc, r) => {
//     const isCorrect = quizes.find((s) => s.id === r.id).answerId === r.answerId;
//     return acc + (isCorrect? 1 : 0 )

//    }, 0)

//    const result = await prisma.triviaRound.create({

//    })
// }