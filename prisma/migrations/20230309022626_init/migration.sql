/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BookDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BookHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `University` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AuthorToBookDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookDetailToCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_bookDetailId_fkey";

-- DropForeignKey
ALTER TABLE "BookHistory" DROP CONSTRAINT "BookHistory_bookId_fkey";

-- DropForeignKey
ALTER TABLE "BookHistory" DROP CONSTRAINT "BookHistory_studentId_fkey";

-- DropForeignKey
ALTER TABLE "BookHistory" DROP CONSTRAINT "BookHistory_universityFromId_fkey";

-- DropForeignKey
ALTER TABLE "BookHistory" DROP CONSTRAINT "BookHistory_universityToId_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToBookDetail" DROP CONSTRAINT "_AuthorToBookDetail_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToBookDetail" DROP CONSTRAINT "_AuthorToBookDetail_B_fkey";

-- DropForeignKey
ALTER TABLE "_BookDetailToCategory" DROP CONSTRAINT "_BookDetailToCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookDetailToCategory" DROP CONSTRAINT "_BookDetailToCategory_B_fkey";

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "Book";

-- DropTable
DROP TABLE "BookDetail";

-- DropTable
DROP TABLE "BookHistory";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Student";

-- DropTable
DROP TABLE "University";

-- DropTable
DROP TABLE "_AuthorToBookDetail";

-- DropTable
DROP TABLE "_BookDetailToCategory";

-- CreateTable
CREATE TABLE "Categorie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Round" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "round" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoundQuestion" (
    "id" SERIAL NOT NULL,
    "roundsId" INTEGER NOT NULL,
    "orderQuestions" INTEGER NOT NULL,
    "questionsId" INTEGER NOT NULL,
    "chooseChoice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoundQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoundChooseChoice" (
    "id" SERIAL NOT NULL,
    "roundQuestionsId" INTEGER NOT NULL,
    "choicesId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoundChooseChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChoiceToQuestion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChoiceToQuestion_AB_unique" ON "_ChoiceToQuestion"("A", "B");

-- CreateIndex
CREATE INDEX "_ChoiceToQuestion_B_index" ON "_ChoiceToQuestion"("B");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuestion" ADD CONSTRAINT "RoundQuestion_roundsId_fkey" FOREIGN KEY ("roundsId") REFERENCES "Round"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuestion" ADD CONSTRAINT "RoundQuestion_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundChooseChoice" ADD CONSTRAINT "RoundChooseChoice_roundQuestionsId_fkey" FOREIGN KEY ("roundQuestionsId") REFERENCES "RoundQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundChooseChoice" ADD CONSTRAINT "RoundChooseChoice_choicesId_fkey" FOREIGN KEY ("choicesId") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChoiceToQuestion" ADD CONSTRAINT "_ChoiceToQuestion_A_fkey" FOREIGN KEY ("A") REFERENCES "Choice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChoiceToQuestion" ADD CONSTRAINT "_ChoiceToQuestion_B_fkey" FOREIGN KEY ("B") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
