/*
  Warnings:

  - You are about to drop the `RoundDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoundDetail" DROP CONSTRAINT "RoundDetail_questionId_fkey";

-- DropForeignKey
ALTER TABLE "RoundDetail" DROP CONSTRAINT "RoundDetail_roundQuizId_fkey";

-- DropTable
DROP TABLE "RoundDetail";

-- CreateTable
CREATE TABLE "RoundQuestionDetail" (
    "id" SERIAL NOT NULL,
    "roundQuizId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "questionOrder" INTEGER NOT NULL,
    "userChoose" INTEGER,
    "result" BOOLEAN NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoundQuestionDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoundQuestionDetail" ADD CONSTRAINT "RoundQuestionDetail_roundQuizId_fkey" FOREIGN KEY ("roundQuizId") REFERENCES "RoundQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuestionDetail" ADD CONSTRAINT "RoundQuestionDetail_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
