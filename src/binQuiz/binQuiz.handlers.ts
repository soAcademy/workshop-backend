import { Request, Response } from "express";
import { CreateCategoryCodec, CreateQuizCodec } from "./binQuiz.interfaces";
import {
  createCategory,
  createQuiz,
  getCategories,
  getQuizzes,
} from "./binQuiz.resolvers";

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
