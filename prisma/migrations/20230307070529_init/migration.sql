/*
  Warnings:

  - You are about to drop the column `roundId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `roundId` on the `Quiz` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "binquiz"."Choice" DROP CONSTRAINT "Choice_roundId_fkey";

-- DropForeignKey
ALTER TABLE "binquiz"."Quiz" DROP CONSTRAINT "Quiz_roundId_fkey";

-- AlterTable
ALTER TABLE "binquiz"."Choice" DROP COLUMN "roundId";

-- AlterTable
ALTER TABLE "binquiz"."Quiz" DROP COLUMN "roundId";

-- CreateTable
CREATE TABLE "binquiz"."_ChoiceToRound" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "binquiz"."_QuizToRound" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChoiceToRound_AB_unique" ON "binquiz"."_ChoiceToRound"("A", "B");

-- CreateIndex
CREATE INDEX "_ChoiceToRound_B_index" ON "binquiz"."_ChoiceToRound"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_QuizToRound_AB_unique" ON "binquiz"."_QuizToRound"("A", "B");

-- CreateIndex
CREATE INDEX "_QuizToRound_B_index" ON "binquiz"."_QuizToRound"("B");

-- AddForeignKey
ALTER TABLE "binquiz"."_ChoiceToRound" ADD CONSTRAINT "_ChoiceToRound_A_fkey" FOREIGN KEY ("A") REFERENCES "binquiz"."Choice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binquiz"."_ChoiceToRound" ADD CONSTRAINT "_ChoiceToRound_B_fkey" FOREIGN KEY ("B") REFERENCES "binquiz"."Round"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binquiz"."_QuizToRound" ADD CONSTRAINT "_QuizToRound_A_fkey" FOREIGN KEY ("A") REFERENCES "binquiz"."Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binquiz"."_QuizToRound" ADD CONSTRAINT "_QuizToRound_B_fkey" FOREIGN KEY ("B") REFERENCES "binquiz"."Round"("id") ON DELETE CASCADE ON UPDATE CASCADE;
