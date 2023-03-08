/*
  Warnings:

  - You are about to drop the column `createAt` on the `TwitterDirectMessage` table. All the data in the column will be lost.
  - You are about to drop the column `from` on the `TwitterDirectMessage` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `TwitterDirectMessage` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `TwitterDirectMessage` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `TwitterHashtag` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `TwitterPost` table. All the data in the column will be lost.
  - You are about to drop the column `directMessageId` on the `TwitterUser` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `TwitterUser` table. All the data in the column will be lost.
  - You are about to drop the column `userRelationId` on the `TwitterUser` table. All the data in the column will be lost.
  - You are about to drop the `PostOnHashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterPostReply` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterUserRelation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fromUserId` to the `TwitterDirectMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `TwitterDirectMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toUserId` to the `TwitterDirectMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TwitterDirectMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashtag` to the `TwitterHashtag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TwitterHashtag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caption` to the `TwitterPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TwitterPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TwitterPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Image` to the `TwitterUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TwitterUser` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "YTRoleEnum" AS ENUM ('ADMIN', 'EDITOR', 'CREATOR');

-- DropForeignKey
ALTER TABLE "PostOnHashtag" DROP CONSTRAINT "PostOnHashtag_hashtagId_fkey";

-- DropForeignKey
ALTER TABLE "PostOnHashtag" DROP CONSTRAINT "PostOnHashtag_postId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterPostReply" DROP CONSTRAINT "TwitterPostReply_postId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterPostReply" DROP CONSTRAINT "TwitterPostReply_userId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterUser" DROP CONSTRAINT "TwitterUser_directMessageId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterUser" DROP CONSTRAINT "TwitterUser_userRelationId_fkey";

-- AlterTable
ALTER TABLE "TwitterDirectMessage" DROP COLUMN "createAt",
DROP COLUMN "from",
DROP COLUMN "message",
DROP COLUMN "to",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fromUserId" INTEGER NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "toUserId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "TwitterHashtag" DROP COLUMN "message",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hashtag" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "TwitterPost" DROP COLUMN "message",
ADD COLUMN     "caption" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TwitterUser" DROP COLUMN "directMessageId",
DROP COLUMN "image",
DROP COLUMN "userRelationId",
ADD COLUMN     "Image" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "PostOnHashtag";

-- DropTable
DROP TABLE "TwitterPostReply";

-- DropTable
DROP TABLE "TwitterUserRelation";

-- CreateTable
CREATE TABLE "FbUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbPost" (
    "id" SERIAL NOT NULL,
    "caption" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbPostImage" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbPostImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbPostVideo" (
    "id" SERIAL NOT NULL,
    "video" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbPostVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbHashtag" (
    "id" SERIAL NOT NULL,
    "hashtag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbPostOnHashtag" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "hashtagId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbPostOnHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbLike" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "commentId" INTEGER NOT NULL,
    "shareId" INTEGER NOT NULL,
    "likeType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbShare" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbShare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fbfriend" (
    "id" SERIAL NOT NULL,
    "acceptId" INTEGER NOT NULL,
    "requestId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fbfriend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbMessenger" (
    "id" SERIAL NOT NULL,
    "fromuserId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbMessenger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbComment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupToUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupToUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterFollow" (
    "id" SERIAL NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterFollow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterComment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterPostOnHashtag" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "hashtagId" INTEGER NOT NULL,

    CONSTRAINT "TwitterPostOnHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTUser" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTChannel" (
    "id" SERIAL NOT NULL,
    "channelName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserToChannel" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "role" "YTRoleEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserToChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTVideo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "channelId" INTEGER NOT NULL,

    CONSTRAINT "YTVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTLike" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "videoId" INTEGER NOT NULL,
    "commentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTComment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "commentTo" INTEGER,
    "videoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTSubscribe" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "member" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTSubscribe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTShare" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "videoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTShare_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YTUser_user_key" ON "YTUser"("user");

-- CreateIndex
CREATE UNIQUE INDEX "YTUser_email_key" ON "YTUser"("email");

-- AddForeignKey
ALTER TABLE "FbPost" ADD CONSTRAINT "FbPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbPostImage" ADD CONSTRAINT "FbPostImage_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FbPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbPostVideo" ADD CONSTRAINT "FbPostVideo_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FbPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbPostOnHashtag" ADD CONSTRAINT "FbPostOnHashtag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FbPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbPostOnHashtag" ADD CONSTRAINT "FbPostOnHashtag_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "FbHashtag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbLike" ADD CONSTRAINT "FbLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbLike" ADD CONSTRAINT "FbLike_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FbPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbLike" ADD CONSTRAINT "FbLike_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "FbComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbLike" ADD CONSTRAINT "FbLike_shareId_fkey" FOREIGN KEY ("shareId") REFERENCES "FbShare"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbShare" ADD CONSTRAINT "FbShare_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbShare" ADD CONSTRAINT "FbShare_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FbPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fbfriend" ADD CONSTRAINT "Fbfriend_acceptId_fkey" FOREIGN KEY ("acceptId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fbfriend" ADD CONSTRAINT "Fbfriend_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbMessenger" ADD CONSTRAINT "FbMessenger_fromuserId_fkey" FOREIGN KEY ("fromuserId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbMessenger" ADD CONSTRAINT "FbMessenger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbComment" ADD CONSTRAINT "FbComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupToUser" ADD CONSTRAINT "GroupToUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupToUser" ADD CONSTRAINT "GroupToUser_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "FbGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterFollow" ADD CONSTRAINT "TwitterFollow_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterFollow" ADD CONSTRAINT "TwitterFollow_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPost" ADD CONSTRAINT "TwitterPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterDirectMessage" ADD CONSTRAINT "TwitterDirectMessage_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterDirectMessage" ADD CONSTRAINT "TwitterDirectMessage_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterComment" ADD CONSTRAINT "TwitterComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterComment" ADD CONSTRAINT "TwitterComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "TwitterPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPostOnHashtag" ADD CONSTRAINT "TwitterPostOnHashtag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "TwitterPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPostOnHashtag" ADD CONSTRAINT "TwitterPostOnHashtag_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "TwitterHashtag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToChannel" ADD CONSTRAINT "UserToChannel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YTUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToChannel" ADD CONSTRAINT "UserToChannel_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "YTChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTVideo" ADD CONSTRAINT "YTVideo_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "YTChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTLike" ADD CONSTRAINT "YTLike_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "YTVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTLike" ADD CONSTRAINT "YTLike_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "YTComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTComment" ADD CONSTRAINT "YTComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YTUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTComment" ADD CONSTRAINT "YTComment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "YTVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTSubscribe" ADD CONSTRAINT "YTSubscribe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YTUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTSubscribe" ADD CONSTRAINT "YTSubscribe_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "YTChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTShare" ADD CONSTRAINT "YTShare_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YTUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTShare" ADD CONSTRAINT "YTShare_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "YTVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
