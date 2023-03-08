/*
  Warnings:

  - Added the required column `price` to the `WashingUseHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WashingUseHistory" ADD COLUMN     "price" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "LibraryUniversity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryUniversity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryStudent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryStudent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBook" (
    "id" SERIAL NOT NULL,
    "universityId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBookCopy" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "atUniversityId" INTEGER NOT NULL,
    "currentBorrowBytudentId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBookCopy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryHistoryOfBookCopy" (
    "id" SERIAL NOT NULL,
    "copyId" INTEGER NOT NULL,
    "oncetBorrowBytudentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryHistoryOfBookCopy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryAuthor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookOnAuthor" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookOnAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookOnCategory" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookOnCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryStudentRequest" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "bookCopyId" INTEGER NOT NULL,
    "fromUniversityId" INTEGER NOT NULL,
    "toUniversityId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryStudentRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryStudentBorrowing" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "bookCopyId" INTEGER NOT NULL,
    "borrowingDate" TIMESTAMP(3) NOT NULL,
    "targetReturnDate" TIMESTAMP(3) NOT NULL,
    "actualReturnDate" TIMESTAMP(3) NOT NULL,
    "borrowFromUniversityId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryStudentBorrowing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LibraryBook" ADD CONSTRAINT "LibraryBook_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_atUniversityId_fkey" FOREIGN KEY ("atUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_currentBorrowBytudentId_fkey" FOREIGN KEY ("currentBorrowBytudentId") REFERENCES "LibraryStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryHistoryOfBookCopy" ADD CONSTRAINT "LibraryHistoryOfBookCopy_copyId_fkey" FOREIGN KEY ("copyId") REFERENCES "LibraryBookCopy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryHistoryOfBookCopy" ADD CONSTRAINT "LibraryHistoryOfBookCopy_oncetBorrowBytudentId_fkey" FOREIGN KEY ("oncetBorrowBytudentId") REFERENCES "LibraryStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookOnAuthor" ADD CONSTRAINT "BookOnAuthor_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookOnAuthor" ADD CONSTRAINT "BookOnAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "LibraryAuthor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookOnCategory" ADD CONSTRAINT "BookOnCategory_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookOnCategory" ADD CONSTRAINT "BookOnCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "LibraryCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryStudentRequest" ADD CONSTRAINT "LibraryStudentRequest_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "LibraryStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryStudentRequest" ADD CONSTRAINT "LibraryStudentRequest_bookCopyId_fkey" FOREIGN KEY ("bookCopyId") REFERENCES "LibraryBookCopy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryStudentRequest" ADD CONSTRAINT "LibraryStudentRequest_fromUniversityId_fkey" FOREIGN KEY ("fromUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryStudentRequest" ADD CONSTRAINT "LibraryStudentRequest_toUniversityId_fkey" FOREIGN KEY ("toUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryStudentBorrowing" ADD CONSTRAINT "LibraryStudentBorrowing_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "LibraryStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryStudentBorrowing" ADD CONSTRAINT "LibraryStudentBorrowing_bookCopyId_fkey" FOREIGN KEY ("bookCopyId") REFERENCES "LibraryBookCopy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryStudentBorrowing" ADD CONSTRAINT "LibraryStudentBorrowing_borrowFromUniversityId_fkey" FOREIGN KEY ("borrowFromUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
