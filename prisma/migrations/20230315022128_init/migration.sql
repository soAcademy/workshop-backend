/*
  Warnings:

  - You are about to drop the column `hashTagId` on the `HashTagOnPost` table. All the data in the column will be lost.
  - Added the required column `hashTagName` to the `HashTagOnPost` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "HashTagOnPost" DROP CONSTRAINT "HashTagOnPost_hashTagId_fkey";

-- AlterTable
ALTER TABLE "HashTagOnPost" DROP COLUMN "hashTagId",
ADD COLUMN     "hashTagName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "HashTagOnPost" ADD CONSTRAINT "HashTagOnPost_hashTagName_fkey" FOREIGN KEY ("hashTagName") REFERENCES "HashTag"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
