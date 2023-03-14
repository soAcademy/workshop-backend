/*
  Warnings:

  - You are about to drop the column `hashtagName` on the `TwitterPost` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TwitterPost" DROP CONSTRAINT "TwitterPost_hashtagName_fkey";

-- AlterTable
ALTER TABLE "TwitterPost" DROP COLUMN "hashtagName";
