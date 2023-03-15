/*
  Warnings:

  - You are about to drop the column `profilePictureId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_profilePictureId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilePictureId";
