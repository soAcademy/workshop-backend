import {
  CreateQuestionAndAnswersHandler,
  GetAllQuestionsHandler,
  GetRoundsHandler,
  SubmitQuizHandler,
  UpdateAnswerHandler,
  UpdateQuestionHandler,
  getCategoriesHandler,
  getQuestionsByCategoryHandler,
  getQuestionsHandler,
} from "./triviaGame.handler";

export const AppRoutes = [
  {
    path: "/triviaGame/getCategories",
    method: "post",
    action: getCategoriesHandler,
  },
  {
    path: "/triviaGame/getQuestions",
    method: "post",
    action: getQuestionsHandler,
  },
  {
    path: "/triviaGame/getQuestionsByCategory",
    method: "post",
    action: getQuestionsByCategoryHandler,
  },
  {
    path: "/triviaGame/createQuestionAndAnswers",
    method: "post",
    action: CreateQuestionAndAnswersHandler,
  },
  {
    path: "/triviaGame/submitQuiz",
    method: "post",
    action: SubmitQuizHandler,
  },
  {
    path: "/triviaGame/getRounds",
    method: "post",
    action: GetRoundsHandler,
  },
  {
    path: "/triviaGame/getAllQuestions",
    method: "post",
    action: GetAllQuestionsHandler,
  },
  {
    path: "/triviaGame/updateQuestion",
    method: "post",
    action: UpdateQuestionHandler,
  },
  {
    path: "/triviaGame/updateAnswer",
    method: "post",
    action: UpdateAnswerHandler,
  },
];
