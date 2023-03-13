import { Request, Response } from "express";
import {
  createAnswer,
  createCategories,
  createChoices,
  createQuestions,
  delateRound,
  getCategories,
  getQuestionByRound,
  getQuestionsByCategory,
  getScoreByUser,
  submitAnswer,
  updateCategory,
  updateQuestion,
} from "./resolve";

export const createCategoriesHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body", body);
  try {
    const _result = await createCategories(body);
    return res.status(200).json(_result);
  } catch (err) {
    res.status(500).send("Error to validate");
  }
};

export const createQuestionsHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    const _result = await createQuestions(body);
    return res.status(200).json(_result);
  } catch (err) {
    res.status(500).send("Error to validate");
  }
};

export const getCategoriesQuizeHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const _result = await getCategories();
    return res.status(200).json(_result);
  } catch {
    () => res.status(500).send("Error to validate");
  }
};

export const getQuestionsByCategoryIdHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  console.log("body", body);
  try {
    const _result = await getQuestionsByCategory(body);
    return res.status(200).json(_result);
  } catch (err) {
    res.status(500).send("Error to validate");
  }
};

export const createChoicesHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    const _result = await createChoices(body);
    return res.status(200).json(_result);
  } catch {
    res.status(500).send("Error to validate");
  }
};

export const updateCategoryQuizeGameHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  console.log(body);
  try {
    const _result = await updateCategory(body);
    return res.status(200).json(_result);
  } catch {
    res.status(500).send("Error to validate");
  }
};

export const createAnswerQuizeGameHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  console.log(body);
  try {
    const _result = await createAnswer(body);
    return res.status(200).json(_result);
  } catch {
    res.status(500).send("Error to validate");
  }
};

export const getQuestionByRoundHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  console.log(body);
  try {
    const _result = await getQuestionByRound(body);
    return res.status(200).json(_result);
  } catch {
    res.status(500).send("Error to validate");
  }
};

export const updateQuestionHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    const _result = await updateQuestion(body);
    return res.status(200).json(_result);
  } catch {
    res.status(500).send("Error to validate");
  }
};

export const delateRoundQuizeGameHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  console.log(body);
  try {
    const _result = await delateRound(body);
    return res.status(200).json(_result);
  } catch {
    res.status(500).send("Error to validate");
  }
};

export const submitAnswerHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    const _result = await submitAnswer(body);
    return res.status(200).json(_result);
  } catch {
    res.status(500).send("Error to validate");
  }
};

export const  getScoreByUserHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    const _result = await getScoreByUser(body);
    return res.status(200).json(_result);
  } catch {
    res.status(500).send("Error to validate");
  }
};




