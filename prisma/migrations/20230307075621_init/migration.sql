/*
  Warnings:

  - You are about to drop the column `userId` on the `DirectMessage` table. All the data in the column will be lost.
  - Added the required column `userIdFrom` to the `DirectMessage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DirectMessage" DROP CONSTRAINT "DirectMessage_userId_fkey";

-- AlterTable
ALTER TABLE "DirectMessage" DROP COLUMN "userId",
ADD COLUMN     "userIdFrom" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "DirectMessage" ADD CONSTRAINT "DirectMessage_userIdFrom_fkey" FOREIGN KEY ("userIdFrom") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
