import {
  createCategoryHandler,
  createQuestionHandler,
  getCategoriesHandler,
  getGameHistoriesHandler,
  getQuestionsHandler,
  getRankingHandler,
  submitAnswerHandler,
} from "./handler";

export const TriviaRoutes = [
  {
    method: "post",
    path: "/trivia/createCategory",
    action: createCategoryHandler,
  },
  {
    method: "post",
    path: "/trivia/getCategories",
    action: getCategoriesHandler,
  },
  {
    method: "post",
    path: "/trivia/createQuestion",
    action: createQuestionHandler,
  },
  {
    method: "post",
    path: "/trivia/getQuestions",
    action: getQuestionsHandler,
  },
  {
    method: "post",
    path: "/trivia/submitAnswer",
    action: submitAnswerHandler,
  },
  {
    method: "post",
    path: "/trivia/getGameHistories",
    action: getGameHistoriesHandler,
  },
  {
    method: "post",
    path: "/trivia/getRanking",
    action: getRankingHandler,
  },
];
