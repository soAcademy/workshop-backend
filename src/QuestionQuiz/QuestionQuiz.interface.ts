import * as t from "io-ts";

export const createCategoryCodec = t.type({
  name: t.string,
});

export interface ICreateCategory extends t.TypeOf<typeof createCategoryCodec> {
  category: any;
}

//--------------------------------------------------------
export const createQuizCodec = t.type({
  question: t.string,
  answer: t.string,
  categoryId: t.number,
  choices: t.array(
    t.type({
      choiceName: t.string,
    })
  ),
});

export interface ICreateQuizCodec extends t.TypeOf<typeof createQuizCodec> {}

//--------------------------------------------------------
export const getQuizbyCategoryCodec = t.type({
  categoryId: t.number,
  userId: t.number,
});

export interface IGetQuizbyCategoryCodec
  extends t.TypeOf<typeof getQuizbyCategoryCodec> {}

//---------------------------------------------------------

export const submitQuizCodec = t.type({
  userId: t.number,
  roundQuizId: t.number,
  categoryId: t.number,
  questions: t.array(
    t.type({
      questionId: t.number,
      userChoose: t.number,
    })
  ),
});

export interface ISubmitQuiz extends t.TypeOf<typeof submitQuizCodec> {}

//---------------------------------------------------------
