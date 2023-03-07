// จัดการตัวที่สอง
import { Request, Response } from "express";
import {createTask, deleteTasks, getTasks, updateTaskStatus, findThrow, createManyTasks} from "./todoList.resolver";

export const createTaskHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return createTask({
    task: body.task,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

// อันนี้เราจะเอาทั้งหมด เราเลยไม่ต้องมาเก็ฐ status เพราะเราจะเอาทั้งหมด
export const getTaskHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return getTasks()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

// ปกติเราจะคิดใช้แค่ตัว id/ status ก็พอแล้ว
export const updateTaskStatusHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return updateTaskStatus({
    id: body.id,
    status: body.status,
    task: body.task,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

// อันนี้ไม่ควรที่จะเป็นแบบนี้แต่เราขัดดอกไปก่อนโดยในการใช้ body ไปเลย
export const createManyTasksHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return createManyTasks(body)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const deleteTasksHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return deleteTasks({
    id: body.id,
    status: body.status,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const findThrowHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return findThrow({
    id: body.id,
    status: body.status,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};