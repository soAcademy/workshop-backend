/*
  Warnings:

  - You are about to drop the column `hashtagId` on the `TwitterPost` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `TwitterHashtag` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "TwitterPost" DROP CONSTRAINT "TwitterPost_hashtagId_fkey";

-- AlterTable
ALTER TABLE "TwitterPost" DROP COLUMN "hashtagId",
ADD COLUMN     "hashtagName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "TwitterHashtag_name_key" ON "TwitterHashtag"("name");

-- AddForeignKey
ALTER TABLE "TwitterPost" ADD CONSTRAINT "TwitterPost_hashtagName_fkey" FOREIGN KEY ("hashtagName") REFERENCES "TwitterHashtag"("name") ON DELETE SET NULL ON UPDATE CASCADE;
