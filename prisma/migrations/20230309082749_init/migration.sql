/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - Made the column `categoryId` on table `Quiz` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `nameUser` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_categoryId_fkey";

-- AlterTable
ALTER TABLE "Quiz" ALTER COLUMN "categoryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "name",
ADD COLUMN     "nameUser" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
