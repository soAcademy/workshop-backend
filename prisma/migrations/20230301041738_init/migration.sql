/*
  Warnings:

  - You are about to drop the column `ordersOrder_id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_ordersOrder_id_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "ordersOrder_id";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "total_price",
ADD COLUMN     "itemId" INTEGER,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
