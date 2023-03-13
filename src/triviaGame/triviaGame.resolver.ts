import { PrismaClient } from "../../prisma/client";
import { v4 as uuidv4 } from "uuid";
import {
  ICreateQuestionAndAnswers,
  ICreateRoundQuestion,
  IGetQuestionsByCategory,
} from "./triviaGame.Interface";

export const prisma = new PrismaClient();

//getCategories
//createQuestionAndAnswers
//getQuestions
//getQuestionsByCategory
//createRoundQuestion
//getRounds

export const getCategories = () =>
  prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

export const createQuestionAndAnswers = (args: ICreateQuestionAndAnswers) =>
  prisma.question.create({
    data: {
      category: {
        connectOrCreate: {
          where: { name: args.category },
          create: {
            name: args.category,
          },
        },
      },
      question: args.question,
      answer: {
        create: { answer: args.correctAnswer },
      },
      choices: { create: args.otherAnswer.map((r) => ({ answer: r.choice })) },
    },
  });

export const getQuestions = () => prisma.question.findMany();

export const getQuestionsByCategory = async (args: IGetQuestionsByCategory) => {
  const result = await prisma.question.findMany({
    where: {
      categoryId: args.categoryId,
    },
    include: {
      choices: true,
      answer: true,
    },
  });
  // console.log(result);

  const shuffleQuiz = result.sort((a, b) => Math.random() - 0.5).splice(0, 3);
  const shuffleChoice = shuffleQuiz.map((r) => {
    r.choices = r.choices
      .filter((choice) => choice.answer !== r.answer.answer)
      .sort((a, b) => Math.random() - 0.5)
      .slice(0, 3);
    r.choices.push(r.answer);
    r.choices.sort((a, b) => Math.random() - 0.5);
    // console.log(r);
    return r;
  });

  const removeAnswer = shuffleChoice.map((r) => ({
    id: r.id,
    categoryId: r.categoryId,
    question: r.question,
    choices: r.choices,
  }));

  return removeAnswer;
};

export const createRoundQuestion = async (args: ICreateRoundQuestion) => {
  const findQuestionsByCategory = await prisma.question.findMany({
    where: {
      categoryId: args.categoryId,
    },
    include: {
      choices: true,
      answer: true,
    },
  });
  // console.log(JSON.stringify(findQuestionsByCategory, null, 2));

  const sumResult = args.questions.reduce(
    (
      acc: { score: number; questions: { id: number; result: boolean }[] },
      question
    ) => {
      //find current question by filter //each question that thrown in reduce
      const findCurrentQuestion = findQuestionsByCategory.filter(
        (questionFromCat) => questionFromCat.id === question.id
      );
      console.log("findCurrentQuestion", findCurrentQuestion);

      //accumulate score if user select equal db answer
      const score =
        findCurrentQuestion[0].choiceId === question.select
          ? acc.score + 1
          : acc.score;
      console.log("score", score);

      //get boolean by check result
      const result = findCurrentQuestion[0].choiceId === question.select;
      console.log("result", result);

      //
      const findAnswerDetailFromUserSelect =
        findCurrentQuestion[0].choices.filter(
          (choice) => choice.id === question.select
        );
      const answerDetailFromUserSelect =
        findAnswerDetailFromUserSelect.length > 0
          ? findAnswerDetailFromUserSelect[0].answer
          : findCurrentQuestion[0].answer.answer;
      console.log("answerDetailFromUserSelect", answerDetailFromUserSelect);

      return {
        score: score,
        questions: [
          ...acc.questions,
          {
            id: question.id,
            question: findCurrentQuestion[0].question,
            userSelect: question.select,
            answerDetail: answerDetailFromUserSelect,
            result: result,
          },
        ],
      };
    },
    { score: 0, questions: [] }
  );
  console.log("sumResult", sumResult);

  //   //insert db
  const insertRoundQuestion = await prisma.round.create({
    data: {
      player: {
        connectOrCreate: {
          where: { name: args.name },
          create: {
            name: args.name,
          },
        },
      },
      round: uuidv4(),
      score: sumResult.score,
      roundQuestions: {
        createMany: {
          data: args.questions.map((r) => ({
            questionsId: r.id,
            chooseChoice: r.select,
          })),
        },
      },
    },
    select: {
      roundQuestions: { select: { id: true } },
    },
  });

  console.log("insertRoundQuestion", insertRoundQuestion);
  //destruct choice from user

  const destructFunc = async () => {
    const destruct = args.questions.reduce(
      (acc: { roundQuestionId: number; choice: number }[], r, idx) => {
        const spreadChoice = r.choices.map((choice) => ({
          roundQuestionId: insertRoundQuestion.roundQuestions[idx].id,
          choice: choice.choice,
        }));
        // console.log([...spreadChoice]);
        return [...acc, ...spreadChoice];
      },
      []
    );
    console.log("destruct", destruct);

    const createRound = await prisma.roundChooseChoice.createMany({
      data: destruct.map((r) => ({
        roundQuestionsId: r.roundQuestionId,
        choicesId: r.choice,
      })),
    });
    console.log("createRound", createRound);
  };

  destructFunc();

  console.log("sumResult", sumResult);

  return sumResult;
};

export const getRounds = () =>
  prisma.round.findMany({
    include: {
      player: true,
    },
    take: 20,
    orderBy: [{ score: "desc" }, { createdAt: "asc" }],
  });

//update quiz
export const getQuestionsByCategoryUpdate = async (
  args: IGetQuestionsByCategory
) => {
  const result = await prisma.question.findMany({
    where: {
      categoryId: args.categoryId,
    },
    include: {
      choices: true,
      answer: true,
    },
  });
  console.log(result);
};
