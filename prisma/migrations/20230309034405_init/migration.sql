/*
  Warnings:

  - Added the required column `triviaCategoryId` to the `TriviaQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TriviaQuiz" ADD COLUMN     "triviaCategoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "TriviaCategory" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "TriviaCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TriviaQuiz" ADD CONSTRAINT "TriviaQuiz_triviaCategoryId_fkey" FOREIGN KEY ("triviaCategoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
