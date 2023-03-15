import { Request, Response } from "express";
import {
  createCategoryTriviaCodec,
  createQuizTriviaCodec,
  getQuizTriviaCodec,
  submitQuizTriviaCodec,
  updateQuizTriviaCodec,
} from "./triviaQuiz.interface";
import {
  createCategoryTrivia,
  createQuizTrivia,
  getCategoryTrivia,
  getQuizTrivia,
  getResultsTrivia,
  submitQuizTrivia,
  updateQuizTrivia,
} from "./triviaQuiz.resolver";

export const createCategoryTriviaHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createCategoryTriviaCodec.decode(args)._tag === "Right") {
    try {
      const result = await createCategoryTrivia(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getCategoryTriviaHandler = async (req: Request, res: Response) => {
  try {
    const response = await getCategoryTrivia();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const createQuizTriviaHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (createQuizTriviaCodec.decode(args)._tag === "Right") {
    try {
      const result = await createQuizTrivia(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getQuizTriviaHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (getQuizTriviaCodec.decode(args)._tag === "Right") {
    try {
      const result = await getQuizTrivia(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const submitQuizTriviaHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (submitQuizTriviaCodec.decode(args)._tag === "Right") {
    try {
      const result = await submitQuizTrivia(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getResultsTriviaHandler = async (req: Request, res: Response) => {
  try {
    const response = await getResultsTrivia();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const updateQuizTriviaHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (updateQuizTriviaCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateQuizTrivia(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
