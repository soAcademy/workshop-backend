/*
  Warnings:

  - You are about to drop the column `table_id` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "table_id",
ADD COLUMN     "billId" INTEGER;

-- CreateTable
CREATE TABLE "bill" (
    "id" SERIAL NOT NULL,
    "table_id" INTEGER NOT NULL,

    CONSTRAINT "bill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bill"("id") ON DELETE SET NULL ON UPDATE CASCADE;
