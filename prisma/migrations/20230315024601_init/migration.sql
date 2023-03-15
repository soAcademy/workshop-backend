/*
  Warnings:

  - You are about to drop the `PictureUrl` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_profilePictureId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profilePictureId_fkey";

-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "profilePicture" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profilePicture" TEXT;

-- DropTable
DROP TABLE "PictureUrl";
