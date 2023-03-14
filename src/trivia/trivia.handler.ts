import { Request, Response } from "express";
import { createCategory, createQuiz, getAllQuizes, getCategories, getQuizesByCategory, getResults, submitQuestion } from "./trivia.resolver";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;
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
};

export const getCategoriesHandler = async (req: Request, res: Response) => {
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
  try {
    const result = await createQuiz({
      quiz: args.quiz,
      answer: args.answer,
      categoryName: args.categoryName,
      choices: args.choices,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getAllQuizesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllQuizes();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getQuizesByCategoryHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await getQuizesByCategory(body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const submitQuestionHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await submitQuestion(body); 
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getResultsHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await getResults(body); 
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};