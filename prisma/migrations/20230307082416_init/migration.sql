/*
  Warnings:

  - You are about to drop the `_hashTagTotweet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hashTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tweet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "twitter"."_hashTagTotweet" DROP CONSTRAINT "_hashTagTotweet_A_fkey";

-- DropForeignKey
ALTER TABLE "twitter"."_hashTagTotweet" DROP CONSTRAINT "_hashTagTotweet_B_fkey";

-- DropForeignKey
ALTER TABLE "twitter"."tweet" DROP CONSTRAINT "tweet_repliedTweetId_fkey";

-- DropForeignKey
ALTER TABLE "twitter"."tweet" DROP CONSTRAINT "tweet_userId_fkey";

-- DropForeignKey
ALTER TABLE "twitter"."userRelation" DROP CONSTRAINT "userRelation_followedUserId_fkey";

-- DropForeignKey
ALTER TABLE "twitter"."userRelation" DROP CONSTRAINT "userRelation_followingUserId_fkey";

-- DropTable
DROP TABLE "twitter"."_hashTagTotweet";

-- DropTable
DROP TABLE "twitter"."hashTag";

-- DropTable
DROP TABLE "twitter"."tweet";

-- DropTable
DROP TABLE "twitter"."userRelation";

-- CreateTable
CREATE TABLE "twitter"."UserRelation" (
    "id" SERIAL NOT NULL,
    "followingUserId" INTEGER NOT NULL,
    "followedUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twitter"."Tweet" (
    "id" SERIAL NOT NULL,
    "tweetText" TEXT NOT NULL,
    "repliedTweetId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twitter"."HashTag" (
    "id" SERIAL NOT NULL,
    "hashTagText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HashTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twitter"."_HashTagToTweet" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HashTagToTweet_AB_unique" ON "twitter"."_HashTagToTweet"("A", "B");

-- CreateIndex
CREATE INDEX "_HashTagToTweet_B_index" ON "twitter"."_HashTagToTweet"("B");

-- AddForeignKey
ALTER TABLE "twitter"."UserRelation" ADD CONSTRAINT "UserRelation_followingUserId_fkey" FOREIGN KEY ("followingUserId") REFERENCES "twitter"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."UserRelation" ADD CONSTRAINT "UserRelation_followedUserId_fkey" FOREIGN KEY ("followedUserId") REFERENCES "twitter"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."Tweet" ADD CONSTRAINT "Tweet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "twitter"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."Tweet" ADD CONSTRAINT "Tweet_repliedTweetId_fkey" FOREIGN KEY ("repliedTweetId") REFERENCES "twitter"."Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."_HashTagToTweet" ADD CONSTRAINT "_HashTagToTweet_A_fkey" FOREIGN KEY ("A") REFERENCES "twitter"."HashTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."_HashTagToTweet" ADD CONSTRAINT "_HashTagToTweet_B_fkey" FOREIGN KEY ("B") REFERENCES "twitter"."Tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
