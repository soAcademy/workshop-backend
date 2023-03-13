/*
  Warnings:

  - You are about to drop the `ShareToGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShareToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShareToWall` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShareToGroup" DROP CONSTRAINT "ShareToGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "ShareToGroup" DROP CONSTRAINT "ShareToGroup_postId_fkey";

-- DropForeignKey
ALTER TABLE "ShareToGroup" DROP CONSTRAINT "ShareToGroup_userId_fkey";

-- DropForeignKey
ALTER TABLE "ShareToUser" DROP CONSTRAINT "ShareToUser_fromId_fkey";

-- DropForeignKey
ALTER TABLE "ShareToUser" DROP CONSTRAINT "ShareToUser_postId_fkey";

-- DropForeignKey
ALTER TABLE "ShareToUser" DROP CONSTRAINT "ShareToUser_toId_fkey";

-- DropForeignKey
ALTER TABLE "ShareToWall" DROP CONSTRAINT "ShareToWall_postId_fkey";

-- DropForeignKey
ALTER TABLE "ShareToWall" DROP CONSTRAINT "ShareToWall_userId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "media" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "coverImage" DROP NOT NULL,
ALTER COLUMN "profileImage" DROP NOT NULL;

-- DropTable
DROP TABLE "ShareToGroup";

-- DropTable
DROP TABLE "ShareToUser";

-- DropTable
DROP TABLE "ShareToWall";

-- CreateTable
CREATE TABLE "ShareTo" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "fromId" INTEGER,
    "toId" INTEGER,
    "groupId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShareTo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShareTo" ADD CONSTRAINT "ShareTo_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShareTo" ADD CONSTRAINT "ShareTo_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShareTo" ADD CONSTRAINT "ShareTo_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShareTo" ADD CONSTRAINT "ShareTo_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
