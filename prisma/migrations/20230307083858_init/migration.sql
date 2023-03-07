/*
  Warnings:

  - You are about to drop the column `repliedTweetId` on the `Tweet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "twitter"."Tweet" DROP CONSTRAINT "Tweet_repliedTweetId_fkey";

-- AlterTable
ALTER TABLE "twitter"."Tweet" DROP COLUMN "repliedTweetId";

-- CreateTable
CREATE TABLE "twitter"."TweetRelation" (
    "id" SERIAL NOT NULL,
    "repliedTweetId" INTEGER NOT NULL,
    "replyToTweetId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TweetRelation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "twitter"."TweetRelation" ADD CONSTRAINT "TweetRelation_repliedTweetId_fkey" FOREIGN KEY ("repliedTweetId") REFERENCES "twitter"."Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."TweetRelation" ADD CONSTRAINT "TweetRelation_replyToTweetId_fkey" FOREIGN KEY ("replyToTweetId") REFERENCES "twitter"."Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
