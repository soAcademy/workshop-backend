import { Request, Response } from "express";
import { CreateTaskCodec, CreateTasksCodec } from "./todoList.interface";
import {
  createTask,
  createTasks,
  deleteTasks,
  getTasks,
  getUniqueTasks,
  updateTasksStatus,
  updateTaskStatus,
} from "./todoList.resolver";

// export const createTaskHandler = async (req: Request, res: Response) => {
//   const args = req?.body;
//   try {
//     const result = await createTask({
//       task: args.task,
//     });
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

export const createTaskHandler = (req: Request, res: Response) => {
  if (CreateTaskCodec.decode(req?.body)._tag === "Right") {
    console.log(req?.body);
    return createTask(req?.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json({ error: String(error) }));
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

export const createTasksHandler = (req: Request, res: Response) => {
  if (CreateTasksCodec.decode(req?.body.tasks)._tag === "Right") {
    // console.log(req?.body);
    return createTasks(req?.body.tasks)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json({ error: String(error) }));
  } else {
    res.status(500).json({ error: "invalid" });
  }
};

export const getTasksHandler = async (req: Request, res: Response) => {
  try {
    const result = await getTasks();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getUniqueTasksHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await getUniqueTasks( {id: args.id} );
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await updateTaskStatus({
      id: args.id,
      status: args.status,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateTasksHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await updateTasksStatus({
      status: args.status,
      task: args.task,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const deleteTasksHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await deleteTasks( {id: args.id} );
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

