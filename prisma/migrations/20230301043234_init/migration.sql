/*
  Warnings:

  - You are about to drop the column `quantity` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_menuId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_itemId_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "quantity";

-- DropTable
DROP TABLE "item";

-- CreateTable
CREATE TABLE "orderItem" (
    "id" INTEGER NOT NULL,
    "menuId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orderItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "orderItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
