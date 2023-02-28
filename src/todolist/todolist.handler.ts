import { Request, Response } from "express";
import { createTaskCodec, updateTaskCodec } from "./todolist.interface";
import { createTask, getTasks, updateTask } from "./todolist.resolver";

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

export const getTasksHandler = (req: Request, res: Response) => {
  try {
    getTasks()
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  } catch (err) {
    res.status(500).send(err);
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
