import * as t from "io-ts";

export const createQuizCategoryCodec = t.type({ category: t.string });
export interface ICreateQuizCategory
  extends t.TypeOf<typeof createQuizCategoryCodec> {}

export const createQuizCodec = t.type({
  quiz: t.string,
  answer: t.string,
  categoryId: t.number,
  choices: t.array(t.type({ choice: t.string })),
});
export interface ICreateQuiz extends t.TypeOf<typeof createQuizCodec> {}

export const getQuizCodec = t.type({ categoryId: t.number });
export interface IGetQuiz extends t.TypeOf<typeof getQuizCodec> {}

export const submitQuizCodec = t.type({
  play: t.array(t.type({ quizId: t.number, choiceId: t.number })),
  categoryId: t.number,
  userId: t.number,
});
export interface ISubmitQuiz extends t.TypeOf<typeof submitQuizCodec> {}

export const createRoundCodec = t.type({
  categoryId: t.number,
  totalResult: t.number,
  userId: t.number,
  roundNo: t.number
})
export interface ICreateRound extends t.TypeOf<typeof createRoundCodec> {}
