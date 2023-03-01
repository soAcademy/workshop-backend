/*
  Warnings:

  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `itemId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `orders` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `menu` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orderId` to the `orderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_itemId_fkey";

-- AlterTable
ALTER TABLE "orderItem" ADD COLUMN     "orderId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP CONSTRAINT "orders_pkey",
DROP COLUMN "itemId",
DROP COLUMN "order_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "orders_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_name_key" ON "menu"("name");

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
