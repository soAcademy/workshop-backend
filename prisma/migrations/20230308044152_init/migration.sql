/*
  Warnings:

  - You are about to drop the `Chanel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChanelPermission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChanelToUserPermission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikeComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikePost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikeType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subcriber` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HashtagToPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "YoutubePermissionEnum" AS ENUM ('OWNER', 'EDITOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "YoutubeLikeTypeEnum" AS ENUM ('LIKE', 'DISLIKE');

-- DropForeignKey
ALTER TABLE "ChanelToUserPermission" DROP CONSTRAINT "ChanelToUserPermission_UserId_fkey";

-- DropForeignKey
ALTER TABLE "ChanelToUserPermission" DROP CONSTRAINT "ChanelToUserPermission_chanelId_fkey";

-- DropForeignKey
ALTER TABLE "ChanelToUserPermission" DROP CONSTRAINT "ChanelToUserPermission_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_commentByUserId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "LikeComment" DROP CONSTRAINT "LikeComment_commentId_fkey";

-- DropForeignKey
ALTER TABLE "LikeComment" DROP CONSTRAINT "LikeComment_likeByUserId_fkey";

-- DropForeignKey
ALTER TABLE "LikeComment" DROP CONSTRAINT "LikeComment_likeTypeId_fkey";

-- DropForeignKey
ALTER TABLE "LikePost" DROP CONSTRAINT "LikePost_likeByUserId_fkey";

-- DropForeignKey
ALTER TABLE "LikePost" DROP CONSTRAINT "LikePost_likeTypeId_fkey";

-- DropForeignKey
ALTER TABLE "LikePost" DROP CONSTRAINT "LikePost_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_chanelId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_posterUserId_fkey";

-- DropForeignKey
ALTER TABLE "Subcriber" DROP CONSTRAINT "Subcriber_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "Subcriber" DROP CONSTRAINT "Subcriber_toChanelId_fkey";

-- DropForeignKey
ALTER TABLE "_HashtagToPost" DROP CONSTRAINT "_HashtagToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_HashtagToPost" DROP CONSTRAINT "_HashtagToPost_B_fkey";

-- DropTable
DROP TABLE "Chanel";

-- DropTable
DROP TABLE "ChanelPermission";

-- DropTable
DROP TABLE "ChanelToUserPermission";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Hashtag";

-- DropTable
DROP TABLE "LikeComment";

-- DropTable
DROP TABLE "LikePost";

-- DropTable
DROP TABLE "LikeType";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Subcriber";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_HashtagToPost";

-- DropEnum
DROP TYPE "LikeTypeEnum";

-- DropEnum
DROP TYPE "PermissionEnum";

-- CreateTable
CREATE TABLE "YoutubeUser" (
    "id" SERIAL NOT NULL,
    "profileImage" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeChanelPermission" (
    "id" SERIAL NOT NULL,
    "name" "YoutubePermissionEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeChanelPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeChanel" (
    "id" SERIAL NOT NULL,
    "ChanelImage" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeChanel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeChanelToUserPermission" (
    "id" SERIAL NOT NULL,
    "chanelId" INTEGER NOT NULL,
    "UserId" INTEGER NOT NULL,
    "permissionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeChanelToUserPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeHashtag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubePost" (
    "id" SERIAL NOT NULL,
    "video" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "posterUserId" INTEGER NOT NULL,
    "chanelId" INTEGER NOT NULL,
    "isShared" BOOLEAN NOT NULL,
    "shareFromPostId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeComment" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "commentByUserId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeLikeType" (
    "id" SERIAL NOT NULL,
    "emoji" TEXT NOT NULL,
    "name" "YoutubeLikeTypeEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeLikeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeLikePost" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "likeByUserId" INTEGER NOT NULL,
    "likeTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeLikePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeLikeComment" (
    "id" SERIAL NOT NULL,
    "commentId" INTEGER NOT NULL,
    "likeByUserId" INTEGER NOT NULL,
    "likeTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeLikeComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeSubcriber" (
    "id" SERIAL NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toChanelId" INTEGER NOT NULL,
    "isSupported" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeSubcriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_YoutubeHashtagToYoutubePost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeUser_name_key" ON "YoutubeUser"("name");

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeChanel_name_key" ON "YoutubeChanel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_YoutubeHashtagToYoutubePost_AB_unique" ON "_YoutubeHashtagToYoutubePost"("A", "B");

-- CreateIndex
CREATE INDEX "_YoutubeHashtagToYoutubePost_B_index" ON "_YoutubeHashtagToYoutubePost"("B");

-- AddForeignKey
ALTER TABLE "YoutubeChanelToUserPermission" ADD CONSTRAINT "YoutubeChanelToUserPermission_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "YoutubeChanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeChanelToUserPermission" ADD CONSTRAINT "YoutubeChanelToUserPermission_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeChanelToUserPermission" ADD CONSTRAINT "YoutubeChanelToUserPermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "YoutubeChanelPermission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubePost" ADD CONSTRAINT "YoutubePost_posterUserId_fkey" FOREIGN KEY ("posterUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubePost" ADD CONSTRAINT "YoutubePost_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "YoutubeChanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeComment" ADD CONSTRAINT "YoutubeComment_commentByUserId_fkey" FOREIGN KEY ("commentByUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeComment" ADD CONSTRAINT "YoutubeComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "YoutubePost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeLikePost" ADD CONSTRAINT "YoutubeLikePost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "YoutubePost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeLikePost" ADD CONSTRAINT "YoutubeLikePost_likeByUserId_fkey" FOREIGN KEY ("likeByUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeLikePost" ADD CONSTRAINT "YoutubeLikePost_likeTypeId_fkey" FOREIGN KEY ("likeTypeId") REFERENCES "YoutubeLikeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeLikeComment" ADD CONSTRAINT "YoutubeLikeComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "YoutubePost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeLikeComment" ADD CONSTRAINT "YoutubeLikeComment_likeByUserId_fkey" FOREIGN KEY ("likeByUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeLikeComment" ADD CONSTRAINT "YoutubeLikeComment_likeTypeId_fkey" FOREIGN KEY ("likeTypeId") REFERENCES "YoutubeLikeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeSubcriber" ADD CONSTRAINT "YoutubeSubcriber_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeSubcriber" ADD CONSTRAINT "YoutubeSubcriber_toChanelId_fkey" FOREIGN KEY ("toChanelId") REFERENCES "YoutubeChanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_YoutubeHashtagToYoutubePost" ADD CONSTRAINT "_YoutubeHashtagToYoutubePost_A_fkey" FOREIGN KEY ("A") REFERENCES "YoutubeHashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_YoutubeHashtagToYoutubePost" ADD CONSTRAINT "_YoutubeHashtagToYoutubePost_B_fkey" FOREIGN KEY ("B") REFERENCES "YoutubePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
