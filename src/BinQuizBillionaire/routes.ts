import {
  createCategoryHandler,
  createQuestionHandler,
  getCategoriesHandler,
  getQuestionHandler,
  getResultByCategoryHandler,
  getResultsHandler,
  submitQuestionHandler,
  updateAnswerHandler,
  updateQuestionHandler,
} from "./BinQuizBillionaire.handler";

export const AppRoutes = [
  {
    path: "/createCategory",
    method: "post",
    action: createCategoryHandler,
  },
  {
    path: "/getCategory",
    method: "post",
    action: getCategoriesHandler,
  },
  {
    path: "/createQuestion",
    method: "post",
    action: createQuestionHandler,
  },
  {
    path: "/getQuestion",
    method: "post",
    action: getQuestionHandler,
  },
  {
    path: "/submitQuestion",
    method: "post",
    action: submitQuestionHandler,
  },
  {
    path: "/getResult",
    method: "post",
    action: getResultsHandler,
  },
  {
    path: "/getResultByCategory",
    method: "post",
    action: getResultByCategoryHandler,
  },
  {
    path: "/updateQuestion",
    method: "post",
    action: updateQuestionHandler,
  },
  {
    path: "/updateAnswer",
    method: "post",
    action: updateAnswerHandler,
  },
];
