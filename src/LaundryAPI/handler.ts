import { Request, Response } from "express";
import { addModestoMachineCodec, createBranchCodec, createFranchiseeCodec, createMachineCodec, createMaintenanceCodec, createModesCodec, createTechnicianCodec, createUsageCodec, createUserCodec, getUserBalanceCodec, refillUserBalanceCodec, removeMachineCodec, updateBranchCodec, updateFranchiseeCodec, updateModeCodec, updateTechnicianCodec, updateUserCodec } from "./interface";
import { addModestoMachine, createBranch, createFranchisee, createMachine, createMaintenance, createModes, createTechnician, createUsage, createUser, getUserBalance, refillUserBalance, removeMachine, updateBranch, updateFranchisee, updateMode, updateTechnician, updateUser } from "./resolver";

export const createFranchiseeHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createFranchiseeCodec.decode(body)._tag === "Right") {
      return createFranchisee(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateFranchiseeHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateFranchiseeCodec.decode(body)._tag === "Right") {
      return updateFranchisee(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createBranchHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createBranchCodec.decode(body)._tag === "Right") {
      return createBranch(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateBranchHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateBranchCodec.decode(body)._tag === "Right") {
      return updateBranch(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createMachineHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createMachineCodec.decode(body)._tag === "Right") {
      return createMachine(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addModestoMachineHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (addModestoMachineCodec.decode(body)._tag === "Right") {
      return addModestoMachine(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const removeMachineHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (removeMachineCodec.decode(body)._tag === "Right") {
      return removeMachine(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createModesHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createModesCodec.decode(body)._tag === "Right") {
      return createModes(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateModeHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateModeCodec.decode(body)._tag === "Right") {
      return updateMode(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createUserHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createUserCodec.decode(body)._tag === "Right") {
      return createUser(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUserHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateUserCodec.decode(body)._tag === "Right") {
      return updateUser(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUserBalanceHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (getUserBalanceCodec.decode(body)._tag === "Right") {
      return getUserBalance(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const refillUserBalanceHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (refillUserBalanceCodec.decode(body)._tag === "Right") {
      return refillUserBalance(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createTechnicianHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createTechnicianCodec.decode(body)._tag === "Right") {
      return createTechnician(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateTechnicianHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (updateTechnicianCodec.decode(body)._tag === "Right") {
      return updateTechnician(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createMaintenanceHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createMaintenanceCodec.decode(body)._tag === "Right") {
      return createMaintenance(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createUsageHandler = (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (createUsageCodec.decode(body)._tag === "Right") {
      return createUsage(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed To Validate Codec");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
