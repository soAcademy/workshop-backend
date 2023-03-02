/*
  Warnings:

  - You are about to drop the column `bill_id` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "bill_id",
ADD COLUMN     "billsId" INTEGER;

-- CreateTable
CREATE TABLE "bills" (
    "id" SERIAL NOT NULL,
    "table_id" INTEGER NOT NULL,

    CONSTRAINT "bills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_billsId_fkey" FOREIGN KEY ("billsId") REFERENCES "bills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
