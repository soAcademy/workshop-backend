/*
  Warnings:

  - You are about to drop the column `followerUserId` on the `TwitterDirectMessage` table. All the data in the column will be lost.
  - You are about to drop the column `followingUserId` on the `TwitterDirectMessage` table. All the data in the column will be lost.
  - You are about to drop the column `fromUserId` on the `TwitterUserRelation` table. All the data in the column will be lost.
  - You are about to drop the column `toUserId` on the `TwitterUserRelation` table. All the data in the column will be lost.
  - Added the required column `fromUserId` to the `TwitterDirectMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toUserId` to the `TwitterDirectMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followerUserId` to the `TwitterUserRelation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followingUserId` to the `TwitterUserRelation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TwitterDirectMessage" DROP CONSTRAINT "TwitterDirectMessage_followerUserId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterDirectMessage" DROP CONSTRAINT "TwitterDirectMessage_followingUserId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterUserRelation" DROP CONSTRAINT "TwitterUserRelation_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterUserRelation" DROP CONSTRAINT "TwitterUserRelation_toUserId_fkey";

-- AlterTable
ALTER TABLE "TwitterDirectMessage" DROP COLUMN "followerUserId",
DROP COLUMN "followingUserId",
ADD COLUMN     "fromUserId" INTEGER NOT NULL,
ADD COLUMN     "toUserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TwitterUserRelation" DROP COLUMN "fromUserId",
DROP COLUMN "toUserId",
ADD COLUMN     "followerUserId" INTEGER NOT NULL,
ADD COLUMN     "followingUserId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TwitterDirectMessage" ADD CONSTRAINT "TwitterDirectMessage_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterDirectMessage" ADD CONSTRAINT "TwitterDirectMessage_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterUserRelation" ADD CONSTRAINT "TwitterUserRelation_followingUserId_fkey" FOREIGN KEY ("followingUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterUserRelation" ADD CONSTRAINT "TwitterUserRelation_followerUserId_fkey" FOREIGN KEY ("followerUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
