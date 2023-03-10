import * as t from "io-ts";

export const CreateCategoryCodec = t.type({ name: t.string });

export interface ICreateCategory extends t.TypeOf<typeof CreateCategoryCodec> {}

export const CreateChoiceCodec = t.type({
  answerText: t.string,
  // quizId: t.number,
});

export interface ICreateChoice extends t.TypeOf<typeof CreateChoiceCodec> {}

export const CreateQuizCodec = t.type({
  questionText: t.string,
  quizCategoryId: t.number,
  correctChoice: CreateChoiceCodec,
  otherChoices: t.array(CreateChoiceCodec),
});

export interface ICreateQuiz extends t.TypeOf<typeof CreateQuizCodec> {}

export const CreateRoundCodec = t.type({
  quizCategoryId: t.number,
  quizzes: t.array(CreateQuizCodec),
});

export interface ICreateRound extends t.TypeOf<typeof CreateRoundCodec> {}
