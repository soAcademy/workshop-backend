import { Request, Response } from "express";
import {
  createQuiz,
  createQuizCategory,
  createRound,
  createUser,
  getQuiz,
  getQuizCategories,
  getResults,
  submitQuiz,
} from "./trivia.resolver";
import {
  createQuizCategoryCodec,
  createQuizCodec,
  createRoundCodec,
  getQuizCodec,
} from "./trivia.interface";

export const createQuizCategoryHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (createQuizCategoryCodec.decode(body)._tag === "Right") {
    return createQuizCategory(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const createQuizHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (createQuizCodec.decode(body)._tag === "Right") {
    return createQuiz(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getQuizHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (getQuizCodec.decode(body)._tag === "Right") {
    return getQuiz(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const submitQuizHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await submitQuiz(body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createUserHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await createUser(body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createRoundHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  if (createRoundCodec.decode(body)._tag === "Right") {
    return createRound(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getResultsHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await getResults();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getQuizCategoriesHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await getQuizCategories();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
