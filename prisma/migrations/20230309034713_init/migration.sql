/*
  Warnings:

  - You are about to drop the column `answerId` on the `TriviaQuiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TriviaQuiz" DROP COLUMN "answerId";

-- CreateTable
CREATE TABLE "_quizanswer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_quizanswer_AB_unique" ON "_quizanswer"("A", "B");

-- CreateIndex
CREATE INDEX "_quizanswer_B_index" ON "_quizanswer"("B");

-- AddForeignKey
ALTER TABLE "_quizanswer" ADD CONSTRAINT "_quizanswer_A_fkey" FOREIGN KEY ("A") REFERENCES "TriviaChoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_quizanswer" ADD CONSTRAINT "_quizanswer_B_fkey" FOREIGN KEY ("B") REFERENCES "TriviaQuiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;
