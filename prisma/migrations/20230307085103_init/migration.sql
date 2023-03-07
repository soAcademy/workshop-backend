/*
  Warnings:

  - You are about to drop the `TweetRelation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `repliedTweetId` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "twitter"."TweetRelation" DROP CONSTRAINT "TweetRelation_repliedTweetId_fkey";

-- DropForeignKey
ALTER TABLE "twitter"."TweetRelation" DROP CONSTRAINT "TweetRelation_replyToTweetId_fkey";

-- AlterTable
ALTER TABLE "twitter"."Tweet" ADD COLUMN     "repliedTweetId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "twitter"."TweetRelation";

-- AddForeignKey
ALTER TABLE "twitter"."Tweet" ADD CONSTRAINT "Tweet_repliedTweetId_fkey" FOREIGN KEY ("repliedTweetId") REFERENCES "twitter"."Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
