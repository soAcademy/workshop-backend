/*
  Warnings:

  - You are about to drop the `Faqs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ingredients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Oders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Price` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductWithFaq` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductWithIngredients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderItems" DROP CONSTRAINT "OrderItems_odersId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItems" DROP CONSTRAINT "OrderItems_productsId_fkey";

-- DropForeignKey
ALTER TABLE "Price" DROP CONSTRAINT "Price_productsId_fkey";

-- DropForeignKey
ALTER TABLE "ProductWithFaq" DROP CONSTRAINT "ProductWithFaq_faqsId_fkey";

-- DropForeignKey
ALTER TABLE "ProductWithFaq" DROP CONSTRAINT "ProductWithFaq_productsId_fkey";

-- DropForeignKey
ALTER TABLE "ProductWithIngredients" DROP CONSTRAINT "ProductWithIngredients_ingredientsId_fkey";

-- DropForeignKey
ALTER TABLE "ProductWithIngredients" DROP CONSTRAINT "ProductWithIngredients_productsId_fkey";

-- DropTable
DROP TABLE "Faqs";

-- DropTable
DROP TABLE "Ingredients";

-- DropTable
DROP TABLE "Oders";

-- DropTable
DROP TABLE "OrderItems";

-- DropTable
DROP TABLE "Price";

-- DropTable
DROP TABLE "ProductWithFaq";

-- DropTable
DROP TABLE "ProductWithIngredients";

-- DropTable
DROP TABLE "Products";

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "categoriesId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choices" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Choices_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Rounds" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "categoriesId" INTEGER NOT NULL,
    "round" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rounds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoundQuestions" (
    "id" SERIAL NOT NULL,
    "roundsId" INTEGER NOT NULL,
    "orderQuestions" INTEGER NOT NULL,
    "questionsId" INTEGER NOT NULL,
    "chooseChoice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoundQuestions_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "_ChoicesToQuestions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChoicesToQuestions_AB_unique" ON "_ChoicesToQuestions"("A", "B");

-- CreateIndex
CREATE INDEX "_ChoicesToQuestions_B_index" ON "_ChoicesToQuestions"("B");

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rounds" ADD CONSTRAINT "Rounds_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rounds" ADD CONSTRAINT "Rounds_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuestions" ADD CONSTRAINT "RoundQuestions_roundsId_fkey" FOREIGN KEY ("roundsId") REFERENCES "Rounds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuestions" ADD CONSTRAINT "RoundQuestions_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundChooseChoice" ADD CONSTRAINT "RoundChooseChoice_roundQuestionsId_fkey" FOREIGN KEY ("roundQuestionsId") REFERENCES "RoundQuestions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundChooseChoice" ADD CONSTRAINT "RoundChooseChoice_choicesId_fkey" FOREIGN KEY ("choicesId") REFERENCES "Choices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChoicesToQuestions" ADD CONSTRAINT "_ChoicesToQuestions_A_fkey" FOREIGN KEY ("A") REFERENCES "Choices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChoicesToQuestions" ADD CONSTRAINT "_ChoicesToQuestions_B_fkey" FOREIGN KEY ("B") REFERENCES "Questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
