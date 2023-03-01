import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  IGetCategories,
  IGetMenus,
  IUpdateCategory,
} from "./korKitchen.interface";
export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) =>
  prisma.korKitchenCategory.create({
    data: {
      name: args.name,
    },
  });

export const getCategories = (args: IGetCategories) =>
  prisma.korKitchenCategory.findMany({
    select: {
      id: true,
      name: true,
    },
  });

export const createMenu = (args: {
  name: string;
  price: number;
  image: string;
  category: string;
}) =>
  prisma.korKitchenMenu.create({
    data: {
      name: args.name,
      price: args.price,
      image: args.image,
      category: {
        connect: {
          name: args.category,
        },
      },
    },
  });

export const updateCategory = (args: IUpdateCategory) =>
  prisma.korKitchenCategory.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });

export const getMenus = (args: IGetMenus) =>
  prisma.korKitchenMenu.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
      category: true,
    },
  });
