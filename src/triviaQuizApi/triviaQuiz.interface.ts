import * as t from "io-ts";
import { optional } from "io-ts-extra";

export interface ICreateCategoryTrivia {
  name: string;
}

export const createCategoryTriviaCodec = t.type({
  name: t.string,
});

export interface ICreateQuizTrivia {
  name: string;
  answer: string;
  categoryId: number;
  choices: { choice: string }[];
}

export const createQuizTriviaCodec = t.type({
  name: t.string,
  answer: t.string,
  categoryId: t.number,
  choices: t.array(t.type({ choice: t.string })),
});

export const getQuizTriviaCodec = t.type({
  categoryId: t.number,
});

export interface IGetQuizTrivia extends t.TypeOf<typeof getQuizTriviaCodec> {}

export const submitQuizTriviaCodec = t.type({
  categoryId: t.number,
  name: optional(t.string),
  TriviaRoundQuiz: t.array(
    t.type({
      quizId: t.number,
      playerChooseChoice: t.number,
    })
  ),
});

export interface ISubmitQuizTriviaTrivia
  extends t.TypeOf<typeof submitQuizTriviaCodec> {}

export const updateQuizTriviaCodec = t.type({
  id: t.number,
  answer: t.string,
  categoryId: t.number,
  choices: t.array(t.type({ choice: t.string })),
});

export interface IUpdateQuizTrivia
  extends t.TypeOf<typeof updateQuizTriviaCodec> {}
