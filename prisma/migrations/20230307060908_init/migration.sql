/*
  Warnings:

  - Changed the type of `quizResult` on the `TriviaRoundQuestion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `categoryId` to the `TriviaRoundScore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalResult` to the `TriviaRoundScore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TriviaRoundQuestion" DROP COLUMN "quizResult",
ADD COLUMN     "quizResult" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "TriviaRoundScore" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "totalResult" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TriviaRoundScore" ADD CONSTRAINT "TriviaRoundScore_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
