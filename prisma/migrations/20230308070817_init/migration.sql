/*
  Warnings:

  - You are about to drop the column `value` on the `History` table. All the data in the column will be lost.
  - Added the required column `price` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeUsage` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "History" DROP COLUMN "value";

-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "timeUsage" DOUBLE PRECISION NOT NULL;
