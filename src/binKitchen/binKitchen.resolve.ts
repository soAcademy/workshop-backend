import { PrismaClient } from "../../prisma/client";
import * as t from "io-ts";

export const prisma = new PrismaClient();

//
export const CreateCategoryCodec = t.type({
  name: t.string,
});
export interface ICreateCategory extends t.TypeOf<typeof CreateCategoryCodec> {}

export const createCategory = (args: ICreateCategory) =>
  prisma.category.create({
    data: {
      name: args.name,
    },
  });

export const getCategories = () => prisma.category.findMany();

export const UpdateCategoryCodec = t.type({
  id: t.number,
  name: t.string,
});
export interface IUpdateCategory extends t.TypeOf<typeof UpdateCategoryCodec> {}

export const updateCategory = (args: IUpdateCategory) =>
  prisma.category.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });

//
export const CreateMenuCodec = t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  categoryId: t.number,
});
export interface ICreateMenu extends t.TypeOf<typeof CreateMenuCodec> {}

export const createMenu = (args: ICreateMenu) =>
  prisma.menu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      category: {
        connect: { id: args.categoryId },
      },
    },
  });

export const getMenus = () => prisma.menu.findMany();

export interface IUpdateMenu {
  id: number;
  name?: string;
  image?: string;
  price?: number;
  categoryId?: number;
}

export const updateMenu = (args: IUpdateMenu) =>
  prisma.menu.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      categoryId: args.categoryId,
    },
  });

//
export const CreateOrderCodec = t.type({
  status: t.string,
  tableId: t.number,
});
export interface ICreateOrder extends t.TypeOf<typeof CreateOrderCodec> {}

export const createOrder = (args: ICreateOrder) => {
  prisma.order.create({
    data: {
      status: args.status,
      tableId: args.tableId,
    },
  });
};
