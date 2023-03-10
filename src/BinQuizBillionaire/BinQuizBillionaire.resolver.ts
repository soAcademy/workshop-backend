import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateQuestion,
  // ISubmitQuestion,
} from "./BinQuizBillionaire.interface";

export const prisma = new PrismaClient();

// CRUD
//  createCategory /
//  getCategories /
//  createQuiz (ส่ง category มา) /
//  getQuiz (ส่ง category ที่ต้องการเล่นมา สุ่ม คำถาม 3 ข้อจาก database และแต่ละข้อ random choice มา 3 choice)/
//  submitQuiz (ส่งคำตอบของ user แต่ละข้อไป -> response จะบอกว่าข้อไหนถูก ข้อไหนผิด และคะแนนของรอบนั้น)
//  getResults (แสดงผลลัพธ์ของการเล่นแต่ละรอบทั้งหมด คะแนน)

export const createCategory = (args: ICreateCategory) =>
  prisma.quizCategory.create({
    data: {
      name: args.name,
    },
  });

export const getCategories = () =>
  prisma.quizCategory.findMany({
    orderBy: { id: "asc" },
  });

export const createQuestion = (args: ICreateQuestion) =>
  prisma.quizQuestion.create({
    data: {
      questName: args.questName,
      category: { connect: { id: args.categoryId } },
      choices: {
        create: args.choices.map((r) => ({
          choiceName: r.choice,
        })),
      },
      answer: { create: { choiceName: args.answer } },
    },
  });

export const getQuestion = async (args: { categoryId: number }) => {
  const question = await prisma.quizQuestion.findMany({
    where: { categoryId: args.categoryId },
    include: { choices: true, answer: true },
  });

  const result = question
    .sort((a, b) => Math.random() - 0.5)
    .slice(0, 3)
    .map((r) => ({
      id: r.id,
      questName: r.questName,
      choices: [
        ...r.choices
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, 3)
          .map((j) => ({
            id: j.id,
            choiceName: j.choiceName,
          })),
        {
          id: r.answer.id,
          choiceName: r.answer.choiceName,
        },
      ].sort((a, b) => Math.random() - 0.5),
    }));
  // console.log(Math.random() - 0.5);
  console.log("Result", result);
  return result;
};

export const submitQuestion = async (args: {
  roundQuestions: { questionId: number; userChoiceId: number }[];
  categoryId: number;
}) => {
  try {
    const questions = await prisma.quizQuestion.findMany({
      where: {
        categoryId: args.categoryId,
        OR: args.roundQuestions.map((r) => ({ id: r.questionId })),
      },
      include: { answer: true },
    });
    console.log("QuestionByCat", questions);

    const totalScore = args.roundQuestions.reduce((acc, r) => {
      const findQuestion = questions.find((q) => q.id === r.questionId);
      if (!findQuestion) {
        throw new Error(`Question with id ${r.questionId} not found`);
      }
      const sumScore = findQuestion.answerChoiceId === r.userChoiceId;
      return acc + (sumScore ? 1 : 0);
    }, 0);

    // const totalScore = args.roundQuestions.reduce((acc, r) => {
    //   const isCorrect =
    //     questions.find((j) => j.id === r.questionId).answerChoiceId ===
    //     r.userChoiceId;
    //   return acc + (isCorrect ? 1 : 0);
    // }, 0);

    console.log("Total score:", totalScore);
    return totalScore;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
