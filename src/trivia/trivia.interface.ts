import * as t from "io-ts";

export const createQuizCategoryCodec = t.type({
  name: t.string,
});

export interface ICreateQuizCategory
  extends t.TypeOf<typeof createQuizCategoryCodec> {}

export const createQuizCodec = t.type({
  name: t.string,
  quizAnswerChoiceId: t.number,
  answer: t.string,
  quizChoices: t.array(t.type({ choice: t.string })),
  category: t.number,
});

export interface ICreateQuiz extends t.TypeOf<typeof createQuizCodec> {}

export const createManyQuizzesCodec = t.array(
  t.type({
    id: t.number,
    name: t.string,
    answerId: t.number,
    category: t.number,
  })
);

export interface ICreateManyQuizzes
  extends t.TypeOf<typeof createManyQuizzesCodec> {}

export const getQuizCodec = t.type({
  categoryId: t.number,
});

export interface IGetQuiz extends t.TypeOf<typeof getQuizCodec> {}

export const submitQuizCodec = t.type({
  name: t.string,
  category: t.number,
  quizRecords: t.array(
    t.type({
      quizQuestionId: t.number,
      choice: t.number,
    })
  ),
});

export interface ISubmitQuiz extends t.TypeOf<typeof submitQuizCodec> {}
