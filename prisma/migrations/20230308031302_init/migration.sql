/*
  Warnings:

  - You are about to drop the column `replyToCommentId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `replyToTweetId` on the `Tweet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "facebook"."Comment" DROP CONSTRAINT "Comment_replyToCommentId_fkey";

-- DropForeignKey
ALTER TABLE "twitter"."Tweet" DROP CONSTRAINT "Tweet_replyToTweetId_fkey";

-- DropIndex
DROP INDEX "twitter"."Tweet_replyToTweetId_key";

-- AlterTable
ALTER TABLE "facebook"."Comment" DROP COLUMN "replyToCommentId",
ADD COLUMN     "parentCommentId" INTEGER;

-- AlterTable
ALTER TABLE "twitter"."Tweet" DROP COLUMN "replyToTweetId",
ADD COLUMN     "parentTweetId" INTEGER;

-- AddForeignKey
ALTER TABLE "facebook"."Comment" ADD CONSTRAINT "Comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "facebook"."Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."Tweet" ADD CONSTRAINT "Tweet_parentTweetId_fkey" FOREIGN KEY ("parentTweetId") REFERENCES "twitter"."Tweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
