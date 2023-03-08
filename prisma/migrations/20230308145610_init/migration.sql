/*
  Warnings:

  - You are about to drop the column `category` on the `BinKitchenMenu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BinKitchenMenu" DROP CONSTRAINT "BinKitchenMenu_category_fkey";

-- AlterTable
ALTER TABLE "BinKitchenMenu" DROP COLUMN "category",
ADD COLUMN     "categoryName" TEXT;

-- AddForeignKey
ALTER TABLE "BinKitchenMenu" ADD CONSTRAINT "BinKitchenMenu_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "BinKitchenCategory"("name") ON DELETE SET NULL ON UPDATE CASCADE;
