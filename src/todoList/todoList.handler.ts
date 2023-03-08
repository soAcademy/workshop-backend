import express, { Application, Request, Response } from "express";
import { createManyTasks, createTask, deleteManyTasks, deleteTask, findUniqueOrThrowTask, findUniqueTask, getTasks, updateManyTasks, updateTask } from "./todoList.resolver";
import { createManyTasksCodec, createTaskCodec, deleteManyTasksCodec, deleteTaskCodec, findUniqueOrThrowTaskCodec, findUniqueTaskCodec, updateManyTasksCodec, updateTaskCodec } from "./todoList.interface";

export const createTaskHandler = async (req: Request, res: Response) => {
  try {
    if (createTaskCodec.decode(req?.body)._tag === "Right") {
      const response = await createTask(req?.body);
      res.status(200).json(response);
    } else {
      res.status(404).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const createManyTasksHandler = async (req: Request, res: Response) => {
  try {
    if (createManyTasksCodec.decode(req?.body)._tag === "Right") {
      const response = await createManyTasks(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const getTasksHandler = async (req: Request, res: Response) => {
  try {
    const response = await getTasks();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const updateTaskHandler = async (req: Request, res: Response) => {
  try {
    if (updateTaskCodec.decode(req?.body)._tag === "Right") {
      const response = await updateTask(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const updateManyTasksHandler = async (req: Request, res: Response) => {
  try {
    if (updateManyTasksCodec.decode(req?.body)._tag === "Right") {
      const response = await updateManyTasks(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const findUniqueTaskHandler = async (req: Request, res: Response) => {
  try {
    if (findUniqueTaskCodec.decode(req?.body)._tag === "Right") {
      const response = await findUniqueTask(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const findUniqueOrThrowTaskHandler = async (req: Request, res: Response) => {
  try {
    if (findUniqueOrThrowTaskCodec.decode(req?.body)._tag === "Right") {
      const response = await findUniqueOrThrowTask(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const deleteTaskHandler = async (req: Request, res: Response) => {
  try {
    if (deleteTaskCodec.decode(req?.body)._tag === "Right") {
      const response = await deleteTask(req?.body);
      res.status(200).json(response);
    } else {
      res.status(404).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const deleteManyTasksHandler = async (req: Request, res: Response) => {
  try {
    if (deleteManyTasksCodec.decode(req?.body)._tag === "Right") {
      const response = await deleteManyTasks(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

