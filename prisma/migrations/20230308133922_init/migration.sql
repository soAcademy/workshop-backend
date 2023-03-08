-- CreateTable
CREATE TABLE "LibraryBookCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBookCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBook" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ISBN" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryCategoryToBook" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "libraryBookCategoryId" INTEGER NOT NULL,
    "libraryBookId" INTEGER NOT NULL,

    CONSTRAINT "LibraryCategoryToBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBookAuthor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBookAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBookToAuthor" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "libraryBookId" INTEGER NOT NULL,
    "libraryBookAuthorId" INTEGER NOT NULL,

    CONSTRAINT "LibraryBookToAuthor_pkey" PRIMARY KEY ("id")
);

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
    "studentId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "libraryUniversityId" INTEGER NOT NULL,

    CONSTRAINT "LibraryStudent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBookCopy" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "libraryBookId" INTEGER NOT NULL,
    "libraryUniversityId" INTEGER NOT NULL,
    "libraryStudentId" INTEGER NOT NULL,

    CONSTRAINT "LibraryBookCopy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBorrowingHistory" (
    "id" SERIAL NOT NULL,
    "borrowDate" INTEGER NOT NULL,
    "returnDate" INTEGER NOT NULL,
    "actualReturnDate" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "libraryStudentId" INTEGER NOT NULL,
    "libraryBookCopyId" INTEGER NOT NULL,
    "libraryUniversityId" INTEGER NOT NULL,

    CONSTRAINT "LibraryBorrowingHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryRequest" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "libraryStudentId" INTEGER NOT NULL,
    "libraryBookCopyId" INTEGER NOT NULL,
    "fromLibraryUniversityId" INTEGER NOT NULL,
    "toLibraryUniversityId" INTEGER NOT NULL,

    CONSTRAINT "LibraryRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LibraryBookCategory_name_key" ON "LibraryBookCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryBook_name_key" ON "LibraryBook"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryBookAuthor_name_key" ON "LibraryBookAuthor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryUniversity_name_key" ON "LibraryUniversity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryStudent_name_key" ON "LibraryStudent"("name");

-- AddForeignKey
ALTER TABLE "LibraryCategoryToBook" ADD CONSTRAINT "LibraryCategoryToBook_libraryBookCategoryId_fkey" FOREIGN KEY ("libraryBookCategoryId") REFERENCES "LibraryBookCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryCategoryToBook" ADD CONSTRAINT "LibraryCategoryToBook_libraryBookId_fkey" FOREIGN KEY ("libraryBookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookToAuthor" ADD CONSTRAINT "LibraryBookToAuthor_libraryBookId_fkey" FOREIGN KEY ("libraryBookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookToAuthor" ADD CONSTRAINT "LibraryBookToAuthor_libraryBookAuthorId_fkey" FOREIGN KEY ("libraryBookAuthorId") REFERENCES "LibraryBookAuthor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryStudent" ADD CONSTRAINT "LibraryStudent_libraryUniversityId_fkey" FOREIGN KEY ("libraryUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_libraryBookId_fkey" FOREIGN KEY ("libraryBookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_libraryUniversityId_fkey" FOREIGN KEY ("libraryUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_libraryStudentId_fkey" FOREIGN KEY ("libraryStudentId") REFERENCES "LibraryStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBorrowingHistory" ADD CONSTRAINT "LibraryBorrowingHistory_libraryStudentId_fkey" FOREIGN KEY ("libraryStudentId") REFERENCES "LibraryStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBorrowingHistory" ADD CONSTRAINT "LibraryBorrowingHistory_libraryBookCopyId_fkey" FOREIGN KEY ("libraryBookCopyId") REFERENCES "LibraryBookCopy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBorrowingHistory" ADD CONSTRAINT "LibraryBorrowingHistory_libraryUniversityId_fkey" FOREIGN KEY ("libraryUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryRequest" ADD CONSTRAINT "LibraryRequest_libraryStudentId_fkey" FOREIGN KEY ("libraryStudentId") REFERENCES "LibraryStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryRequest" ADD CONSTRAINT "LibraryRequest_libraryBookCopyId_fkey" FOREIGN KEY ("libraryBookCopyId") REFERENCES "LibraryBookCopy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryRequest" ADD CONSTRAINT "LibraryRequest_fromLibraryUniversityId_fkey" FOREIGN KEY ("fromLibraryUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryRequest" ADD CONSTRAINT "LibraryRequest_toLibraryUniversityId_fkey" FOREIGN KEY ("toLibraryUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
