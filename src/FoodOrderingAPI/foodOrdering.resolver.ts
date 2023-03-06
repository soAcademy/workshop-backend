import { PrismaClient } from "../../prisma/client-food";
import {
  IAddCategory,
  IAddMenu,
  IAddOrder,
  ICreateBill,
  IGetBill,
  IGetMenu,
  IGetOrders,
  IGetOrdersForCheckout,
  IUpdateCategory,
  IUpdateMenu,
  IUpdateOrder,
} from "./foodOrdering.interface";

export const prisma = new PrismaClient();

export const addCategory = (args: IAddCategory) => {
  return prisma.category.create({
    data: { name: args.name },
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
        include: {
          category: true,
        },
      });
};

export const updateMenu = (args: IUpdateMenu) => {
  return prisma.menu.update({
    where: { id: args.id },
    data: {
      name: args?.name,
      image: args?.image,
      price: args?.price,
      ...(args.categoryId && {
        category: {
          connect: {
            id: args?.categoryId,
          },
        },
      }),
    },
  });
};

export const addOrder = (args: IAddOrder) => {
  return prisma.orders.create({
    data: {
      table_id: args.table_id,
      total_price: args.total_price,
      orderItems: {
        create: args.items.map((e) => {
          return {
            menu: {
              connect: {
                id: e.menuId,
              },
            },
            quantity: e.quantity,
          };
        }),
      },
    },
  });
};

export const getOrdersForCheckout = (args: IGetOrdersForCheckout) => {
  return prisma.orders.findMany({
    where: {
      AND: [
        { table_id: args.table_id },
        {
          status: {
            notIn: ["PAID", "CANCEL"],
          },
        },
      ],
    },
    orderBy: {
      id: "asc",
    },
    include: {
      orderItems: {
        include: {
          menu: true,
        },
      },
    },
  });
};

export const getOrders = (args: IGetOrders) => {
  return args.table_id
    ? prisma.orders.findMany({
        where: { table_id: args.table_id },
        orderBy: {
          id: "asc",
        },
        include: {
          orderItems: {
            include: {
              menu: true,
            },
          },
        },
      })
    : prisma.orders.findMany({
        orderBy: {
          id: "asc",
        },
        include: {
          orderItems: {
            include: {
              menu: true,
            },
          },
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

export const createBill = async (args: ICreateBill) => {
  const orders = await prisma.orders.findMany({
    where: {
      AND: [
        { table_id: args.table_id },
        {
          status: {
            in: ["WAITING", "DONE", "CANCELED"],
          },
        },
        { billId: null },
      ],
    },
  });

  // UPDATE ORDERS WITH STATUS WAITING, DONE TO PAID
  await prisma.orders.updateMany({
    where: {
      AND: [
        { table_id: args.table_id },
        {
          status: {
            in: ["WAITING", "DONE"],
          },
        },
      ],
    },
    data: {
      status: "PAID",
    },
  });
  // UPDATE ORDERS WITH STATUS CANCEL TO BILLED_CANCELED
  await prisma.orders.updateMany({
    where: {
      AND: [
        { table_id: args.table_id },
        {
          status: {
            equals: "CANCELED",
          },
        },
      ],
    },
    data: {
      status: "BILLED_CANCELED",
    },
  });

  return prisma.bills.create({
    data: {
      id: args.bill_id,
      bill_price: args.bill_price,
      orders: {
        connect: orders.map((order) => ({
          id: order.id,
        })),
      },
    },
  });
};

export const getBill = (args: IGetBill) => {
  return prisma.bills.findUniqueOrThrow({
    where: {
      id: args.bill_id,
    },
    include: {
      orders: {
        include: {
          orderItems: true,
        },
      },
    },
  });
};
