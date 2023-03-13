/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `User2` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User2_name_key" ON "User2"("name");
