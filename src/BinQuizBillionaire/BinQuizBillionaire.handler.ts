import { Request, Response } from "express";
import {
  CreateCategoryCodec,
  CreateQuestionCodec,
  GetResultByCategoryCodec,
  SubmitQuestionCodec,
  UpdateQuestionCodec,
} from "./BinQuizBillionaire.interface";
import {
  createCategory,
  createQuestion,
  getCategories,
  getQuestion,
  getResultByCategory,
  getResults,
  submitQuestion,
  updateAnswer,
  updateQuestion,
  // submitQuestion,
} from "./BinQuizBillionaire.resolver";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(CreateCategoryCodec.decode(args));

  try {
    if (CreateCategoryCodec.decode(args)._tag === "Right") {
      const result = await createCategory({
        name: args.name,
      });
      res.status(200).send(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCategories();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const createQuestionHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(CreateQuestionCodec.decode(args));

  try {
    if (CreateQuestionCodec.decode(args)._tag === "Right") {
      const result = await createQuestion(args);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getQuestionHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  try {
    const result = await getQuestion({
      categoryId: args.categoryId,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const submitQuestionHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(SubmitQuestionCodec.decode(args));

  try {
    if (SubmitQuestionCodec.decode(args)._tag === "Right") {
      const result = await submitQuestion(args);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const getResultsHandler = async (req: Request, res: Response) => {
  try {
    const result = await getResults();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const getResultByCategoryHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log(args);
  console.log(GetResultByCategoryCodec.decode(args));

  try {
    if (GetResultByCategoryCodec.decode(args)._tag === "Right") {
      const result = await getResultByCategory(args);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const updateQuestionHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);
  console.log(UpdateQuestionCodec.decode(args));

  try {
    if (UpdateQuestionCodec.decode(args)._tag === "Right") {
      const result = await updateQuestion(args);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const updateAnswerHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);
  console.log(UpdateQuestionCodec.decode(args));

  try {
    if (UpdateQuestionCodec.decode(args)._tag === "Right") {
      const result = await updateAnswer(args);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};
