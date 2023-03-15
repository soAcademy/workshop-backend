/*
  Warnings:

  - A unique constraint covering the columns `[postId,hashTagName]` on the table `HashTagOnPost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HashTagOnPost_postId_hashTagName_key" ON "HashTagOnPost"("postId", "hashTagName");
