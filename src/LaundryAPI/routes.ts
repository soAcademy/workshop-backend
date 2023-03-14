import { addModestoMachineHandler, createBranchHandler, createFranchiseeHandler, createMachineHandler, createMaintenanceHandler, createModesHandler, createTechnicianHandler, createUsageHandler, createUserHandler, getUserBalanceHandler, refillUserBalanceHandler, removeMachineHandler, updateBranchHandler, updateFranchiseeHandler, updateModeHandler, updateTechnicianHandler, updateUserHandler } from "./handler";

export const Routes = [
  {
    method: "post",
    path: "/laundry/createFranchisee",
    action: createFranchiseeHandler,
  },
  {
    method: "post",
    path: "/laundry/updateFranchisee",
    action: updateFranchiseeHandler,
  },
  {
    method: "post",
    path: "/laundry/createBranch",
    action: createBranchHandler,
  },
  {
    method: "post",
    path: "/laundry/updateBranch",
    action: updateBranchHandler,
  },
  {
    method: "post",
    path: "/laundry/createMachine",
    action: createMachineHandler,
  },
  {
    method: "post",
    path: "/laundry/addModestoMachine",
    action: addModestoMachineHandler,
  },
  {
    method: "post",
    path: "/laundry/removeMachine",
    action: removeMachineHandler,
  },
  {
    method: "post",
    path: "/laundry/createModes",
    action: createModesHandler,
  },
  {
    method: "post",
    path: "/laundry/updateMode",
    action: updateModeHandler,
  },
  {
    method: "post",
    path: "/laundry/createUser",
    action: createUserHandler,
  },
  {
    method: "post",
    path: "/laundry/updateUser",
    action: updateUserHandler,
  },
  {
    method: "post",
    path: "/laundry/getUserBalance",
    action: getUserBalanceHandler,
  },
  {
    method: "post",
    path: "/laundry/refillUserBalance",
    action: refillUserBalanceHandler,
  },
  {
    method: "post",
    path: "/laundry/createTechnician",
    action: createTechnicianHandler,
  },
  {
    method: "post",
    path: "/laundry/updateTechnician",
    action: updateTechnicianHandler,
  },
  {
    method: "post",
    path: "/laundry/createMaintenance",
    action: createMaintenanceHandler,
  },
  {
    method: "post",
    path: "/laundry/createUsage",
    action: createUsageHandler,
  },
];
