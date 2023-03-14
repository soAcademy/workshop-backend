/*
  Warnings:

  - You are about to drop the `_TweetReply` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TweetReply" DROP CONSTRAINT "_TweetReply_A_fkey";

-- DropForeignKey
ALTER TABLE "_TweetReply" DROP CONSTRAINT "_TweetReply_B_fkey";

-- DropTable
DROP TABLE "_TweetReply";

-- CreateTable
CREATE TABLE "_TwitterReply" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TwitterReply_AB_unique" ON "_TwitterReply"("A", "B");

-- CreateIndex
CREATE INDEX "_TwitterReply_B_index" ON "_TwitterReply"("B");

-- AddForeignKey
ALTER TABLE "_TwitterReply" ADD CONSTRAINT "_TwitterReply_A_fkey" FOREIGN KEY ("A") REFERENCES "TwitterPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TwitterReply" ADD CONSTRAINT "_TwitterReply_B_fkey" FOREIGN KEY ("B") REFERENCES "TwitterPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
