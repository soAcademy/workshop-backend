/*
  Warnings:

  - Changed the type of `floor` on the `MeetingRoom` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "MeetingRoom" DROP COLUMN "floor",
ADD COLUMN     "floor" INTEGER NOT NULL;
