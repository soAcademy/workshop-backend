/*
  Warnings:

  - You are about to drop the `bill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_billId_fkey";

-- DropTable
DROP TABLE "bill";

-- CreateTable
CREATE TABLE "bills" (
    "id" SERIAL NOT NULL,
    "table_id" INTEGER NOT NULL,

    CONSTRAINT "bills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
