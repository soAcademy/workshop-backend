/*
  Warnings:

  - You are about to drop the column `userId` on the `FBPost` table. All the data in the column will be lost.
  - You are about to drop the `PostinGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostinProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FBPost" DROP CONSTRAINT "FBPost_userId_fkey";

-- DropForeignKey
ALTER TABLE "PostinGroup" DROP CONSTRAINT "PostinGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "PostinGroup" DROP CONSTRAINT "PostinGroup_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostinProfile" DROP CONSTRAINT "PostinProfile_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostinProfile" DROP CONSTRAINT "PostinProfile_userId_fkey";

-- AlterTable
ALTER TABLE "FBPost" DROP COLUMN "userId",
ADD COLUMN     "groupId" INTEGER,
ADD COLUMN     "postByUserId" INTEGER,
ADD COLUMN     "postInUserId" INTEGER;

-- DropTable
DROP TABLE "PostinGroup";

-- DropTable
DROP TABLE "PostinProfile";

-- AddForeignKey
ALTER TABLE "FBPost" ADD CONSTRAINT "FBPost_postByUserId_fkey" FOREIGN KEY ("postByUserId") REFERENCES "FBUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FBPost" ADD CONSTRAINT "FBPost_postInUserId_fkey" FOREIGN KEY ("postInUserId") REFERENCES "FBUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FBPost" ADD CONSTRAINT "FBPost_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
