import { Request, Response } from "express";
import { createCategoryCodec, createQuestionCodec, getQuestionsCodec, submitAnswerCodec } from "./interface";
import { createCategory, createQuestion, getCategories, getGameHistories, getQuestions, getRanking, submitAnswer } from "./resolver";

export const createCategoryHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createCategoryCodec.decode(body)._tag === "Right") {
      return createCategory(body)
        .then((response) =>
          response.name !== body.name
            ? res.status(200).json(response)
            : res.status(500).send("Failed to create category")
        )
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getCategoriesHandler = (req: Request, res: Response) => {
  try {
    getCategories()
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createQuestionHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createQuestionCodec.decode(body)._tag === "Right") {
      return createQuestion(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getQuestionsHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (getQuestionsCodec.decode(body)._tag === "Right") {
      return getQuestions(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const submitAnswerHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (submitAnswerCodec.decode(body)._tag === "Right") {
      return submitAnswer(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getGameHistoriesHandler = (req: Request, res: Response) => {
  try {
    getGameHistories()
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getRankingHandler = (req: Request, res: Response) => {
  try {
    getRanking()
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  } catch (err) {
    res.status(500).json(err);
  }
};

