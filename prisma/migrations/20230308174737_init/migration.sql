/*
  Warnings:

  - You are about to drop the `Branch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `History` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Machine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mantainance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Program` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProgramOnMachine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wallet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_programOnMachineId_fkey";

-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_userId_fkey";

-- DropForeignKey
ALTER TABLE "Machine" DROP CONSTRAINT "Machine_branchId_fkey";

-- DropForeignKey
ALTER TABLE "Mantainance" DROP CONSTRAINT "Mantainance_machineId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramOnMachine" DROP CONSTRAINT "ProgramOnMachine_machineId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramOnMachine" DROP CONSTRAINT "ProgramOnMachine_programId_fkey";

-- DropForeignKey
ALTER TABLE "Wallet" DROP CONSTRAINT "Wallet_userId_fkey";

-- DropTable
DROP TABLE "Branch";

-- DropTable
DROP TABLE "History";

-- DropTable
DROP TABLE "Machine";

-- DropTable
DROP TABLE "Mantainance";

-- DropTable
DROP TABLE "Program";

-- DropTable
DROP TABLE "ProgramOnMachine";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Wallet";

-- CreateTable
CREATE TABLE "BookDetail" (
    "id" SERIAL NOT NULL,
    "isbn" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "bookDetailId" INTEGER NOT NULL,
    "copyNo" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "University" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "University_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookHistory" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "universityFromId" INTEGER NOT NULL,
    "studentId" INTEGER,
    "universityToId" INTEGER,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDatePlan" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookDetailToCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AuthorToBookDetail" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookDetailToCategory_AB_unique" ON "_BookDetailToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_BookDetailToCategory_B_index" ON "_BookDetailToCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToBookDetail_AB_unique" ON "_AuthorToBookDetail"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToBookDetail_B_index" ON "_AuthorToBookDetail"("B");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_bookDetailId_fkey" FOREIGN KEY ("bookDetailId") REFERENCES "BookDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookHistory" ADD CONSTRAINT "BookHistory_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookHistory" ADD CONSTRAINT "BookHistory_universityFromId_fkey" FOREIGN KEY ("universityFromId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookHistory" ADD CONSTRAINT "BookHistory_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookHistory" ADD CONSTRAINT "BookHistory_universityToId_fkey" FOREIGN KEY ("universityToId") REFERENCES "University"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookDetailToCategory" ADD CONSTRAINT "_BookDetailToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "BookDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookDetailToCategory" ADD CONSTRAINT "_BookDetailToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToBookDetail" ADD CONSTRAINT "_AuthorToBookDetail_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToBookDetail" ADD CONSTRAINT "_AuthorToBookDetail_B_fkey" FOREIGN KEY ("B") REFERENCES "BookDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
