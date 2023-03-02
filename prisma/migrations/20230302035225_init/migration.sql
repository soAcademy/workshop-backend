/*
  Warnings:

  - You are about to drop the column `orederId` on the `DewOrderItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DewOrderItem" DROP COLUMN "orederId",
ADD COLUMN     "orderId" INTEGER;
