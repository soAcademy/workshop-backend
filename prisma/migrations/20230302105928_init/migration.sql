/*
  Warnings:

  - The primary key for the `bills` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_billId_fkey";

-- AlterTable
ALTER TABLE "bills" DROP CONSTRAINT "bills_pkey",
ALTER COLUMN "id" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "bills_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "billId" SET DATA TYPE DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
