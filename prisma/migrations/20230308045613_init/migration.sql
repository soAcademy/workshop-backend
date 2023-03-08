/*
  Warnings:

  - You are about to drop the `DestinationTable` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HashTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HashTagOnPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reply` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DestinationTable" DROP CONSTRAINT "DestinationTable_groupId_fkey";

-- DropForeignKey
ALTER TABLE "DestinationTable" DROP CONSTRAINT "DestinationTable_userId_fkey";

-- DropForeignKey
ALTER TABLE "DestinationTable" DROP CONSTRAINT "DestinationTable_wallId_fkey";

-- DropForeignKey
ALTER TABLE "HashTagOnPost" DROP CONSTRAINT "HashTagOnPost_hashTagId_fkey";

-- DropForeignKey
ALTER TABLE "HashTagOnPost" DROP CONSTRAINT "HashTagOnPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_postId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_replyId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_userId_fkey";

-- DropTable
DROP TABLE "DestinationTable";

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "HashTag";

-- DropTable
DROP TABLE "HashTagOnPost";

-- DropTable
DROP TABLE "Like";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Reply";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserRelation";
