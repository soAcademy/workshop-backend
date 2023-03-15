// จัดการตัวแรกให้เสร็จ
import { PrismaClient } from "../../prisma/client";
import { ICreateCategory, IGetQuiz } from "./trivia.interface";
export const prisma = new PrismaClient();

// เริ่มตัวแรกสร้าง createQuiz
export const createQuiz = (args: {
  quiz: string;
  answer: string;
  categoryId: number;
  choices: { choice: string }[];
}) =>
  prisma.triviaQuiz.create({
    data: {
      quiz: args.quiz,
      answer: {create: {choice: args.answer,},},
      choices: {create: args.choices,},
      category: {connect: {id: args.categoryId,},},
    },
    include: {answer: true, choices: true,},
  });

// เริ่มตัวที่สอง เราต้องรอ Data มันประวมลเสร็จก่อน เราเลยต้องใช้ Async Await ถ้าเราไม่ใช้ Return เราก็เอา Async
// Map มาแล้วเราก็มา reduce จากนั้นก็มา filter
export const getQuiz = async (args: IGetQuiz) => {
  const quizes = await prisma.triviaQuiz.findMany({
    where: { category: { id: args.categoryId } },
    include: {answer: true, choices: true,
    },
  });

  export const createCategory = (args: ICreateCategory) => {
    return prisma.category.upsert({
      where: { name: args.name },
      create: { name: args.name },
      update: {},
    });
  };