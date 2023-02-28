import { Request, Response } from "express";
import {
  createTask,
  createMany,
  getTasks,
  updateTaskStatus,
  getTaskUnique,
  getUniqueOrThrow,
  updateMany,
  deleteId,
} from "./todoList.resolver";
import {
  CreateCodec,
  CreateManyCodec,
  DeleteIdCodec,
  GetTaskUniqueCodec,
  UpdateManyCodec,
  UpdateTaskCodec,
} from "./todoList.interface";

export const createTaskHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);

  try {
    CreateCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await createTask(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const createTaskManyHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);

  try {
    CreateManyCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await createMany(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getTasksHandler = async (req: Request, res: Response) => {
  console.log("getTasksHandler");
  try {
    const result = await getTasks();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getTaskUniqueHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    GetTaskUniqueCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await getTaskUnique(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getUniqueOrThrowHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    GetTaskUniqueCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await getUniqueOrThrow(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const updateTaskHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    UpdateTaskCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await updateTaskStatus(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const updateManyHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    UpdateManyCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await updateMany(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const deleteIdHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    DeleteIdCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await deleteId(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
