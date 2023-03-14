import {
  MachineTypeEnum,
  MaintenanceLevelEnum,
  ModeEnum,
  SizeEnum,
} from "@prisma/client";
import * as t from "io-ts";
import * as td from "io-ts-types";
import { optional, strict } from "io-ts-extra";

export const createFranchiseeCodec = t.type({
  name: t.string,
  phoneNumber: t.string,
});

export interface ICreateFranchisee
  extends t.TypeOf<typeof createFranchiseeCodec> {}

export const updateFranchiseeCodec = strict({
  userId: t.number,
  name: optional(t.string),
  phoneNumber: optional(t.string),
});

export interface IUpdateFranchisee
  extends t.TypeOf<typeof updateFranchiseeCodec> {}

export const createBranchCodec = strict({
  location: t.string,
  size: t.keyof({
    [SizeEnum.S]: null,
    [SizeEnum.M]: null,
    [SizeEnum.L]: null,
    [SizeEnum.XL]: null,
  }),
  franchiseeId: optional(t.number),
});

export interface ICreateBranch extends t.TypeOf<typeof createBranchCodec> {}

export const updateBranchCodec = strict({
  branchId: t.number,
  size: optional(
    t.keyof({
      [SizeEnum.S]: null,
      [SizeEnum.M]: null,
      [SizeEnum.L]: null,
      [SizeEnum.XL]: null,
    })
  ),
  franchiseeId: optional(t.number),
  location: optional(t.string),
});

export interface IUpdateBranch extends t.TypeOf<typeof updateBranchCodec> {}

export const createMachineCodec = t.type({
  type: t.keyof({
    [MachineTypeEnum.DRYER]: null,
    [MachineTypeEnum.WASHER_FRONT]: null,
    [MachineTypeEnum.WASHER_TOP]: null,
  }),
  size: t.number,
  brand: t.string,
  model: t.string,
  mfd: t.string,
  warrantyExpirationDate: t.string,
  branchId: t.number,
});

export interface ICreateMachine extends t.TypeOf<typeof createMachineCodec> {}

export const addModestoMachineCodec = t.type({
  machineId: t.number,
  modeIds: t.array(t.number),
});

export interface IAddModesToMachine
  extends t.TypeOf<typeof addModestoMachineCodec> {}

export const removeMachineCodec = t.type({
  machineId: t.number,
});

export interface IRemoveMachine extends t.TypeOf<typeof removeMachineCodec> {}

export const createModesCodec = t.array(
  t.type({
    mode: t.keyof({
      [ModeEnum.CLEAN]: null,
      [ModeEnum.COLD_DRY]: null,
      [ModeEnum.COLD_WASH]: null,
      [ModeEnum.DELICATE_WASH]: null,
      [ModeEnum.HEAVY_WASH]: null,
      [ModeEnum.HOT_DRY]: null,
      [ModeEnum.HOT_WASH]: null,
      [ModeEnum.QUICK_WASH]: null,
      [ModeEnum.SOFT_WASH]: null,
      [ModeEnum.WARM_DRY]: null,
      [ModeEnum.WARM_WASH]: null,
      [ModeEnum.WOOL]: null,
    }),
    duration: t.number,
    weight: t.number,
    price: t.number,
  })
);

export interface ICreateModes extends t.TypeOf<typeof createModesCodec> {}

export const updateModeCodec = strict({
  modeId: t.number,
  mode: optional(
    t.keyof({
      [ModeEnum.CLEAN]: null,
      [ModeEnum.COLD_DRY]: null,
      [ModeEnum.COLD_WASH]: null,
      [ModeEnum.DELICATE_WASH]: null,
      [ModeEnum.HEAVY_WASH]: null,
      [ModeEnum.HOT_DRY]: null,
      [ModeEnum.HOT_WASH]: null,
      [ModeEnum.QUICK_WASH]: null,
      [ModeEnum.SOFT_WASH]: null,
      [ModeEnum.WARM_DRY]: null,
      [ModeEnum.WARM_WASH]: null,
      [ModeEnum.WOOL]: null,
    })
  ),
  duration: optional(t.number),
  weight: optional(t.number),
  price: optional(t.number),
});

export interface IUpdateMode extends t.TypeOf<typeof updateModeCodec> {}

export const createUserCodec = t.type({
  username: t.string,
  name: t.string,
  phoneNumber: t.string,
});
export interface ICreateUser extends t.TypeOf<typeof createUserCodec> {}

export const updateUserCodec = t.type({
  userId: t.number,
  name: optional(t.string),
  phoneNumber: optional(t.string),
});
export interface IUpdateUser extends t.TypeOf<typeof updateUserCodec> {}

export const createTechnicianCodec = t.type({
  username: t.string,
  firstName: t.string,
  lastName: t.string,
  phoneNumber: t.string,
  joinDate: t.string,
});

export interface ICreateTechnician
  extends t.TypeOf<typeof createTechnicianCodec> {}

export const updateTechnicianCodec = strict({
  username: t.string,
  firstName: optional(t.string),
  lastName: optional(t.string),
  phoneNumber: optional(t.string)
})
export interface IUpdateTechnician
  extends t.TypeOf<typeof updateTechnicianCodec> {}

export const getUserBalanceCodec = t.type({ userId: t.number });

export interface IGetUserBalance extends t.TypeOf<typeof getUserBalanceCodec> {}

export const refillUserBalanceCodec = t.type({
  userId: t.number,
  topup: t.number,
});

export interface IRefillUserBalance
  extends t.TypeOf<typeof refillUserBalanceCodec> {}

export const createMaintenanceCodec = t.type({
  level: t.keyof({
    [MaintenanceLevelEnum.MINOR]: null,
    [MaintenanceLevelEnum.MAJOR]: null,
    [MaintenanceLevelEnum.SCHEDULE]: null,
  }),
  cause: t.string,
  machineId: t.number,
  technicianIds: t.array(t.number),
});

export interface ICreateMaintenance
  extends t.TypeOf<typeof createMaintenanceCodec> {}

export const createUsageCodec = t.type({
  userId: t.number,
  machineId: t.number,
  modeId: t.number,
  price: t.number,
  startTime: t.string,
  finishTime: t.string,
});

export interface ICreateUsage extends t.TypeOf<typeof createUsageCodec> {}
