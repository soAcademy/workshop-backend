/*
  Warnings:

  - You are about to drop the column `repliedTweetId` on the `Tweet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[replyToTweetId]` on the table `Tweet` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "twitter"."Tweet" DROP CONSTRAINT "Tweet_repliedTweetId_fkey";

-- AlterTable
ALTER TABLE "twitter"."Tweet" DROP COLUMN "repliedTweetId",
ADD COLUMN     "replyToTweetId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Tweet_replyToTweetId_key" ON "twitter"."Tweet"("replyToTweetId");

-- AddForeignKey
ALTER TABLE "twitter"."Tweet" ADD CONSTRAINT "Tweet_replyToTweetId_fkey" FOREIGN KEY ("replyToTweetId") REFERENCES "twitter"."Tweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
