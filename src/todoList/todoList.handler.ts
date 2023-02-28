import { Request, Response } from "express";
import { createTask, getTasks, updateTaskStatus } from "./todoList.resolver";
import { createTaskCodec, updateTaskStatusCodec } from "./todoList.interface";

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
