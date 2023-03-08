-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "youtube";

-- CreateEnum
CREATE TYPE "youtube"."Role" AS ENUM ('MANAGER', 'EDITOR', 'VIEWER');

-- CreateTable
CREATE TABLE "youtube"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profileImageUrl" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "youtube"."Channel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profileImageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "youtube"."UserToChannelwithRole" (
    "id" SERIAL NOT NULL,
    "youTubeUserId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "role" "youtube"."Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserToChannelwithRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "youtube"."Video" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "thumbnailImageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "channelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "youtube"."VideoComment" (
    "id" SERIAL NOT NULL,
    "commentText" TEXT NOT NULL,
    "youTubeUserId" INTEGER NOT NULL,
    "videoId" INTEGER NOT NULL,
    "parentVideoCommentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VideoComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "youtube"."_memberOfChannels" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "youtube"."_subscribingToChannels" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "youtube"."_likedVideos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "youtube"."_dislikedVideos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_memberOfChannels_AB_unique" ON "youtube"."_memberOfChannels"("A", "B");

-- CreateIndex
CREATE INDEX "_memberOfChannels_B_index" ON "youtube"."_memberOfChannels"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_subscribingToChannels_AB_unique" ON "youtube"."_subscribingToChannels"("A", "B");

-- CreateIndex
CREATE INDEX "_subscribingToChannels_B_index" ON "youtube"."_subscribingToChannels"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_likedVideos_AB_unique" ON "youtube"."_likedVideos"("A", "B");

-- CreateIndex
CREATE INDEX "_likedVideos_B_index" ON "youtube"."_likedVideos"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_dislikedVideos_AB_unique" ON "youtube"."_dislikedVideos"("A", "B");

-- CreateIndex
CREATE INDEX "_dislikedVideos_B_index" ON "youtube"."_dislikedVideos"("B");

-- AddForeignKey
ALTER TABLE "youtube"."UserToChannelwithRole" ADD CONSTRAINT "UserToChannelwithRole_youTubeUserId_fkey" FOREIGN KEY ("youTubeUserId") REFERENCES "youtube"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."UserToChannelwithRole" ADD CONSTRAINT "UserToChannelwithRole_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "youtube"."Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."Video" ADD CONSTRAINT "Video_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "youtube"."Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."VideoComment" ADD CONSTRAINT "VideoComment_youTubeUserId_fkey" FOREIGN KEY ("youTubeUserId") REFERENCES "youtube"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."VideoComment" ADD CONSTRAINT "VideoComment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "youtube"."Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."VideoComment" ADD CONSTRAINT "VideoComment_parentVideoCommentId_fkey" FOREIGN KEY ("parentVideoCommentId") REFERENCES "youtube"."VideoComment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_memberOfChannels" ADD CONSTRAINT "_memberOfChannels_A_fkey" FOREIGN KEY ("A") REFERENCES "youtube"."Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_memberOfChannels" ADD CONSTRAINT "_memberOfChannels_B_fkey" FOREIGN KEY ("B") REFERENCES "youtube"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_subscribingToChannels" ADD CONSTRAINT "_subscribingToChannels_A_fkey" FOREIGN KEY ("A") REFERENCES "youtube"."Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_subscribingToChannels" ADD CONSTRAINT "_subscribingToChannels_B_fkey" FOREIGN KEY ("B") REFERENCES "youtube"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_likedVideos" ADD CONSTRAINT "_likedVideos_A_fkey" FOREIGN KEY ("A") REFERENCES "youtube"."Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_likedVideos" ADD CONSTRAINT "_likedVideos_B_fkey" FOREIGN KEY ("B") REFERENCES "youtube"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_dislikedVideos" ADD CONSTRAINT "_dislikedVideos_A_fkey" FOREIGN KEY ("A") REFERENCES "youtube"."Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_dislikedVideos" ADD CONSTRAINT "_dislikedVideos_B_fkey" FOREIGN KEY ("B") REFERENCES "youtube"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
