/*
  Warnings:

  - You are about to drop the `_memberOfChannels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "youtube"."_memberOfChannels" DROP CONSTRAINT "_memberOfChannels_A_fkey";

-- DropForeignKey
ALTER TABLE "youtube"."_memberOfChannels" DROP CONSTRAINT "_memberOfChannels_B_fkey";

-- AlterTable
ALTER TABLE "youtube"."Channel" ALTER COLUMN "profileImageUrl" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "youtube"."User" ALTER COLUMN "profileImageUrl" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL;

-- AlterTable
ALTER TABLE "youtube"."Video" ALTER COLUMN "thumbnailImageUrl" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "youtube"."_memberOfChannels";

-- CreateTable
CREATE TABLE "youtube"."_adminOfChannels" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_adminOfChannels_AB_unique" ON "youtube"."_adminOfChannels"("A", "B");

-- CreateIndex
CREATE INDEX "_adminOfChannels_B_index" ON "youtube"."_adminOfChannels"("B");

-- AddForeignKey
ALTER TABLE "youtube"."_adminOfChannels" ADD CONSTRAINT "_adminOfChannels_A_fkey" FOREIGN KEY ("A") REFERENCES "youtube"."Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube"."_adminOfChannels" ADD CONSTRAINT "_adminOfChannels_B_fkey" FOREIGN KEY ("B") REFERENCES "youtube"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
