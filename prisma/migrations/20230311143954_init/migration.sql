/*
  Warnings:

  - You are about to drop the column `triviaRoundQuestionId` on the `TriviaRound` table. All the data in the column will be lost.
  - Added the required column `roundNo` to the `TriviaRound` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TriviaRound` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roundId` to the `TriviaRoundQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar` to the `TriviaUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TriviaRound" DROP CONSTRAINT "TriviaRound_triviaRoundQuestionId_fkey";

-- AlterTable
ALTER TABLE "TriviaRound" DROP COLUMN "triviaRoundQuestionId",
ADD COLUMN     "roundNo" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TriviaRoundQuestion" ADD COLUMN     "roundId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TriviaUser" ADD COLUMN     "avatar" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "TriviaRound"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TriviaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
