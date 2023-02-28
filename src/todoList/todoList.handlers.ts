import { Request, Response } from "express";

import { createTask, getTasks, updateTaskStatus } from "./todoList.resolvers";

export const createTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await createTask({
      task: args.task,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTasksHandler = async (req: Request, res: Response) => {
  try {
    const result = await getTasks();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateTaskStatusHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await updateTaskStatus({
      id: args.id,
      status: args.status,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
