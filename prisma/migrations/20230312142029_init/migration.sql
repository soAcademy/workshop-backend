/*
  Warnings:

  - Added the required column `join` to the `TwitterUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TwitterUser" ADD COLUMN     "join" TIMESTAMP(3) NOT NULL;
