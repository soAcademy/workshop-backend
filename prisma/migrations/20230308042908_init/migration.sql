/*
  Warnings:

  - You are about to drop the `_dislikedVideos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_likedVideos` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "youtube"."Reaction" AS ENUM ('LIKE', 'DISLIKE');

-- DropForeignKey
ALTER TABLE "youtube"."_dislikedVideos" DROP CONSTRAINT "_dislikedVideos_A_fkey";

-- DropForeignKey
ALTER TABLE "youtube"."_dislikedVideos" DROP CONSTRAINT "_dislikedVideos_B_fkey";

-- DropForeignKey
ALTER TABLE "youtube"."_likedVideos" DROP CONSTRAINT "_likedVideos_A_fkey";

-- DropForeignKey
ALTER TABLE "youtube"."_likedVideos" DROP CONSTRAINT "_likedVideos_B_fkey";

-- DropTable
DROP TABLE "youtube"."_dislikedVideos";

-- DropTable
DROP TABLE "youtube"."_likedVideos";

-- CreateTable
CREATE TABLE "youtube"."UserToVideoWithReaction" (
    "id" SERIAL NOT NULL,
    "youTubeUserId" INTEGER NOT NULL,
    "videoId" INTEGER NOT NULL,
    "reaction" "youtube"."Reaction" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserToVideoWithReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "youtube"."_VideoToYouTubeUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VideoToYouTubeUser_AB_unique" ON "youtube"."_VideoToYouTubeUser"("A", "B");

-- CreateIndex
CREATE INDEX "_VideoToYouTubeUser_B_index" ON "youtube"."_VideoToYouTubeUser"("B");

-- AddForeignKey
ALTER TABLE "youtube"."UserToVideoWithReaction" ADD CONSTRAINT "UserToVideoWithReaction_youTubeUserId_fkey" FOREIGN KEY ("youTubeUserId") REFERENCES "youtube"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."UserToVideoWithReaction" ADD CONSTRAINT "UserToVideoWithReaction_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "youtube"."Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_VideoToYouTubeUser" ADD CONSTRAINT "_VideoToYouTubeUser_A_fkey" FOREIGN KEY ("A") REFERENCES "youtube"."Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_VideoToYouTubeUser" ADD CONSTRAINT "_VideoToYouTubeUser_B_fkey" FOREIGN KEY ("B") REFERENCES "youtube"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
