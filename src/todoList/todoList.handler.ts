import { Request, Response } from "express";
import {
  CreateTaskCodec,
  CreateTaskManyCodec,
  DeleteTaskCodec,
  FindUniqueOfThrowCodec,
  FindUniqueTaskCodec,
  UpdateTaskManyCodec,
  UpdateTaskStatusCodec,
} from "./todoList.interface";
import {
  createTask,
  createTaskMany,
  deleteTask,
  findUniqueOrThrow,
  findUniqueTask,
  getTask,
  updateTaskMany,
  updateTaskStatus,
} from "./todoList.resolver";

export const createTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(CreateTaskCodec.decode(args));

  if (CreateTaskCodec.decode(args)._tag === "Right") {
    const result = await createTask({
      task: args.task,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: String("Error invalid codec") });
  }
};

export const createTaskManyHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(CreateTaskManyCodec.decode(args));

  if (CreateTaskManyCodec.decode(args)._tag === "Right") {
    const result = await createTaskMany(args);
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: String("Error invalid codec") });
  }
};

export const getTaskHandler = async (req: Request, res: Response) => {
  try {
    const result = await getTask();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const updateTaskStatusHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(UpdateTaskStatusCodec.decode(args));

  if (UpdateTaskStatusCodec.decode(args)._tag === "Right") {
    const result = await updateTaskStatus({
      id: args.id,
      status: args.status,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: String("Error invalid codec") });
  }
};

export const updateTaskManyHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(UpdateTaskManyCodec.decode(args));

  if (UpdateTaskManyCodec.decode(args)._tag === "Right") {
    const result = await updateTaskMany({
      id: args.id,
      status: args.status,
      updateStatus: args.updateStatus,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: String("Error invalid codec") });
  }
};

export const deleteTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(DeleteTaskCodec.decode(args));

  try {
    if (DeleteTaskCodec.decode(args)._tag === "Right") {
      const result = await deleteTask({
        id: args.id,
      });
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const findUniqueTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(FindUniqueTaskCodec.decode(args));

  if (FindUniqueTaskCodec.decode(args)._tag === "Right") {
    const result = await findUniqueTask({
      id: args.id,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: String("Error invalid codec") });
  }
};

// export const findUniqueOrThrowHandler = async (req: Request, res: Response) => {
//   const args = req?.body;
//   console.log(args);
//   console.log(FindUniqueOfThrowCodec.decode(args));

//   if (FindUniqueOfThrowCodec.decode(args)._tag === "Right") {
//     const result = await findUniqueOrThrow({
//       id: args.id,
//     });
//     res.status(200).json(result);
//   } else {
//     res.status(500).json({ error: String("Error invalid codec") });
//   }
// };

export const findUniqueOrThrowHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(FindUniqueOfThrowCodec.decode(args));

  try {
    if (FindUniqueOfThrowCodec.decode(args)._tag === "Right") {
      const result = await findUniqueOrThrow({
        id: args.id,
      });
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
