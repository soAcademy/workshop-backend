/*
  Warnings:

  - You are about to drop the column `userIdFrom` on the `DirectMessage` table. All the data in the column will be lost.
  - You are about to drop the column `userIdTo` on the `DirectMessage` table. All the data in the column will be lost.
  - Added the required column `fromId` to the `DirectMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toId` to the `DirectMessage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DirectMessage" DROP CONSTRAINT "DirectMessage_userIdFrom_fkey";

-- AlterTable
ALTER TABLE "DirectMessage" DROP COLUMN "userIdFrom",
DROP COLUMN "userIdTo",
ADD COLUMN     "fromId" INTEGER NOT NULL,
ADD COLUMN     "toId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "DirectMessage" ADD CONSTRAINT "DirectMessage_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectMessage" ADD CONSTRAINT "DirectMessage_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
