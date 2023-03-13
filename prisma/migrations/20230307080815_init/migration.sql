/*
  Warnings:

  - You are about to drop the column `follower` on the `UserRelation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserRelation` table. All the data in the column will be lost.
  - You are about to drop the `_UserToUserRelation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fromId` to the `UserRelation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toId` to the `UserRelation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_UserToUserRelation" DROP CONSTRAINT "_UserToUserRelation_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserToUserRelation" DROP CONSTRAINT "_UserToUserRelation_B_fkey";

-- AlterTable
ALTER TABLE "UserRelation" DROP COLUMN "follower",
DROP COLUMN "userId",
ADD COLUMN     "fromId" INTEGER NOT NULL,
ADD COLUMN     "toId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_UserToUserRelation";

-- AddForeignKey
ALTER TABLE "UserRelation" ADD CONSTRAINT "UserRelation_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRelation" ADD CONSTRAINT "UserRelation_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
