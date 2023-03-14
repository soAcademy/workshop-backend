import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const CreateCategoryCodec = t.type({
  name: t.string,
});

export interface ICreateCategory extends t.TypeOf<typeof CreateCategoryCodec> {}

export const CreateQuestionCodec = t.type({
  questName: t.string,
  categoryId: t.number,
  choices: t.array(t.type({ choice: t.string })),
  answer: t.string,
});

export interface ICreateQuestion extends t.TypeOf<typeof CreateQuestionCodec> {}

export const SubmitQuestionCodec = t.type({
  user: t.string,
  categoryId: t.number,
  roundQuestions: t.array(
    t.type({ userChoiceId: t.number, questionId: t.number })
  ),
});

export interface ISubmitQuestion extends t.TypeOf<typeof SubmitQuestionCodec> {}

export const GetResultByCategoryCodec = t.type({
  categoryId: t.number,
});

export interface IGetResultByCategory
  extends t.TypeOf<typeof GetResultByCategoryCodec> {}

export const UpdateQuestionCodec = t.type({
  quizId: t.number,
  questName: optional(t.string),
  choices: optional(
    t.array(t.type({ choiceId: t.number, choiceName: t.string }))
  ),
});

export interface IUpdateQuestion extends t.TypeOf<typeof UpdateQuestionCodec> {}

export const UpdateAnswerCodec = t.type({
  quizId: t.number,
  answerName: t.string,
});

export interface IUpdateAnswer extends t.TypeOf<typeof UpdateAnswerCodec> {}
