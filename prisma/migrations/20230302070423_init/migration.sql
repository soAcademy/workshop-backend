/*
  Warnings:

  - You are about to drop the column `billsId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `bills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `table` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `table_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bills" DROP CONSTRAINT "bills_table_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_billsId_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "billsId",
ADD COLUMN     "table_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "bills";

-- DropTable
DROP TABLE "table";

-- CreateTable
CREATE TABLE "bill" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "bill_pkey" PRIMARY KEY ("id")
);
