/*
  Warnings:

  - You are about to drop the column `tableID` on the `KorKitchenOrder` table. All the data in the column will be lost.
  - Added the required column `tableId` to the `KorKitchenOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KorKitchenOrder" DROP COLUMN "tableID",
ADD COLUMN     "tableId" INTEGER NOT NULL;
