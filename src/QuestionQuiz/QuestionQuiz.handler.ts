// import { Request, Response } from "express";
// import {
//   createCategory,
//   createQuiz,
//   createUser,
//   getAllCategory,
//   getQuizbyCategory,
//   getResult,
//   getStatistic,
//   submitQuiz,
// } from "./QuestionQuiz.resolver";

// export const createCategoryHandler = async (req: Request, res: Response) => {
//   const args = req.body;
//   try {
//     const result = await createCategory(args);
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const getAllCategoryHandle = async (req: Request, res: Response) => {
//   try {
//     const result = await getAllCategory();
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const createQuizHandle = async (req: Request, res: Response) => {
//   const args = req.body;
//   try {
//     const result = await createQuiz(args);
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const getQuizbyCategoryHandle = async (req: Request, res: Response) => {
//   const args = req.body;
//   try {
//     const result = await getQuizbyCategory(args);
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const submitQuizHandler = async (req: Request, res: Response) => {
//   const args = req.body;
//   try {
//     const result = await submitQuiz(args);
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const getResultHandler = async (req: Request, res: Response) => {
//   const args = req.body;
//   try {
//     const result = await getResult(args);
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const getStatisticHandler = async (req: Request, res: Response) => {
//   const args = req.body;
//   try {
//     const result = await getStatistic(args);
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const createUserHandler = async (req: Request, res: Response) => {
//   const args = req.body;
//   try {
//     const result = await createUser(args);
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };
