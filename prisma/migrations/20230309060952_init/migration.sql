/*
  Warnings:

  - A unique constraint covering the columns `[correctChoiceId]` on the table `Quiz` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Quiz_correctChoiceId_key" ON "binquiz"."Quiz"("correctChoiceId");
