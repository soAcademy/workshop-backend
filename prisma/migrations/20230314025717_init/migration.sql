/*
  Warnings:

  - You are about to drop the `TwitterReplyPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterUserRelationship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TwitterReplyPost" DROP CONSTRAINT "TwitterReplyPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterReplyPost" DROP CONSTRAINT "TwitterReplyPost_userId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterUserRelationship" DROP CONSTRAINT "TwitterUserRelationship_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterUserRelationship" DROP CONSTRAINT "TwitterUserRelationship_toUserId_fkey";

-- DropTable
DROP TABLE "TwitterReplyPost";

-- DropTable
DROP TABLE "TwitterUserRelationship";

-- CreateTable
CREATE TABLE "_following" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TweetReply" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_following_AB_unique" ON "_following"("A", "B");

-- CreateIndex
CREATE INDEX "_following_B_index" ON "_following"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TweetReply_AB_unique" ON "_TweetReply"("A", "B");

-- CreateIndex
CREATE INDEX "_TweetReply_B_index" ON "_TweetReply"("B");

-- AddForeignKey
ALTER TABLE "_following" ADD CONSTRAINT "_following_A_fkey" FOREIGN KEY ("A") REFERENCES "TwitterUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_following" ADD CONSTRAINT "_following_B_fkey" FOREIGN KEY ("B") REFERENCES "TwitterUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TweetReply" ADD CONSTRAINT "_TweetReply_A_fkey" FOREIGN KEY ("A") REFERENCES "TwitterPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TweetReply" ADD CONSTRAINT "_TweetReply_B_fkey" FOREIGN KEY ("B") REFERENCES "TwitterPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
