/*
  Warnings:

  - You are about to drop the column `answer` on the `Question` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[answerChoiceId]` on the table `Question` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `answerChoiceId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "answer",
ADD COLUMN     "answerChoiceId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Question_answerChoiceId_key" ON "Question"("answerChoiceId");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_answerChoiceId_fkey" FOREIGN KEY ("answerChoiceId") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
