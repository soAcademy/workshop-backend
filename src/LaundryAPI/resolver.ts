import { PrismaClient } from "@prisma/client";
import {
  IAddModesToMachine,
  ICreateBranch,
  ICreateFranchisee,
  ICreateMachine,
  ICreateMaintenance,
  ICreateModes,
  ICreateTechnician,
  ICreateUsage,
  ICreateUser,
  IGetUserBalance,
  IRefillUserBalance,
  IRemoveMachine,
  IUpdateBranch,
  IUpdateFranchisee,
  IUpdateMode,
  IUpdateTechnician,
  IUpdateUser,
} from "./interface";
import { id } from "fp-ts/lib/Refinement";

export const prisma = new PrismaClient();

export const createFranchisee = (args: ICreateFranchisee) => {
  return prisma.franchisee.create({
    data: {
      name: args.name,
      phoneNumber: args.phoneNumber,
    },
  });
};

export const updateFranchisee = (args: IUpdateFranchisee) => {
  return prisma.franchisee.update({
    where: {
      id: args.userId,
    },
    data: {
      name: args.name || undefined,
      phoneNumber: args.phoneNumber || undefined,
    },
  });
};

export const createBranch = (args: ICreateBranch) => {
  return prisma.branch.create({
    data: {
      location: args.location,
      size: args.size,
      franchisee: {
        connect: {
          id: args.franchiseeId || undefined,
        },
      },
    },
  });
};

export const updateBranch = (args: IUpdateBranch) => {
  return prisma.branch.update({
    where: {
      id: args.branchId,
    },
    data: {
      size: args.size || undefined,
      franchiseeId: args.franchiseeId || undefined,
      location: args.location || undefined,
    },
  });
};

export const createMachine = (args: ICreateMachine) => {
  return prisma.machine.create({
    data: {
      type: args.type,
      size: args.size,
      brand: args.brand,
      model: args.model,
      mfd: new Date(args.mfd),
      warrantyExpirationDate: new Date(args.warrantyExpirationDate),
      branch: {
        connect: {
          id: args.branchId,
        },
      },
    },
  });
};

export const addModestoMachine = (args: IAddModesToMachine) => {
  return prisma.machine.update({
    where: {
      id: args.machineId,
    },
    data: {
      modes: {
        connect: args.modeIds.map((id) => ({
          id: id,
        })),
      },
    },
  });
};

export const removeMachine = (args: IRemoveMachine) => {
  return prisma.machine.update({
    where: {
      id: args.machineId,
    },
    data: {
      branch: {
        disconnect: true,
      },
    },
  });
};

export const createModes = (args: ICreateModes) => {
  return prisma.mode.createMany({
    data: args.map((e) => ({
      mode: e.mode,
      duration: e.duration,
      weight: e.weight,
      price: e.price,
    })),
  });
};

export const updateMode = (args: IUpdateMode) => {
  return prisma.mode.update({
    where: {
      id: args.modeId,
    },
    data: {
      mode: args.mode || undefined,
      duration: args.duration || undefined,
      weight: args.weight || undefined,
      price: args.price || undefined,
    },
  });
};

export const createUser = (args: ICreateUser) => {
  return prisma.user.create({
    data: args,
  });
};

export const updateUser = (args: IUpdateUser) => {
  return prisma.user.update({
    where: {
      id: args.userId,
    },
    data: {
      name: args.name || undefined,
      phoneNumber: args.phoneNumber || undefined,
    },
  });
};

export const getUserBalance = (args: IGetUserBalance) => {
  return prisma.user.findFirstOrThrow({
    where: {
      id: args.userId,
    },
    select: {
      id: true,
      balance: true,
    },
  });
};

export const refillUserBalance = async (args: IRefillUserBalance) => {
  const { balance } = await prisma.user.findFirstOrThrow({
    where: {
      id: args.userId,
    },
    select: {
      balance: true,
    },
  });
  return prisma.user.update({
    where: {
      id: args.userId,
    },
    data: {
      balance: balance + args.topup,
      refillHistories: {
        create: {
          amount: args.topup,
        },
      },
    },
  });
};

export const createTechnician = (args: ICreateTechnician) => {
  return prisma.technician.create({
    data: {
      ...args,
      joinDate: new Date(args.joinDate),
    },
  });
};

export const updateTechnician = (args: IUpdateTechnician) => {
  return prisma.technician.update({
    where: {
      username: args.username,
    },
    data: {
      firstName: args.firstName || undefined,
      lastName: args.lastName || undefined,
      phoneNumber: args.phoneNumber || undefined,
    },
  });
};

export const createMaintenance = (args: ICreateMaintenance) => {
  return prisma.maintenance.create({
    data: {
      level: args.level,
      cause: args.cause,
      machine: {
        connect: {
          id: args.machineId,
        },
      },
      technicians: {
        connect: args.technicianIds.map((id) => ({
          id: id,
        })),
      },
    },
    include: {
      technicians: {
        select: {
          id: true,
          firstName: true,
          phoneNumber: true,
        },
      },
    },
  });
};

export const createUsage = (args: ICreateUsage) => {
  return prisma.usage.create({
    data: {
      ...args,
      startTime: new Date(args.startTime),
      finishTime: new Date(args.finishTime),
    },
  });
};
