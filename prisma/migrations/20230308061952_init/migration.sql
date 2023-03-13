/*
  Warnings:

  - You are about to drop the `Post2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post2" DROP CONSTRAINT "Post2_userId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fk_fkey";

-- DropTable
DROP TABLE "Post2";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User2";

-- CreateTable
CREATE TABLE "YoutubeUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeRole" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeReaction" (
    "id" SERIAL NOT NULL,
    "reaction" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeVideo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "channelId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "youtubeReactionId" INTEGER NOT NULL,

    CONSTRAINT "YoutubeVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeChannel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeCommentToVideo" (
    "id" SERIAL NOT NULL,
    "video" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "commenterId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeCommentToVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeUserToChannel" (
    "userId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "_YoutubeChannelToYoutubeUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeUserToChannel_userId_key" ON "YoutubeUserToChannel"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_YoutubeChannelToYoutubeUser_AB_unique" ON "_YoutubeChannelToYoutubeUser"("A", "B");

-- CreateIndex
CREATE INDEX "_YoutubeChannelToYoutubeUser_B_index" ON "_YoutubeChannelToYoutubeUser"("B");

-- AddForeignKey
ALTER TABLE "YoutubeVideo" ADD CONSTRAINT "YoutubeVideo_youtubeReactionId_fkey" FOREIGN KEY ("youtubeReactionId") REFERENCES "YoutubeReaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeVideo" ADD CONSTRAINT "YoutubeVideo_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "YoutubeChannel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeCommentToVideo" ADD CONSTRAINT "YoutubeCommentToVideo_video_fkey" FOREIGN KEY ("video") REFERENCES "YoutubeVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeCommentToVideo" ADD CONSTRAINT "YoutubeCommentToVideo_commenterId_fkey" FOREIGN KEY ("commenterId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeUserToChannel" ADD CONSTRAINT "YoutubeUserToChannel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeUserToChannel" ADD CONSTRAINT "YoutubeUserToChannel_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "YoutubeChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeUserToChannel" ADD CONSTRAINT "YoutubeUserToChannel_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "YoutubeRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_YoutubeChannelToYoutubeUser" ADD CONSTRAINT "_YoutubeChannelToYoutubeUser_A_fkey" FOREIGN KEY ("A") REFERENCES "YoutubeChannel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_YoutubeChannelToYoutubeUser" ADD CONSTRAINT "_YoutubeChannelToYoutubeUser_B_fkey" FOREIGN KEY ("B") REFERENCES "YoutubeUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
