/*
  Warnings:

  - A unique constraint covering the columns `[hashtag]` on the table `TwitterHashtag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TwitterHashtag_hashtag_key" ON "TwitterHashtag"("hashtag");
