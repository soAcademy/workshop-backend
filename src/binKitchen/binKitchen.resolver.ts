import { PrismaClient } from "../../prisma/client";
export const prisma = new PrismaClient();

// CRUD
// CRUD 1.1 Create 1 Category name
export const createCategory = (args: { name: string }) =>
  prisma.binKitchenCategory.create({
    data: {
      name: args.name,
    },
  });
// CRUD 1.1 Create Many Category name
export const createManyCategory = (args: { name: string }[]) =>
  prisma.binKitchenCategory.createMany({
    data: args,
  });

// CRUD 2. Get all Categories
export const getCategory = () => prisma.binKitchenCategory.findMany();

// CRUD 3. Update 1 Category
export const updateCategory = (args: { name1: string; name2: string }) =>
  prisma.binKitchenCategory.update({
    where: {
      name: args.name1,
    },
    data: {
      name: args.name2,
    },
  });

// CRUD 4.1 Create Menu
export const createMenu = (args: {
  name: string;
  image: string;
  price: GLfloat;
  category: string;
}) =>
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

// CRUD 4.2 Create Many Menu
export const createManyMenu = (
  args: {
    name: string;
    image: string;
    price: GLfloat;
    category: string;
  }[]
) =>
  prisma.binKitchenMenu.createMany({
    data: args.map((r) => ({
      name: r.name,
      image: r.image,
      price: r.price,
      category: { connect: { name: r.category } },
    })),
  });

// CRUD 5. Get Menus
export const getMenus = () => prisma.binKitchenMenu.findMany();

// CRUD 6. Update Menu
export const updateMenu = (args: {
  id: number;
  name?: string;
  image?: string;
  price?: number;
}) =>
  prisma.binKitchenMenu.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name ?? undefined,
      image: args.image ?? undefined,
      price: args.price ?? undefined,
    },
  });
// CRUD 7. Create Order
// export const createOrder = (args: { name: string }) =>
//   prisma.binKitchenOrder.create({
//     data: {
//       name: args.name,
//     },
//   });
export const createOrder = (args: {
  tableId: number;
  orderItems: { menuId: number; quantity: number; totalPrice: number }[];
}) =>
  prisma.binKitchenOrder.create({
    data: {
      tableId: args.tableId,
      orderItems: {
        create: args.orderItems.map((r) => ({
          menu: {
            connect: { id: r.menuId },
          },
          quantity: r.quantity,
          totalPrice: r.totalPrice,
        })),
      },
    },
  });
// input format
//   {
//     "tableId": 5,
//   "orderItems": [
//         {
//             "menuId": 1,
//             "quantity": 1,
//             "totalPrice": 250
//         }
//     ]
// }

// CRUD 8.1 Get Orders
export const getOrders = () =>
  prisma.binKitchenOrder.findMany({
    where: {},
    include: { orderItems: { include: { menu: true } } },
    orderBy: { id: "asc" },
  });

// CRUD 8.2 Get orders by Table Id
export const getOrdersByTableId = (args: { tableId: number }) =>
  prisma.binKitchenOrder.findMany({
    where: { tableId: args.tableId },
    include: { orderItems: { include: { menu: true } } },
    orderBy: { id: "asc" },
  });
// CRUD 8.2 Get orders by Order Id
export const getOrderById = (args: { id: number }) =>
  prisma.binKitchenOrder.findUnique({
    where: { id: args.id },
    include: { orderItems: { include: { menu: true } } },
  });
// CRUD 10. Update order
export const updateOrder = (args: { id: number; status: string }) =>
  prisma.binKitchenOrder.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    },
  });
