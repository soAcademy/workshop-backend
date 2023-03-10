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

// export interface ISubmitQuestion {
//   quizRoundQuestion: any;
//   userChoiceId: number;
//   questionId: number;
//   categoryId: number;
// }
