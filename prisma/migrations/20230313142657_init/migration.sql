/*
  Warnings:

  - A unique constraint covering the columns `[topic]` on the table `Hashtag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hashtag_topic_key" ON "Hashtag"("topic");
