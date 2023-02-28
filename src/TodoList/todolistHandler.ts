import { Request, Response } from "express";
import {
  CreateManyTaskCodec,
  CreateTaskCodec,
  DeleteManyTaskCodec,
  DeleteTaskCodec,
  FindUniqueTaskCodec,
  UpdateManyTaskStatusCodec,
  UpdateTaskStatusCodec,
} from "./todoList.interface";
import {
  createManyTask,
  createTask,
  deleteManyTasks,
  deleteTask,
  findUnique,
  getTask,
  updateManyTasks,
  updateTaskStatus,
} from "./todoList.resolve";
export const createTaskHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  // console.log("body>>", body);
  // console.log(CreateTaskCodec.decode(body));
  CreateTaskCodec.decode(body)._tag === "Right"
    ? await createTask({ task: body?.task }).then((response) =>
        res.status(200).json(response)
      )
    : res.status(200).send("Error to validate");
};

export const getTaskHandler = async (req: Request, res: Response) => {
  try {
    await getTask().then((response) => res.status(200).json(response));
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateTaskStatusHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  // console.log("body>>", body);
  // console.log(UpdateTaskStatusCodec.decode(body));
  UpdateTaskStatusCodec.decode(body)._tag === "Right"
    ? await updateTaskStatus({ id: body?.id, status: body?.status }).then(
        (response) => res.status(200).json(response)
      )
    : res.status(500).send("Error to validate");
};

export const deleteTaskHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  DeleteTaskCodec.decode(body)._tag === "Right"
    ? await deleteTask({ id: body?.id }).then((response) =>
        res.status(200).json(response)
      )
    : res.status(500).send("Error to validate");
};

export const createManyTaskHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  CreateManyTaskCodec.decode(body)._tag === "Right"
    ? await createManyTask(body).then((response) =>
        res.status(200).json(response)
      )
    : res.status(500).send("Error to validate");
};

export const findUniqueHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body", body);
  FindUniqueTaskCodec.decode(body)._tag === "Right"
    ? await findUnique(body).then((response) => res.status(200).json(response))
    : res.status(500).send("Error to validate");
};

export const updateManyTasksHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body", body);
  console.log(UpdateManyTaskStatusCodec.decode(body));
  UpdateManyTaskStatusCodec.decode(body)._tag === "Right"
    ? await updateManyTasks(body).then((response) =>
        res.status(200).json(response)
      )
    : res.status(500).send("Error to validate");
};

export const deleteManyTasksHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body", body);
  DeleteManyTaskCodec.decode(body)._tag === "Right"
    ? await deleteManyTasks(body).then((response) =>
        res.status(200).json(response)
      )
    : res.status(500).send("Error to validate");
};
