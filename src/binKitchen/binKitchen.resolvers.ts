import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateMenu,
  ICreateOrder,
} from "./binKitchen.interfaces";

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

export const createOrder = (args: ICreateOrder) => {
  return prisma.order.create({
    data: {
      // status: "PENDING",
      tableId: args.tableId,
      items: {
        // create: [
        //   {
        //     menu: {
        //       connect: {
        //         id: 2,
        //       },
        //     },
        //     quantity: 2,
        //     totalPrice: 300,
        //   },
        //   {
        //     menu: {
        //       connect: {
        //         id: 3,
        //       },
        //     },
        //     quantity: 1,
        //     totalPrice: 130,
        //   },
        // ],
        create: args.items,
      },
    },
  });
};
