/*
  Warnings:

  - You are about to drop the `KorKitchenCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenMenu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenOrderItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "KorKitchenMenu" DROP CONSTRAINT "KorKitchenMenu_categoryName_fkey";

-- DropForeignKey
ALTER TABLE "KorKitchenOrderItem" DROP CONSTRAINT "KorKitchenOrderItem_menuId_fkey";

-- DropForeignKey
ALTER TABLE "KorKitchenOrderItem" DROP CONSTRAINT "KorKitchenOrderItem_orderId_fkey";

-- DropTable
DROP TABLE "KorKitchenCategory";

-- DropTable
DROP TABLE "KorKitchenMenu";

-- DropTable
DROP TABLE "KorKitchenOrder";

-- DropTable
DROP TABLE "KorKitchenOrderItem";
