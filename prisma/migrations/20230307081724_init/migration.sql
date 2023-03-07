/*
  Warnings:

  - You are about to drop the column `followedUserId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "twitter"."User" DROP CONSTRAINT "User_followedUserId_fkey";

-- AlterTable
ALTER TABLE "twitter"."User" DROP COLUMN "followedUserId";

-- CreateTable
CREATE TABLE "twitter"."userRelation" (
    "id" SERIAL NOT NULL,
    "followingUserId" INTEGER NOT NULL,
    "followedUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userRelation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "twitter"."userRelation" ADD CONSTRAINT "userRelation_followingUserId_fkey" FOREIGN KEY ("followingUserId") REFERENCES "twitter"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "twitter"."userRelation" ADD CONSTRAINT "userRelation_followedUserId_fkey" FOREIGN KEY ("followedUserId") REFERENCES "twitter"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
