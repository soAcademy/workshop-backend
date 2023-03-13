/*
  Warnings:

  - You are about to drop the `_QuizToRound` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "binquiz"."_QuizToRound" DROP CONSTRAINT "_QuizToRound_A_fkey";

-- DropForeignKey
ALTER TABLE "binquiz"."_QuizToRound" DROP CONSTRAINT "_QuizToRound_B_fkey";

-- DropTable
DROP TABLE "binquiz"."_QuizToRound";

-- CreateTable
CREATE TABLE "binquiz"."ShuffledQuiz" (
    "id" SERIAL NOT NULL,
    "roundId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "choiceId" INTEGER NOT NULL,
    "choiceOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShuffledQuiz_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "binquiz"."ShuffledQuiz" ADD CONSTRAINT "ShuffledQuiz_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "binquiz"."Round"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binquiz"."ShuffledQuiz" ADD CONSTRAINT "ShuffledQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "binquiz"."Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binquiz"."ShuffledQuiz" ADD CONSTRAINT "ShuffledQuiz_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "binquiz"."Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
