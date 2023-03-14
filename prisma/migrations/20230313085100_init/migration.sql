/*
  Warnings:

  - A unique constraint covering the columns `[message]` on the table `TwitterHashTag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TwitterHashTag_message_key" ON "TwitterHashTag"("message");
