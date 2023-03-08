/*
  Warnings:

  - Added the required column `balance` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "library";

-- AlterTable
ALTER TABLE "binwash"."user" ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "library"."Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library"."BookTitle" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookTitle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library"."BookCategory" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library"."Book" (
    "id" SERIAL NOT NULL,
    "bookTitleId" INTEGER NOT NULL,
    "libraryId" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library"."Library" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "universityId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Library_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library"."University" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "University_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library"."Student" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "universityId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library"."BorrowingRecord" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "actualEndDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BorrowingRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library"."RequestRecord" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "bookTitleId" INTEGER NOT NULL,
    "requestingLibraryId" INTEGER NOT NULL,
    "requestedLibraryId" INTEGER NOT NULL,
    "requestDate" TIMESTAMP(3) NOT NULL,
    "acquiredDate" TIMESTAMP(3),
    "returnDate" TIMESTAMP(3),
    "bookId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RequestRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library"."_AuthorToBookTitle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "library"."_BookCategoryToBookTitle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToBookTitle_AB_unique" ON "library"."_AuthorToBookTitle"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToBookTitle_B_index" ON "library"."_AuthorToBookTitle"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BookCategoryToBookTitle_AB_unique" ON "library"."_BookCategoryToBookTitle"("A", "B");

-- CreateIndex
CREATE INDEX "_BookCategoryToBookTitle_B_index" ON "library"."_BookCategoryToBookTitle"("B");

-- AddForeignKey
ALTER TABLE "library"."Book" ADD CONSTRAINT "Book_bookTitleId_fkey" FOREIGN KEY ("bookTitleId") REFERENCES "library"."BookTitle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."Book" ADD CONSTRAINT "Book_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "library"."Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."Library" ADD CONSTRAINT "Library_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "library"."University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."Student" ADD CONSTRAINT "Student_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "library"."University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."BorrowingRecord" ADD CONSTRAINT "BorrowingRecord_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "library"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."BorrowingRecord" ADD CONSTRAINT "BorrowingRecord_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "library"."Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."RequestRecord" ADD CONSTRAINT "RequestRecord_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "library"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."RequestRecord" ADD CONSTRAINT "RequestRecord_bookTitleId_fkey" FOREIGN KEY ("bookTitleId") REFERENCES "library"."BookTitle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."RequestRecord" ADD CONSTRAINT "RequestRecord_requestingLibraryId_fkey" FOREIGN KEY ("requestingLibraryId") REFERENCES "library"."Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."RequestRecord" ADD CONSTRAINT "RequestRecord_requestedLibraryId_fkey" FOREIGN KEY ("requestedLibraryId") REFERENCES "library"."Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."RequestRecord" ADD CONSTRAINT "RequestRecord_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "library"."Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."_AuthorToBookTitle" ADD CONSTRAINT "_AuthorToBookTitle_A_fkey" FOREIGN KEY ("A") REFERENCES "library"."Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."_AuthorToBookTitle" ADD CONSTRAINT "_AuthorToBookTitle_B_fkey" FOREIGN KEY ("B") REFERENCES "library"."BookTitle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."_BookCategoryToBookTitle" ADD CONSTRAINT "_BookCategoryToBookTitle_A_fkey" FOREIGN KEY ("A") REFERENCES "library"."BookCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library"."_BookCategoryToBookTitle" ADD CONSTRAINT "_BookCategoryToBookTitle_B_fkey" FOREIGN KEY ("B") REFERENCES "library"."BookTitle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
