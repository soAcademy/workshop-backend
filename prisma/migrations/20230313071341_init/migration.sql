/*
  Warnings:

  - You are about to drop the column `postByUserId` on the `TwitterReply` table. All the data in the column will be lost.
  - Added the required column `replyByUserId` to the `TwitterReply` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TwitterReply" DROP CONSTRAINT "TwitterReply_postByUserId_fkey";

-- AlterTable
ALTER TABLE "TwitterReply" DROP COLUMN "postByUserId",
ADD COLUMN     "replyByUserId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TwitterReply" ADD CONSTRAINT "TwitterReply_replyByUserId_fkey" FOREIGN KEY ("replyByUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
