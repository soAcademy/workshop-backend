/*
  Warnings:

  - You are about to drop the `TwitterPostOnHashtag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TwitterPostOnHashtag" DROP CONSTRAINT "TwitterPostOnHashtag_hashtagId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterPostOnHashtag" DROP CONSTRAINT "TwitterPostOnHashtag_postId_fkey";

-- DropTable
DROP TABLE "TwitterPostOnHashtag";

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
