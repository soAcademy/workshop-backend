import { Request, Response, response } from "express";
import {
  createManyTasks,
  createTask,
  deleteManyTask,
  deleteTask,
  findUniqueTask,
  getTasks,
  updateManyTaskStatuses,
  updateTaskStatus,
} from "./todoList.resolver";
import { createTaskCodec, updateTaskStatusCodec } from "./todoList.interface";

export const createTaskHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  if (createTaskCodec.decode(body)._tag === "Right") {
    return createTask(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getTasksHandler = async (req: Request, res: Response) => {
  const body = req?.body;
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
  const body = req?.body;
  if (updateTaskStatusCodec.decode(body)._tag === "Right") {
    return updateTaskStatus(body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const createManyTasksHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await createManyTasks();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateManyTaskStatusesHandler = async (
  req: Request,
  res: Response
) => {
  const body = req?.body;
  console.log(body);
  try {
    const result = await updateManyTaskStatuses();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const findUniqueTaskHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await findUniqueTask();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const deleteTaskHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await deleteTask();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const deleteManyTaskHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await deleteManyTask();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
