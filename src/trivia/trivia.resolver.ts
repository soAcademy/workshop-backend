import { PrismaClient } from "../../prisma/client";

export const prisma = new PrismaClient();

export const sumNumber = (args: {x: number, y: number}) => args.x + args.y;

export const createQuizCategory = (args: {category: string}) =>
prisma.triviaCategory.create({
  data: {
    category: args.category
  }
})

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
    include: {
      answer: true,
      choices: true
    }
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

const f1 = (args: {x: number, y: number}) => args.x * args.y;
const f2 = (args: {x: number}) => args.x * 2;
const f3 = (args: {x: number, y: number}) => {
  const result = f1(args) + f2({x: args.x})
  return result;
}

// const getQuizs = () => {};
// const calculateTotalScore = (args) => {};
// const createQuizeRound = (args) => {};
// const submitQuiz = (args) => {};

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

//    return {
//     score: 10,
//     quizes: [
//       {
//         id: 100,
//         answer: true
//       },
//       {
//         id: 100,
//         answer: false
//       }
//     ]
//     ]
//    }
// }

