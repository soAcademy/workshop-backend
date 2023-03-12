/*
  Warnings:

  - A unique constraint covering the columns `[quizId]` on the table `TriviaRoundQuestion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[choiceId]` on the table `TriviaRoundQuestion` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TriviaRoundQuestion_quizId_key" ON "TriviaRoundQuestion"("quizId");

-- CreateIndex
CREATE UNIQUE INDEX "TriviaRoundQuestion_choiceId_key" ON "TriviaRoundQuestion"("choiceId");
