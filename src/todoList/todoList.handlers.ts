import { Request, Response } from "express";

import {
  CreateTaskCodec,
  CreateTasksCodec,
  UpdateTaskStatusCodec,
} from "./todoList.interfaces";
import {
  createTask,
  createTasks,
  getTasks,
  updateTaskStatus,
} from "./todoList.resolvers";

export const createTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  if (CreateTaskCodec.decode(args)._tag === "Right") {
    try {
      const result = await createTask({
        task: args.task,
        bgColor: args.bgColor,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};

export const createTasksHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  if (CreateTasksCodec.decode(args)._tag === "Right") {
    try {
      const result = await createTasks(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
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
  if (UpdateTaskStatusCodec.decode(args)._tag === "Right") {
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
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};
