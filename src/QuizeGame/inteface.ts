export interface ICreateCategories {
  data: { name: string };
}
export interface ICreateQuestion {
  question: string;
  quizeCategoryId: number;
}

export interface IGetQuestionByCategoryId {
  quizeCategoryId: number;
}

export interface ICreateChoices {
  choice: [
    {
      choice: string;
      questionId: number;
    }
  ];
}

export interface IUpdateCategory {
  id: number;
  name: string;
}

export interface ICreateAnswer {
  answer: string;
  id: number;
}

export interface ICreateRound{
  id: number;
}

export interface IGetQuestionByRound{
  quizeCategoryId:number
  
}

export interface IUpdateQuestion{
  id: number
  id2:number
  answerId:number
}

export interface ICreateRound{
  quizeCategoryId:number
}
export interface IDeleteRound{
  id: number
}

export interface ISubmitAnswer{
  user:string
  score:number
  id:number
  choiceId:number
  answerChoiceId:number
  chooseChoiceId:number
}

export interface IGetScoreByuser{
  user:string
}

export interface ISubmitEachAnswer{
  
}