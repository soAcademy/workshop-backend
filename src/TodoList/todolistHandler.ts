import { Request, Response } from "express";
import { CreateTaskCodec, UpdateTaskStatusCodec } from "./todoList.interface";
import { createTask, getTask, updateTaskStatus } from "./todoList.resolve";
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
  await getTask().then((response) => res.status(200).json(response));
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
