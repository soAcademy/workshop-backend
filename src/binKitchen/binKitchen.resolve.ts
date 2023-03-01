import { connect } from "http2";
import { PrismaClient } from "../../prisma/client";
import * as t from "io-ts";
import { includes } from "fp-ts/lib/string";

// CRUD
// 1. Create Category
// 2. Get Categories
// 3. Update Category
// 4. Create Menu
// 5. Get Menus
// 6. Update Menu
// 7. Create Order
// 8. Get Orders
// 9. Get order
// 10. Update order

export const prisma = new PrismaClient();

//
export const CreateCategoryCodec = t.type({
  name: t.string,
});
export interface ICreateCategory extends t.TypeOf<typeof CreateCategoryCodec> {}
// 1. Create Category
export const createCategory = (args: ICreateCategory) =>
  prisma.category.create({
    data: {
      name: args.name,
    },
  });

// 2. Get Categories
export const getCategories = () => prisma.category.findMany();

export const UpdateCategoryCodec = t.type({
  id: t.number,
  name: t.string,
});
export interface IUpdateCategory extends t.TypeOf<typeof UpdateCategoryCodec> {}

// 3. Update Category
export const updateCategory = (args: IUpdateCategory) =>
  prisma.category.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });

export const CreateMenuCodec = t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  categoryId: t.number,
});
export interface ICreateMenu extends t.TypeOf<typeof CreateMenuCodec> {}

// 4. Create Menu
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

// 5. Get Menus
export const getMenus = () => prisma.menu.findMany();

export const UpdateMenu = t.intersection([
  t.type({
    id: t.number,
  }),
  t.partial({
    name: t.union([t.string, t.undefined]),
  }),
  t.partial({
    image: t.union([t.string, t.undefined]),
  }),
  t.partial({
    price: t.union([t.number, t.undefined]),
  }),
  t.partial({
    categoryId: t.union([t.number, t.undefined]),
  }),
]);
export interface IUpdateMenu extends t.TypeOf<typeof UpdateMenu> {}
// 6. Update Menu
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

export const CreateOrderCodec = t.type({
  status: t.string,
  tableId: t.number,
  orderItems: t.array(
    t.type({
      menuId: t.number,
      quantity: t.number,
      totalPrice: t.number,
    })
  ),
});
export interface ICreateOrder extends t.TypeOf<typeof CreateOrderCodec> {}
// 7. Create Order
export const createOrder = (args: ICreateOrder) =>
  prisma.order.create({
    data: {
      status: args.status,
      tableId: args.tableId,
      items: {
        create: args.orderItems.map((r) => ({
          menu: { connect: { id: r.menuId } },
          quantity: r.quantity,
          totalPrice: r.totalPrice,
        })),
      },
    },
  });

// 8. Get Orders
export const getOrders = () =>
  prisma.order.findMany({
    include: {
      items: { include: { menu: true } },
    },
  });

export const getOrderCodec = t.type({ id: t.number });
export interface IGetOrder extends t.TypeOf<typeof getOrderCodec> {}
// 9. Get order
export const getOrder = (args: IGetOrder) =>
  prisma.order.findUnique({
    where: {
      id: args.id,
    },
    include: {
      items: { include: { menu: true } },
    },
  });