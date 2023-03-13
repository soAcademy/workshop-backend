import { Request, Response } from "express";
import {
  createQuestionAndAnswers,
  getCategories,
  getQuestions,
  getQuestionsByCategory,
  createRoundQuestion,
  getRounds,
  getAllQuestions,
  updateQuestion,
  updateAnswer,
} from "./triviaGame.resolver";
import {
  CreateQuestionAndAnswersCodec,
  CreateRoundQuestionCodec,
  GetQuestionsByCategoryCodec,
  UpdateAnswerCodec,
  UpdateQuestionCodec,
} from "./triviaGame.Interface";

export const getCategoriesHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getCategories());
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getQuestionsHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getQuestions());
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getQuestionsByCategoryHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  console.log(body);
  try {
    GetQuestionsByCategoryCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await getQuestionsByCategory(body))
      : res.status(200).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const CreateQuestionAndAnswersHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  console.log(body);
  try {
    CreateQuestionAndAnswersCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await createQuestionAndAnswers(body))
      : res.status(200).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const SubmitQuizHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    CreateRoundQuestionCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await createRoundQuestion(body))
      : res.status(200).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const GetRoundsHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getRounds());
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const GetAllQuestionsHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getAllQuestions());
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const UpdateQuestionHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);

  try {
    UpdateQuestionCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await updateQuestion(body))
      : res.status(200).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const UpdateAnswerHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);

  try {
    UpdateAnswerCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await updateAnswer(body))
      : res.status(200).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
