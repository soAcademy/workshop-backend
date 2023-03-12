/*
  Warnings:

  - You are about to drop the column `user` on the `TriviaRound` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TriviaRound" DROP COLUMN "user";

-- CreateTable
CREATE TABLE "TriviaUser" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,

    CONSTRAINT "TriviaUser_pkey" PRIMARY KEY ("id")
);
