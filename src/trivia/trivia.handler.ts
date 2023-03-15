import express, { Application, Request, Response } from "express";
import {
  createQuizCategoryCodec,
  createQuizCodec,
  getQuizCodec,
  submitQuizCodec,
  updateQuizCodec,
} from "./trivia.interface";
import {
  createQuizCategory,
  createQuiz,
  getQuiz,
  submitQuiz,
  getResults,
  getQuizCategories,
  updateQuiz,
} from "./trivia.resolver";

export const createQuizCategoryHandler = async (
  req: Request,
  res: Response
) => {
  try {
    if (createQuizCategoryCodec.decode(req?.body)._tag === "Right") {
      const response = await createQuizCategory(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const getQuizCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const response = await getQuizCategories();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const createQuizHandler = async (req: Request, res: Response) => {
  try {
    if (createQuizCodec.decode(req?.body)._tag === "Right") {
      const response = await createQuiz(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const getQuizHandler = async (req: Request, res: Response) => {
  try {
    if (getQuizCodec.decode(req?.body)._tag === "Right") {
      const response = await getQuiz(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const submitQuizHandler = async (req: Request, res: Response) => {
  try {
    if (submitQuizCodec.decode(req?.body)._tag === "Right") {
      const response = await submitQuiz(req?.body);
      res.status(200).json(response);
    } else {
      res.status(400).json({
        error: "error => incoorect data type",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const getResultsHandler = async (req: Request, res: Response) => {
  try {
    const response = await getResults();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const updateQuizHandler = async (req: Request, res: Response) => {
  try {
    if (updateQuizCodec.decode(req?.body)._tag === "Right") {
      const response = await updateQuiz(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error => incorrect data type",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

