-- DropForeignKey
ALTER TABLE "LibraryBookCopy" DROP CONSTRAINT "LibraryBookCopy_atUniversityId_fkey";

-- DropForeignKey
ALTER TABLE "LibraryBookCopy" DROP CONSTRAINT "LibraryBookCopy_currentBorrowBytudentId_fkey";

-- DropForeignKey
ALTER TABLE "LibraryHistoryOfBookCopy" DROP CONSTRAINT "LibraryHistoryOfBookCopy_oncetBorrowBytudentId_fkey";

-- AlterTable
ALTER TABLE "LibraryBookCopy" ALTER COLUMN "atUniversityId" DROP NOT NULL,
ALTER COLUMN "currentBorrowBytudentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LibraryHistoryOfBookCopy" ALTER COLUMN "oncetBorrowBytudentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LibraryStudentBorrowing" ALTER COLUMN "actualReturnDate" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_atUniversityId_fkey" FOREIGN KEY ("atUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_currentBorrowBytudentId_fkey" FOREIGN KEY ("currentBorrowBytudentId") REFERENCES "LibraryStudent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryHistoryOfBookCopy" ADD CONSTRAINT "LibraryHistoryOfBookCopy_oncetBorrowBytudentId_fkey" FOREIGN KEY ("oncetBorrowBytudentId") REFERENCES "LibraryStudent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
