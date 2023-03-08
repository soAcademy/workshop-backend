/*
  Warnings:

  - You are about to drop the column `userId` on the `FbMessenger` table. All the data in the column will be lost.
  - Added the required column `toUserId` to the `FbMessenger` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RequestStatusEnum" AS ENUM ('PENDING', 'COMPLETED');

-- CreateEnum
CREATE TYPE "CopyStatusEnum" AS ENUM ('INSTOCK', 'RESERVED');

-- DropForeignKey
ALTER TABLE "FbMessenger" DROP CONSTRAINT "FbMessenger_userId_fkey";

-- AlterTable
ALTER TABLE "FbMessenger" DROP COLUMN "userId",
ADD COLUMN     "toUserId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "BKReserveUser" (
    "id" SERIAL NOT NULL,
    "universityId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BKReserveUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BKRequest" (
    "id" SERIAL NOT NULL,
    "reserveUserId" INTEGER NOT NULL,
    "copyId" INTEGER NOT NULL,
    "fromUniversityId" INTEGER NOT NULL,
    "toUniversityId" INTEGER NOT NULL,
    "requestDate" TIMESTAMP(3) NOT NULL,
    "status" "RequestStatusEnum" NOT NULL,
    "planRecievedDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BKRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BKBorrowingHistory" (
    "id" SERIAL NOT NULL,
    "reserveUserId" INTEGER NOT NULL,
    "copyId" INTEGER NOT NULL,
    "fromUniversityId" INTEGER NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3) NOT NULL,
    "actualReturnDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BKBorrowingHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BKCopy" (
    "id" SERIAL NOT NULL,
    "status" "CopyStatusEnum" NOT NULL,
    "titleId" INTEGER NOT NULL,
    "reserveUserId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BKCopy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BKUniversity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BKUniversity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BKTitle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ISBN" INTEGER NOT NULL,
    "copyQty" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BKTitle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversityToTitle" (
    "id" SERIAL NOT NULL,
    "universityId" INTEGER NOT NULL,
    "titleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UniversityToTitle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BKCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BKCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TitleToCategory" (
    "id" SERIAL NOT NULL,
    "titleId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TitleToCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BKAuthor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BKAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TitleToAuthor" (
    "id" SERIAL NOT NULL,
    "titleId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TitleToAuthor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BKReserveUser" ADD CONSTRAINT "BKReserveUser_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "BKUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BKRequest" ADD CONSTRAINT "BKRequest_reserveUserId_fkey" FOREIGN KEY ("reserveUserId") REFERENCES "BKReserveUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BKRequest" ADD CONSTRAINT "BKRequest_copyId_fkey" FOREIGN KEY ("copyId") REFERENCES "BKCopy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BKRequest" ADD CONSTRAINT "BKRequest_fromUniversityId_fkey" FOREIGN KEY ("fromUniversityId") REFERENCES "BKUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BKRequest" ADD CONSTRAINT "BKRequest_toUniversityId_fkey" FOREIGN KEY ("toUniversityId") REFERENCES "BKUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BKBorrowingHistory" ADD CONSTRAINT "BKBorrowingHistory_reserveUserId_fkey" FOREIGN KEY ("reserveUserId") REFERENCES "BKReserveUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BKBorrowingHistory" ADD CONSTRAINT "BKBorrowingHistory_copyId_fkey" FOREIGN KEY ("copyId") REFERENCES "BKCopy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BKBorrowingHistory" ADD CONSTRAINT "BKBorrowingHistory_fromUniversityId_fkey" FOREIGN KEY ("fromUniversityId") REFERENCES "BKUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BKCopy" ADD CONSTRAINT "BKCopy_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "BKTitle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BKCopy" ADD CONSTRAINT "BKCopy_reserveUserId_fkey" FOREIGN KEY ("reserveUserId") REFERENCES "BKReserveUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityToTitle" ADD CONSTRAINT "UniversityToTitle_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "BKUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityToTitle" ADD CONSTRAINT "UniversityToTitle_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "BKTitle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TitleToCategory" ADD CONSTRAINT "TitleToCategory_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "BKTitle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TitleToCategory" ADD CONSTRAINT "TitleToCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "BKCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TitleToAuthor" ADD CONSTRAINT "TitleToAuthor_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "BKTitle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TitleToAuthor" ADD CONSTRAINT "TitleToAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "BKAuthor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbMessenger" ADD CONSTRAINT "FbMessenger_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "FbUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
