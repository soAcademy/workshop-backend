import * as t from "io-ts";

export const CreateQuestionAndAnswersCodec = t.type({
  category: t.string,
  question: t.string,
  correctAnswer: t.string,
  otherAnswer: t.array(
    t.type({
      choice: t.string,
    })
  ),
});
export interface ICreateQuestionAndAnswers
  extends t.TypeOf<typeof CreateQuestionAndAnswersCodec> {}

export const GetQuestionsByCategoryCodec = t.type({ categoryId: t.number });
export interface IGetQuestionsByCategory
  extends t.TypeOf<typeof GetQuestionsByCategoryCodec> {}

export const CreateRoundQuestionCodec = t.type({
  name: t.string,
  categoryId: t.number,
  questions: t.array(
    t.type({
      id: t.number,
      choices: t.array(t.type({ choice: t.number })),
      select: t.number,
    })
  ),
});
export interface ICreateRoundQuestion
  extends t.TypeOf<typeof CreateRoundQuestionCodec> {}
