import {
  createQuizCategoryHandler,
  createQuizHandler,
  createRoundHandler,
  createUserHandler,
  getQuizCategoriesHandler,
  getQuizHandler,
  getResultsHandler,
  submitQuizHandler,
} from "./trivia.handler";

export const AppRoutes = [
{
  path: "/createQuizCategory",
  method: "post",
  action: createQuizCategoryHandler,
},
{
  path: "/createQuiz",
  method: "post",
  action: createQuizHandler,
},
{
  path: "/getQuiz",
  method: "post",
  action: getQuizHandler,
},
{
  path: "/submitQuiz",
  method: "post",
  action: submitQuizHandler,
},
{
  path: "/createUser",
  method: "post",
  action: createUserHandler,
},
{
  path: "/createRound",
  method: "post",
  action: createRoundHandler,
},
{
  path: "/getResults",
  method: "post",
  action: getResultsHandler,
},
{
  path: "/getQuizCategories",
  method: "post",
  action: getQuizCategoriesHandler,
}
]