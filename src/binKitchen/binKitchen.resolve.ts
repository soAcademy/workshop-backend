import { Category } from "fp-ts/lib/Reader";

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

// export const createCategory = (args: {category: string}) =>
//   prisma.binKitchenCategory.create({
//     data: {
//       name: args.category
//     }
//   })

// export const getCategories = (args: {category: string}) =>
//   prisma.binKitchenCategory.findMany()

// export const createMenu = (args: {category: string}) =>
//   prisma.binKitchenMenu.create({
//     name: args.name,
//     image: args.image,
//     price: args.price,
//     category: {
//       connect: {
//         name: args.category
//       }
//     }
//   })

//   interface MenuUpdate {
//     name?: string;
//     price?: number;
//   }

//   prisma.binKitchenMenu.update({
//     where: {
//       id: 1
//     },
//     data: {
//       name: args?.name,
//       price: args?.price,
//     }
//   })

//   prisma.binKitchenMenu.createMany({
//     data: [
//       {
//         name: "แกงส้มมะละกอ",
//         price: 100,
//         category: {
//           connect: {
//             name: "แกง"
//           }
//         }
//       },
//       {
//         name: "ผัดชะอม",
//         price: 100,
//         category: {
//           connect: {
//             name: "ผัม"
//           }
//         }
//       }
//     ]
//   })

// prisma.binKitchenOrder.create({
//   data: {
//     status: "PENDING",
//     tableId: 1,
//     items: {
//       create: [
//         {
//           menu: {
//             connect: {
//               id: 1,
//             },
//           },
//           quantity: 1,
//           totalPrice: 100,
//         },
//         {
//           menu: {
//             connect: {
//               id: 2,
//             },
//           },
//           quantity: 1,
//           totalPrice: 100,
//         },
//       ],
//     },
//   },
// });

const order = await prisma.binKitchenOrder.create({
  data: {
    status: "PENDING",
    tableId: 1,
  },
});

const orderItems = await prisma.binKitchenOrderItems.createMany({
  data: [
    {
      quantity: 1,
      totalPrice: 100,
      menu: {
        connect: 
          {
            id: 1,
          },
      },
    },
  ],
});
