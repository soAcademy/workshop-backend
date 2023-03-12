/*
  Warnings:

  - You are about to drop the column `answerID` on the `TriviaQuestion` table. All the data in the column will be lost.
  - Added the required column `answerId` to the `TriviaQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TriviaQuestion" DROP COLUMN "answerID",
ADD COLUMN     "answerId" INTEGER NOT NULL;
