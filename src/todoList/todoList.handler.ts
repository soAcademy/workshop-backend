import { Request, Response } from "express";
import { createTask } from "./todoList.resolver";

export const createTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await createTask({ task: args.task });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
