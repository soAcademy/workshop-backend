/*
  Warnings:

  - You are about to drop the column `dewKitchenMenuId` on the `DewOrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `dewKitchenOrderId` on the `DewOrderItem` table. All the data in the column will be lost.
  - Added the required column `menu_Id` to the `DewOrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DewOrderItem" DROP CONSTRAINT "DewOrderItem_dewKitchenMenuId_fkey";

-- DropForeignKey
ALTER TABLE "DewOrderItem" DROP CONSTRAINT "DewOrderItem_dewKitchenOrderId_fkey";

-- AlterTable
ALTER TABLE "DewOrderItem" DROP COLUMN "dewKitchenMenuId",
DROP COLUMN "dewKitchenOrderId",
ADD COLUMN     "menu_Id" INTEGER NOT NULL,
ADD COLUMN     "order_Id" INTEGER;

-- AddForeignKey
ALTER TABLE "DewOrderItem" ADD CONSTRAINT "DewOrderItem_menu_Id_fkey" FOREIGN KEY ("menu_Id") REFERENCES "DewKitchenMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DewOrderItem" ADD CONSTRAINT "DewOrderItem_order_Id_fkey" FOREIGN KEY ("order_Id") REFERENCES "DewKitchenOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
