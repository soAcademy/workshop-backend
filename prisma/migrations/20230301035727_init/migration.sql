/*
  Warnings:

  - You are about to drop the column `binKichenCategoryId` on the `BinKichenMenu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BinKichenMenu" DROP CONSTRAINT "BinKichenMenu_binKichenCategoryId_fkey";

-- AlterTable
ALTER TABLE "BinKichenMenu" DROP COLUMN "binKichenCategoryId";

-- AddForeignKey
ALTER TABLE "BinKichenMenu" ADD CONSTRAINT "BinKichenMenu_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "BinKichenCategory"("name") ON DELETE SET NULL ON UPDATE CASCADE;
