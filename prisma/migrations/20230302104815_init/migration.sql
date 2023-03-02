/*
  Warnings:

  - You are about to drop the column `billsId` on the `orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_billsId_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "billsId",
ADD COLUMN     "billId" INTEGER;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
