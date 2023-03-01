import { PrismaClient } from "../../prisma/client-food";
import {
  IAddCategory,
  IAddMenu,
  IAddOrder,
  IGetMenu,
  IGetOrders,
  IUpdateCategory,
  IUpdateMenu,
  IUpdateOrder,
} from "./foodOrdering.interface";

export const prisma = new PrismaClient();

export const addCategory = (args: IAddCategory) => {
  return prisma.category.upsert({
    where: { name: args.name },
    create: { name: args.name },
    update: {},
  });
};

export const getCategory = () => {
  return prisma.category.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const updateCategory = (args: IUpdateCategory) => {
  return prisma.category.update({
    where: { id: args.id },
    data: {
      name: args.name,
    },
  });
};

export const addMenu = (args: IAddMenu) => {
  return prisma.menu.upsert({
    where: { name: args.name },
    create: {
      name: args.name,
      category: {
        connect: {
          id: args.categoryId,
        },
      },
      ...(args.image && { image: args.image }),
      ...(args.price && { price: args.price }),
    },
    update: {},
  });
};

export const getMenu = (args: IGetMenu) => {
  return args.categoryId
    ? prisma.menu.findMany({
        where: { categoryId: args.categoryId },
        orderBy: {
          id: "asc",
        },
      })
    : prisma.menu.findMany({
        orderBy: {
          id: "asc",
        },
      });
};

export const updateMenu = (args: IUpdateMenu) => {
  return prisma.menu.update({
    where: { id: args.id },
    data: {
      name: args?.name,
      category: {
        connect: {
          id: args?.categoryId,
        },
      },
      image: args?.image,
      price: args?.price,
    },
  });
};

export const addOrder = (args: IAddOrder) => {
  return prisma.orders.create({
    data: {
      table_id: args.table_id,
      order_items: {
        createMany: {
          data: args.items.map((e) => ({
            menuId: e.menuId,
            quantity: e.quantity,
          })),
        },
      },
    },
  });
};

export const getOrders = (args: IGetOrders) => {
  return args.table_id
    ? prisma.orders.findMany({
        where: {
          table_id: args.table_id,
        },
        orderBy: {
          id: "asc",
        },
      })
    : prisma.orders.findMany({
        orderBy: {
          id: "asc",
        },
      });
};

export const updateOrder = (args: IUpdateOrder) => {
  return prisma.orders.update({
    where: {
      id: args.order_id,
    },
    data: {
      status: args.status,
    },
  });
};
