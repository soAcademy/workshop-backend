import { Request, Response } from "express";
import {
  createTask,
  updateTaskStatus,
  getTasks,
  deleteTaskStatus,
  createManyTasks,
  updateManyTaskByStatus,
  findUniqueOrThrow,
} from "./todoList.resolver";
import {
  createManyTasksCodec,
  createTaskCodec,
  deleteTaskStatusCodec,
  findUniqueOrThrowCodec,
  updateManyTasksByStatusCodec,
  updateTaskStatusCodec,
} from "./todoList.interface";

export const createTaskHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  console.log(createTaskCodec.decode(req?.body));
  try {
    const result = createTask({
      task: String(args.task),
    });
    return createTaskCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await result)
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createManyTasksHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  console.log(createManyTasksCodec.decode(req?.body));
  try {
    const result = createManyTasks(args);
    return createManyTasksCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await result)
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTasksHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  try {
    const result = await getTasks();
    return res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateTaskStatusHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  console.log(updateTaskStatusCodec.decode(req?.body));
  try {
    const result = updateTaskStatus({
      id: args.id,
      status: args.status,
    });
    return updateTaskStatusCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await result)
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateManyTasksByStatusHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log("args", args);
  console.log(updateManyTasksByStatusCodec.decode(req?.body));
  try {
    const result = updateManyTaskByStatus({
      status: args.status,
      task: args.task,
    });
    return updateManyTasksByStatusCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await result)
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const deleteTaskStatusHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  console.log(deleteTaskStatusCodec.decode(req?.body));
  try {
    const result = deleteTaskStatus({
      id: args.id,
    });
    return deleteTaskStatusCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await result)
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const findUniqueOrThrowHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  console.log(findUniqueOrThrowCodec.decode(req?.body));
  try {
    const result = findUniqueOrThrow({
      id: args.id,
    });
    return findUniqueOrThrowCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await result)
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
