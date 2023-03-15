/*
  Warnings:

  - Added the required column `userId` to the `PostinProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PostinProfile" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PostinProfile" ADD CONSTRAINT "PostinProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FBUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
