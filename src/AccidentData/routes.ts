import {
  getAccidentDataHandler,
  getUniqueVehiclesHandler,
  getUniqueYearsHandler,
} from "./handler";

export const AccidentRoutes = [
  {
    path: "/getAccidentData",
    method: "post",
    action: getAccidentDataHandler,
  },
  {
    path: "/getUniqueVehicles",
    method: "post",
    action: getUniqueVehiclesHandler,
  },
  {
    path: "/getUniqueYears",
    method: "post",
    action: getUniqueYearsHandler,
  },
];
