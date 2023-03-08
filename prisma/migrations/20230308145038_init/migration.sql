/*
  Warnings:

  - You are about to drop the column `categoryName` on the `BinKitchenMenu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BinKitchenMenu" DROP CONSTRAINT "BinKitchenMenu_categoryName_fkey";

-- AlterTable
ALTER TABLE "BinKitchenMenu" DROP COLUMN "categoryName",
ADD COLUMN     "category" TEXT;

-- AddForeignKey
ALTER TABLE "BinKitchenMenu" ADD CONSTRAINT "BinKitchenMenu_category_fkey" FOREIGN KEY ("category") REFERENCES "BinKitchenCategory"("name") ON DELETE SET NULL ON UPDATE CASCADE;
