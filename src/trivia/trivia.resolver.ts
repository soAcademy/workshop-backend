import { PrismaClient } from "../../prisma/client";
// import { interface } from "./trivia.interface";

export const prisma = new PrismaClient();

// CATEGORY
export const createCategory = (args: { name: string }) =>
  prisma.triviaCategory.create({
    data: {
      name: args.name,
    },
  });

export const getCategories = () => prisma.triviaCategory.findMany();

export const updateCategory = (args: { name1: string; name2: string }) =>
  prisma.triviaCategory.update({
    where: {
      name: args.name1,
    },
    data: {
      name: args.name2,
    },
  });

// QUIZ

export const createQuiz = (args: {
  quiz: string;
  answer: string;
  categoryName: string;
  choices: { choice: string }[];
}) =>
  prisma.triviaQuiz.create({
    data: {
      quiz: args.quiz,
      answer: { create: { choice: args.answer } },
      choices: { create: args.choices },
      category: {
        connect: {
          name: args.categoryName,
        },
      },
    },
  });

export const getAllQuizes = () => prisma.triviaQuiz.findMany();

export const getQuizesByCategory = async (args: { categoryName: string }) => {
  const quizes = await prisma.triviaQuiz.findMany({
    where: {
      categoryName: args.categoryName,
    },
    include: { choices: true, answer: true },
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

export const submitQuestion = async (args: {
  user: string;
  roundQuizes: { quizId: number; userChoiceId: number }[];
  categoryName: string;
}) => {
  try {
    const questions = await prisma.triviaQuiz.findMany({
      where: {
        categoryName: args.categoryName,
        OR: args.roundQuizes.map((r) => ({ id: r.quizId })),
      },
      include: { answer: true },
    });
    console.log("QuestionByCat", questions);

    const totalScore = args.roundQuizes.reduce((acc, r) => {
      const findQuestion = questions.find((q) => q.id === r.quizId);
      if (!findQuestion) {
        throw new Error(`Question with id ${r.quizId} not found`);
      }
      const sumScore = findQuestion.answerChoiceId === r.userChoiceId;
      return acc + (sumScore ? 1 : 0);
    }, 0);
    console.log("Total score:", totalScore);
    // return totalScore;
    const result = prisma.triviaRound.create({
      data: {
        user: args.user,
        categoryName: args.categoryName,
        score: totalScore,
        roundQuizes: {
          create: args.roundQuizes.map((r) => ({
            userChoiceId: r.userChoiceId,
            quizId: r.quizId,
          })),
        },
      },
    });
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getResults = () =>
  prisma.triviaRound.findMany({
    orderBy: { score: "desc" },
  });
