import { PrismaClient } from "../../prisma/client";
import { ICreateCategory, ICreateMenu } from "./binKitchen.interfaces";

export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) => {
  return prisma.category.create({
    data: {
      name: args.name,
    },
  });
};

export const getCategories = () => {
  return prisma.category.findMany({
    orderBy: { name: "asc" },
  });
};

export const createMenu = (args: ICreateMenu) => {
  return prisma.menu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      category: {
        connect: {
          id: args.categoryId,
        },
      },
    },
  });
};

export const getMenus = () => {
  return prisma.menu.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      price: true,
      category: {
        select: {
          name: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });
};
