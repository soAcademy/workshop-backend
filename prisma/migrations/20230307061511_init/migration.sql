/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Choices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoundQuestions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rounds` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ChoicesToQuestions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_categoriesId_fkey";

-- DropForeignKey
ALTER TABLE "RoundChooseChoice" DROP CONSTRAINT "RoundChooseChoice_choicesId_fkey";

-- DropForeignKey
ALTER TABLE "RoundChooseChoice" DROP CONSTRAINT "RoundChooseChoice_roundQuestionsId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestions" DROP CONSTRAINT "RoundQuestions_questionsId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestions" DROP CONSTRAINT "RoundQuestions_roundsId_fkey";

-- DropForeignKey
ALTER TABLE "Rounds" DROP CONSTRAINT "Rounds_playerId_fkey";

-- DropForeignKey
ALTER TABLE "_ChoicesToQuestions" DROP CONSTRAINT "_ChoicesToQuestions_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChoicesToQuestions" DROP CONSTRAINT "_ChoicesToQuestions_B_fkey";

-- DropTable
DROP TABLE "Categories";

-- DropTable
DROP TABLE "Choices";

-- DropTable
DROP TABLE "Questions";

-- DropTable
DROP TABLE "RoundQuestions";

-- DropTable
DROP TABLE "Rounds";

-- DropTable
DROP TABLE "_ChoicesToQuestions";

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
