/*
  Warnings:

  - A unique constraint covering the columns `[hashtag]` on the table `FBHashtag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FBHashtag_hashtag_key" ON "FBHashtag"("hashtag");
