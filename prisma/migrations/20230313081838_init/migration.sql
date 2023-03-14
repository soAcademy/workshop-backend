/*
  Warnings:

  - You are about to drop the `KorKitchenCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenMenu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenOrderItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "KorKitchenMenu" DROP CONSTRAINT "KorKitchenMenu_categoryName_fkey";

-- DropForeignKey
ALTER TABLE "KorKitchenOrderItem" DROP CONSTRAINT "KorKitchenOrderItem_menuId_fkey";

-- DropForeignKey
ALTER TABLE "KorKitchenOrderItem" DROP CONSTRAINT "KorKitchenOrderItem_orderId_fkey";

-- DropTable
DROP TABLE "KorKitchenCategory";

-- DropTable
DROP TABLE "KorKitchenMenu";

-- DropTable
DROP TABLE "KorKitchenOrder";

-- DropTable
DROP TABLE "KorKitchenOrderItem";

-- CreateTable
CREATE TABLE "TriviaCategory" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "TriviaCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaQuestion" (
    "id" SERIAL NOT NULL,
    "quiz" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "triviaAnswerChoiceId" INTEGER NOT NULL,

    CONSTRAINT "TriviaQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaChoice" (
    "id" SERIAL NOT NULL,
    "choice" TEXT NOT NULL,
    "quizId" INTEGER,

    CONSTRAINT "TriviaChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRoundQuestion" (
    "id" SERIAL NOT NULL,
    "quizId" INTEGER NOT NULL,
    "choiceId" INTEGER NOT NULL,
    "quizResult" INTEGER,
    "roundId" INTEGER NOT NULL,

    CONSTRAINT "TriviaRoundQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRound" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "totalResult" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "roundNo" INTEGER NOT NULL,

    CONSTRAINT "TriviaRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaUser" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "TriviaUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TriviaQuestion_triviaAnswerChoiceId_key" ON "TriviaQuestion"("triviaAnswerChoiceId");

-- AddForeignKey
ALTER TABLE "TriviaQuestion" ADD CONSTRAINT "TriviaQuestion_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaQuestion" ADD CONSTRAINT "TriviaQuestion_triviaAnswerChoiceId_fkey" FOREIGN KEY ("triviaAnswerChoiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaChoice" ADD CONSTRAINT "TriviaChoice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "TriviaRound"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TriviaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
