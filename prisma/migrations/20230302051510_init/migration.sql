/*
  Warnings:

  - You are about to drop the column `menu_Id` on the `DewOrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `order_Id` on the `DewOrderItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DewOrderItem" DROP CONSTRAINT "DewOrderItem_menu_Id_fkey";

-- DropForeignKey
ALTER TABLE "DewOrderItem" DROP CONSTRAINT "DewOrderItem_order_Id_fkey";

-- AlterTable
ALTER TABLE "DewKitchenCategory" ALTER COLUMN "updateAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "DewKitchenMenu" ALTER COLUMN "updateAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "DewKitchenOrder" ALTER COLUMN "updateAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "DewOrderItem" DROP COLUMN "menu_Id",
DROP COLUMN "order_Id",
ALTER COLUMN "updateAt" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "DewOrderItem" ADD CONSTRAINT "DewOrderItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "DewKitchenMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DewOrderItem" ADD CONSTRAINT "DewOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "DewKitchenOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
