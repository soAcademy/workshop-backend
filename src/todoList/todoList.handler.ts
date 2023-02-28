import { Request, Response } from "express";
import {
  createManyTasks,
  createTask,
  deleteManyTasks,
  deleteTasks,
  getTasks,
  getUniqueTask,
  updateManyTasks,
  updateTaskStatus,
} from "./todoList.resolver";
import {
  createManyTasksCodec,
  createTaskCodec,
  deleteTasksCodec,
  getUniqueTaskCodec,
  updateTaskStatusCodec,
} from "./todoList.interface";

// export const createTaskHandler = async (req: Request, res: Response) => {
//   const args = req?.body;
//   try {
//     const result = await createTask({ task: args.task });
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({ error: String(e) });
//   }
// };

export const createTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (createTaskCodec.decode(args)._tag === "Right") {
    try {
      const result = await createTask(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateTaskStatusHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (updateTaskStatusCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateTaskStatus(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getTasksHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTasks();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const getUniqueTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (getUniqueTaskCodec.decode(args)._tag === "Right") {
    try {
      const result = await getUniqueTask(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createManyTasksHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (createManyTasksCodec.decode(args)._tag === "Right") {
    try {
      const result = await createManyTasks(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateManyTasksHandler = async (req: Request, res: Response) => {
  try {
    const response = await updateManyTasks();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const deleteTasksHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (deleteTasksCodec.decode(args)._tag === "Right") {
    try {
      const result = await deleteTasks(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const deleteManyTasksHandler = async (req: Request, res: Response) => {
  try {
    const response = await deleteManyTasks();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};
