import { addCategoryHandler } from "./foodOrdering.handler";

export const FoodOrderingRoutes = [
  {
    method: "post",
    path: "/foodOrdering/addCategory",
    action: addCategoryHandler,
  },
];
