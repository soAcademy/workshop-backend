// https://trpc.io/docs/server/adapters/express
// https://github.com/guushamann/Todo-tRPC-Vue3

import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { z } from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
import { PrismaClient } from "../../prisma/client";
import { createCategory, getCategories } from "./binKitchen.resolvers";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create();

export const prisma = new PrismaClient();

export const appRouter = t.router({
  createCategory: t.procedure
    .input(z.object({ name: z.string() }))
    .mutation(async (req) => {
      return createCategory(req.input);
    }),
  getCategories: t.procedure.query(async () => {
    return getCategories();
  }),
});

export type AppRouter = typeof appRouter;
