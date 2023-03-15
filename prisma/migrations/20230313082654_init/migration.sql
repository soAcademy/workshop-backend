/*
  Warnings:

  - Added the required column `message` to the `TwitterComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TwitterComment" ADD COLUMN     "image" TEXT,
ADD COLUMN     "message" TEXT NOT NULL;
