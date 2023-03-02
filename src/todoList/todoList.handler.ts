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
import {
  createManyTasksCodec,
  createTaskCodec,
  deleteTaskCodec,
  updateManyTaskStatusesCodec,
  updateTaskStatusCodec,
} from "./todoList.interface";
import { readerTask } from "fp-ts";

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

export const updateTaskStatusHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (updateTaskStatusCodec.decode(body)._tag === "Right") {
    return updateTaskStatus(body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

// export const createManyTasksHandler = async (req: Request, res: Response) => {
//   try {
//     const result = await createManyTasks();
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

export const createManyTasksHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (createManyTasksCodec.decode(body)._tag === "Right") {
    return createManyTasks(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

// export const updateManyTaskStatusesHandler = async (
//   req: Request,
//   res: Response
// ) => {
//   const body = req?.body;
//   console.log(body);
//   try {
//     const result = await updateManyTaskStatuses();
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

export const updateManyTaskStatusesHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (updateManyTaskStatusesCodec.decode(body)._tag === "Right") {
    return updateManyTaskStatuses(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const findUniqueTaskHandler = async (req: Request, res: Response) => {
  try {
    const result = await findUniqueTask();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const deleteTaskHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (deleteTaskCodec.decode(body)._tag === "Right") {
    return deleteTask(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const deleteManyTaskHandler = async (req: Request, res: Response) => {
  try {
    const result = await deleteManyTask();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
