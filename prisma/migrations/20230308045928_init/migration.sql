-- CreateEnum
CREATE TYPE "RoleEnum" AS ENUM ('ADMIN', 'EDITOR', 'CREATOR');

-- CreateEnum
CREATE TYPE "ReactionEnum" AS ENUM ('LIKE', 'DISLIKE');

-- CreateTable
CREATE TABLE "YoutubeUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeChannel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeSubscription" (
    "id" SERIAL NOT NULL,
    "membership" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "youtubeUserId" INTEGER NOT NULL,
    "youtubeChannelId" INTEGER NOT NULL,

    CONSTRAINT "YoutubeSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeUserToChannel" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "role" "RoleEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "youtubeUserId" INTEGER NOT NULL,
    "youtubeChannelId" INTEGER NOT NULL,

    CONSTRAINT "YoutubeUserToChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeVideo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "youtubeChannelId" INTEGER NOT NULL,

    CONSTRAINT "YoutubeVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeReaction" (
    "id" SERIAL NOT NULL,
    "reaction" "ReactionEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "youtubeUserId" INTEGER NOT NULL,
    "youtubeChannelId" INTEGER NOT NULL,
    "youtubeVideoId" INTEGER NOT NULL,
    "youtubeCommentId" INTEGER NOT NULL,

    CONSTRAINT "YoutubeReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeComment" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "youtubeVideoId" INTEGER NOT NULL,
    "youtubeUserId" INTEGER NOT NULL,

    CONSTRAINT "YoutubeComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeCommentReaction" (
    "id" SERIAL NOT NULL,
    "reaction" "ReactionEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "youtubeUserId" INTEGER NOT NULL,
    "youtubeChannelId" INTEGER NOT NULL,
    "youtubeVideoId" INTEGER NOT NULL,
    "youtubeCommentId" INTEGER NOT NULL,

    CONSTRAINT "YoutubeCommentReaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeUser_name_key" ON "YoutubeUser"("name");

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeChannel_name_key" ON "YoutubeChannel"("name");

-- AddForeignKey
ALTER TABLE "YoutubeSubscription" ADD CONSTRAINT "YoutubeSubscription_youtubeUserId_fkey" FOREIGN KEY ("youtubeUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeSubscription" ADD CONSTRAINT "YoutubeSubscription_youtubeChannelId_fkey" FOREIGN KEY ("youtubeChannelId") REFERENCES "YoutubeChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeUserToChannel" ADD CONSTRAINT "YoutubeUserToChannel_youtubeUserId_fkey" FOREIGN KEY ("youtubeUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeUserToChannel" ADD CONSTRAINT "YoutubeUserToChannel_youtubeChannelId_fkey" FOREIGN KEY ("youtubeChannelId") REFERENCES "YoutubeChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeVideo" ADD CONSTRAINT "YoutubeVideo_youtubeChannelId_fkey" FOREIGN KEY ("youtubeChannelId") REFERENCES "YoutubeChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeReaction" ADD CONSTRAINT "YoutubeReaction_youtubeUserId_fkey" FOREIGN KEY ("youtubeUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeReaction" ADD CONSTRAINT "YoutubeReaction_youtubeVideoId_fkey" FOREIGN KEY ("youtubeVideoId") REFERENCES "YoutubeVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeComment" ADD CONSTRAINT "YoutubeComment_youtubeUserId_fkey" FOREIGN KEY ("youtubeUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeComment" ADD CONSTRAINT "YoutubeComment_youtubeVideoId_fkey" FOREIGN KEY ("youtubeVideoId") REFERENCES "YoutubeVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeCommentReaction" ADD CONSTRAINT "YoutubeCommentReaction_youtubeUserId_fkey" FOREIGN KEY ("youtubeUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeCommentReaction" ADD CONSTRAINT "YoutubeCommentReaction_youtubeCommentId_fkey" FOREIGN KEY ("youtubeCommentId") REFERENCES "YoutubeComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
