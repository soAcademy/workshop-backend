/*
  Warnings:

  - You are about to drop the column `hashtagId` on the `TwitterPostAndHashtag` table. All the data in the column will be lost.
  - Added the required column `hashtagName` to the `TwitterPostAndHashtag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TwitterPostAndHashtag" DROP CONSTRAINT "TwitterPostAndHashtag_hashtagId_fkey";

-- AlterTable
ALTER TABLE "TwitterPostAndHashtag" DROP COLUMN "hashtagId",
ADD COLUMN     "hashtagName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TwitterPostAndHashtag" ADD CONSTRAINT "TwitterPostAndHashtag_hashtagName_fkey" FOREIGN KEY ("hashtagName") REFERENCES "TwitterHashtag"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
