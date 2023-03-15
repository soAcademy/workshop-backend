import { PrismaClient } from "../../prisma/client";
export const prisma = new PrismaClient();

// ตัวแรก
export const sumNumber = (args: { x: number; y: number }) => args.x + args.y;

// ตัวที่สอง createCategory
export const createQuizCategory = (args: { category: string }) =>
  prisma.triviaCategory.create({
    data: {
      category: args.category,
    },
  });

// ตัวที่สาม CreateQuiz
export const CreateQuiz = (args: {
  quiz: string;
  answer: string;
  categoryId: number;
  choices: { choice: string }[];
}) =>
  prisma.triviaQuiz.create({
    data: {
      quiz: args.quiz,
      answer: { create: { choice: args.answer } },
      choices: { create: args.choices },
      category: { connect: { id: args.categoryId } },
    },
    include: { answer: true, choices: true },
  });


// export const getQuiz = async (args: IGetQuiz) => {
//   const quizes = await prisma.triviaQuiz.findMany({
//     where: { category: { id: args.categoryId } },
//     include: {answer: true, choices: true,},
//     });