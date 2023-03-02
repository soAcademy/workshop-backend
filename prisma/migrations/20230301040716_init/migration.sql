/*
  Warnings:

  - You are about to drop the column `dewKitchenCategoryId` on the `DewKitchenMenu` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `DewKitchenCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "DewKitchenMenu" DROP CONSTRAINT "DewKitchenMenu_dewKitchenCategoryId_fkey";

-- AlterTable
ALTER TABLE "DewKitchenMenu" DROP COLUMN "dewKitchenCategoryId";

-- CreateTable
CREATE TABLE "DewKitchenOrder" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "tableId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DewKitchenOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DewOrderItem" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "orederId" INTEGER,
    "quantity" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dewKitchenMenuId" INTEGER NOT NULL,
    "dewKitchenOrderId" INTEGER,

    CONSTRAINT "DewOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DewKitchenCategory_name_key" ON "DewKitchenCategory"("name");

-- AddForeignKey
ALTER TABLE "DewKitchenMenu" ADD CONSTRAINT "DewKitchenMenu_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "DewKitchenCategory"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DewOrderItem" ADD CONSTRAINT "DewOrderItem_dewKitchenMenuId_fkey" FOREIGN KEY ("dewKitchenMenuId") REFERENCES "DewKitchenMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DewOrderItem" ADD CONSTRAINT "DewOrderItem_dewKitchenOrderId_fkey" FOREIGN KEY ("dewKitchenOrderId") REFERENCES "DewKitchenOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
