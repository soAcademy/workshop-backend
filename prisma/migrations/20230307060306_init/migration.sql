/*
  Warnings:

  - You are about to drop the column `categoriesId` on the `Rounds` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Rounds" DROP CONSTRAINT "Rounds_categoriesId_fkey";

-- AlterTable
ALTER TABLE "Rounds" DROP COLUMN "categoriesId";
