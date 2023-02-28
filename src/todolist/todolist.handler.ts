import { Request, Response } from "express";
import {
  createManyTasksCodec,
  createTaskCodec,
  deleteTaskCodec,
  getTasksCodec,
  updateTaskCodec,
} from "./todolist.interface";
import {
  createManyTasks,
  createTask,
  deleteDoneTasks,
  deleteTask,
  getTasks,
  updateTask,
} from "./todolist.resolver";

export const createTaskHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (createTaskCodec.decode(body)._tag === "Right") {
    return createTask(body)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const createManyTasksHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (createManyTasksCodec.decode(body)._tag === "Right") {
    return createManyTasks(body)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getTasksHandler = (req: Request, res: Response) => {
  const body = req?.body;
  console.log('body', body)
  if (getTasksCodec.decode(body)._tag === "Right") {
    try {
      getTasks(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).json(err));
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const updateTaskHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (updateTaskCodec.decode(body)._tag === "Right") {
    return updateTask(body)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const deleteTaskHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (deleteTaskCodec.decode(body)._tag === "Right") {
    return deleteTask(body)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const deleteDoneTasksHandler = (req: Request, res: Response) => {
  try {
    return deleteDoneTasks()
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  } catch (err) {
    res.status(500).send(err);
  }
};
