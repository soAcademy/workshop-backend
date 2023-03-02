/*
  Warnings:

  - You are about to drop the column `billId` on the `orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_billId_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "billId",
ADD COLUMN     "billsId" INTEGER;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_billsId_fkey" FOREIGN KEY ("billsId") REFERENCES "bills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
