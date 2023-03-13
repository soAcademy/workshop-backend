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

export const CreateShuffledQuizCodec = t.type({
  // roundId: t.number,
  quizId: t.number,
  choiceId: t.number,
  choiceOrder: t.number,
});

export interface ICreateShuffledQuiz
  extends t.TypeOf<typeof CreateShuffledQuizCodec> {}

export const CreateRoundCodec = t.type({
  quizCategoryId: t.number,
  shuffledQuizzes: t.array(CreateShuffledQuizCodec),
});

export interface ICreateRound extends t.TypeOf<typeof CreateRoundCodec> {}
