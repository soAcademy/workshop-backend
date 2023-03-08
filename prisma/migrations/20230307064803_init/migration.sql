/*
  Warnings:

  - You are about to drop the column `roundID` on the `TriviaRoundQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `userChoice` on the `TriviaRoundQuestion` table. All the data in the column will be lost.
  - You are about to drop the `TriviaRoundScore` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answerID` to the `TriviaQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `choiceId` to the `TriviaRoundQuestion` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `quizResult` on the `TriviaRoundQuestion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "TriviaRoundScore" DROP CONSTRAINT "TriviaRoundScore_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "TriviaRoundScore" DROP CONSTRAINT "TriviaRoundScore_roundId_fkey";

-- AlterTable
ALTER TABLE "TriviaQuestion" ADD COLUMN     "answerID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TriviaRoundQuestion" DROP COLUMN "roundID",
DROP COLUMN "userChoice",
ADD COLUMN     "choiceId" INTEGER NOT NULL,
ADD COLUMN     "roundId" INTEGER,
DROP COLUMN "quizResult",
ADD COLUMN     "quizResult" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "TriviaRoundScore";

-- CreateTable
CREATE TABLE "TriviaRound" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "totalResult" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TriviaRound_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "TriviaRound"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
