/*
  Warnings:

  - You are about to drop the column `likeType` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `shareStatus` on the `Share` table. All the data in the column will be lost.
  - Added the required column `likeTypeId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shareStatusId` to the `Share` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Like" DROP COLUMN "likeType",
ADD COLUMN     "likeTypeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Share" DROP COLUMN "shareStatus",
ADD COLUMN     "shareStatusId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "LikeType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LikeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShareStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShareStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_likeTypeId_fkey" FOREIGN KEY ("likeTypeId") REFERENCES "LikeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_shareStatusId_fkey" FOREIGN KEY ("shareStatusId") REFERENCES "ShareStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
