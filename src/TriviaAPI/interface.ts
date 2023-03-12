import * as t from "io-ts";

export const createCategoryCodec = t.type({
  name: t.string,
});
export interface ICreateCategory extends t.TypeOf<typeof createCategoryCodec> {}

export const createQuestionCodec = t.type({
  question: t.string,
  categoryId: t.number,
  choices: t.array(t.string),
  answer: t.string,
});

export interface ICreateQuestion extends t.TypeOf<typeof createQuestionCodec> {}

export const getQuestionsCodec = t.type({
  categoryId: t.number,
  questionAmount: t.number,
  choiceAmount: t.number,
});

export interface IGetQuestions extends t.TypeOf<typeof getQuestionsCodec> {}

export const submitAnswerCodec = t.type({
  userName: t.string,
  categoryId: t.number,
  answer: t.array(
    t.type({
      questionId: t.number,
      answerChoiceId: t.number,
    })
  ),
});

export interface ISubmitAnswer extends t.TypeOf<typeof submitAnswerCodec> {}
