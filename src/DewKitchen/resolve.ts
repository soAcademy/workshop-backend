import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateMenu,
  ICreateOrder,
  IGetOrder,
  IUpdateCategory,
  IupdateOrder,
} from "./interface";
export const prisma = new PrismaClient();

export const createCategory = async (args: ICreateCategory) => {
  console.log("args", args);
  const result = await prisma.dewKitchenCategory.create({
    data: {
      name: args.category,
    },
  });
  console.log(result);
  return result;
};

export const getCategories = async () =>
  await prisma.dewKitchenCategory.findMany({
    orderBy: { id: "asc" },
  });

export const updateCategory = async (args: IUpdateCategory) => {
  console.log("args", args);
  const result = await prisma.dewKitchenCategory.update({
    where: {
      id: args.id,
    },
    data: { name: args.name },
  });
  return result;
};

export const createMenu = async (args: ICreateMenu) => {
  console.log("args", args);
  const result = await prisma.dewKitchenMenu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      categoryKey: {
        connect: {
          id: args.id,
        },
      },
    },
  });
  return result;
};

export const getMenu = async () =>
  await prisma.dewKitchenMenu.findMany({
    orderBy: { id: "asc" },
  });

export const createOrder = async (args: ICreateOrder) => {
  console.log("args", args);
  const result = await prisma.dewKitchenOrder.create({
    data: {
      tableId: args.tableId,
      items: {
        create: args.items.map((r) => {
          return {
            quantity: r.quantity,
            totalPrice: r.totalPrice,
            menu: {
              connect: { id: r.menuId },
            },
          };
        }),
      },
    },
  });
  return result;
};

export const getOrders = async () => {
  const result = await prisma.dewKitchenOrder.findMany();
  return result;
};

export const getOrder = async (args: IGetOrder) => {
  console.log(args);
  const result = await prisma.dewKitchenOrder.findUnique({
    where:{id: args.id}
  })
  return result;;
};


export const updateOrder =  async(args:IupdateOrder)=>{
  console.log(args);
  const result = await prisma.dewKitchenOrder.update({
    where:{
      id: args.id
    },
    data:{
      status:args.status
    }
  })
  return result;
};