-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "twitter";

-- CreateTable
CREATE TABLE "twitter"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "followedUserId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twitter"."tweet" (
    "id" SERIAL NOT NULL,
    "tweetText" TEXT NOT NULL,
    "repliedTweetId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tweet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twitter"."hashTag" (
    "id" SERIAL NOT NULL,
    "hashTagText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hashTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twitter"."DirectMessage" (
    "id" SERIAL NOT NULL,
    "dmText" TEXT NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twitter"."_hashTagTotweet" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_hashTagTotweet_AB_unique" ON "twitter"."_hashTagTotweet"("A", "B");

-- CreateIndex
CREATE INDEX "_hashTagTotweet_B_index" ON "twitter"."_hashTagTotweet"("B");

-- AddForeignKey
ALTER TABLE "twitter"."User" ADD CONSTRAINT "User_followedUserId_fkey" FOREIGN KEY ("followedUserId") REFERENCES "twitter"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."tweet" ADD CONSTRAINT "tweet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "twitter"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."tweet" ADD CONSTRAINT "tweet_repliedTweetId_fkey" FOREIGN KEY ("repliedTweetId") REFERENCES "twitter"."tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."DirectMessage" ADD CONSTRAINT "DirectMessage_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "twitter"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."DirectMessage" ADD CONSTRAINT "DirectMessage_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "twitter"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."_hashTagTotweet" ADD CONSTRAINT "_hashTagTotweet_A_fkey" FOREIGN KEY ("A") REFERENCES "twitter"."hashTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."_hashTagTotweet" ADD CONSTRAINT "_hashTagTotweet_B_fkey" FOREIGN KEY ("B") REFERENCES "twitter"."tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
