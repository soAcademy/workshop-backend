import { Request, Response } from "express";
import { CreateCategoryCodec, CreateQuizCodec } from "./binQuiz.interfaces";
import {
  createCategory,
  createQuiz,
  getCategories,
  getQuizzes,
  getQuizzesByCategory,
} from "./binQuiz.resolvers";

const randInt = (n: number) => Math.floor(Math.random() * n);

const shuffle = (a: Array<any>) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
};

const shuffleInPlace = (a: Array<any>) => {
  shuffle(a);
  return a;
};

// const shuffleCopy = (a: Array<any>) => {
//   a = a.slice();
//   shuffle(a);
//   return a;
// };

export const createQuizCategoryHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;
  if (CreateCategoryCodec.decode(args)._tag === "Right") {
    try {
      const result = await createCategory({
        name: args.name,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};

export const getQuizCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCategories();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createQuizHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  if (CreateQuizCodec.decode(args)._tag === "Right") {
    try {
      const result = await createQuiz({
        questionText: args.questionText,
        quizCategoryId: args.quizCategoryId,
        correctChoice: args.correctChoice,
        otherChoices: args.otherChoices,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};

export const getQuizzesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getQuizzes();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getQuizzesByCategoryHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;
  if (typeof args.categoryId === "number") {
    try {
      const result = await getQuizzesByCategory({
        categoryId: args.categoryId,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};

// https://codereview.stackexchange.com/a/266389

export const getRandomizedQuizzesByCategoryHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;
  if (typeof args.categoryId === "number") {
    try {
      const result = await getQuizzesByCategory({
        categoryId: args.categoryId,
      });
      const randomizedResult = shuffleInPlace(result).map((result) => ({
        question: result.questionText,
        answers: shuffleInPlace([
          ...result.otherChoices.map((choice: { answerText: string }) => ({
            answerText: choice.answerText,
            isCorrect: false,
          })),
          {
            answerText: result.correctChoice.answerText,
            isCorrect: true,
          },
        ]),
        // .map((choice) => choice.answerText),
      }));
      const correctAnswers = randomizedResult.map((result) =>
        result.answers.findIndex((answer) => answer.isCorrect === true)
      );
      // console.log(correctAnswers);
      res.status(200).json(
        randomizedResult.map((result, idx) => ({
          question: result.question,
          answers: result.answers.map((choice) => choice.answerText),
          answer: correctAnswers[idx],
        }))
      );
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};
