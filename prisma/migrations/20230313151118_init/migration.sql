/*
  Warnings:

  - You are about to drop the column `hashtagName` on the `TwitterPost` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TwitterPost" DROP CONSTRAINT "TwitterPost_hashtagName_fkey";

-- AlterTable
ALTER TABLE "TwitterPost" DROP COLUMN "hashtagName";

-- CreateTable
CREATE TABLE "_TwitterHashtagToTwitterPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TwitterHashtagToTwitterPost_AB_unique" ON "_TwitterHashtagToTwitterPost"("A", "B");

-- CreateIndex
CREATE INDEX "_TwitterHashtagToTwitterPost_B_index" ON "_TwitterHashtagToTwitterPost"("B");

-- AddForeignKey
ALTER TABLE "_TwitterHashtagToTwitterPost" ADD CONSTRAINT "_TwitterHashtagToTwitterPost_A_fkey" FOREIGN KEY ("A") REFERENCES "TwitterHashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TwitterHashtagToTwitterPost" ADD CONSTRAINT "_TwitterHashtagToTwitterPost_B_fkey" FOREIGN KEY ("B") REFERENCES "TwitterPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
