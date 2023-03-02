/*
  Warnings:

  - You are about to drop the column `table_id` on the `bills` table. All the data in the column will be lost.
  - Added the required column `bill_price` to the `bills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bills" DROP COLUMN "table_id",
ADD COLUMN     "bill_price" DOUBLE PRECISION NOT NULL;
