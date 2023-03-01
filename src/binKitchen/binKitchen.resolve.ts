import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateManyMenus,
  ICreateMenu,
} from "./binKitchen.interface";
export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) =>
  prisma.binKitchenCategory.create({
    data: {
      name: args.category,
    },
  });

export const getCategories = () =>
  prisma.binKitchenCategory.findMany({
    select: {
      id: true,
      name: true,
    },
  });

export const createMenu = (args: ICreateMenu) =>
  prisma.binKitchenMenu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      category: {
        connect: {
          name: args.category,
        },
      },
    },
  });

export const createManyMenus = (args: ICreateManyMenus) =>
  prisma.binKitchenMenu.createMany({
    data: args.map((r) => ({
      name: r.name,
      image: r.image,
      price: r.price,
      category: {
        connect: {
          name: r.category,
        },
      },
    })),
  });
