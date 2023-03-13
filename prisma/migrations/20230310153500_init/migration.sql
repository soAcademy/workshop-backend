-- AlterTable
ALTER TABLE "QuizeQuestion" ADD COLUMN     "quizeGameRoundId" INTEGER;

-- AddForeignKey
ALTER TABLE "QuizeQuestion" ADD CONSTRAINT "QuizeQuestion_quizeGameRoundId_fkey" FOREIGN KEY ("quizeGameRoundId") REFERENCES "QuizeGameRound"("id") ON DELETE SET NULL ON UPDATE CASCADE;
