/*
  Warnings:

  - A unique constraint covering the columns `[category]` on the table `TriviaCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TriviaCategory_category_key" ON "TriviaCategory"("category");
