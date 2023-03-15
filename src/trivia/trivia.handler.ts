// จัดการตัวที่สอง
import { Request, Response } from "express";
import { createQuiz, getQuiz } from "./trivia.resolver";

export const createQuizHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return createQuiz({
    quiz: body.quiz,
    answer: body.answer,
    choices: body.choices,
    category: body.category,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getQuizHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return getQuiz({
    quiz: body.quiz,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};
