/*
  Warnings:

  - You are about to drop the `BinKichenCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BinKichenMenu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BinKichenOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BinKichenOrderItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BinKichenMenu" DROP CONSTRAINT "BinKichenMenu_categoryName_fkey";

-- DropForeignKey
ALTER TABLE "BinKichenOrderItem" DROP CONSTRAINT "BinKichenOrderItem_menuId_fkey";

-- DropForeignKey
ALTER TABLE "BinKichenOrderItem" DROP CONSTRAINT "BinKichenOrderItem_orderId_fkey";

-- DropTable
DROP TABLE "BinKichenCategory";

-- DropTable
DROP TABLE "BinKichenMenu";

-- DropTable
DROP TABLE "BinKichenOrder";

-- DropTable
DROP TABLE "BinKichenOrderItem";

-- CreateTable
CREATE TABLE "BinKitchenCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BinKitchenCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BinKitchenMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BinKitchenMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BinKitchenOrder" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "tableId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BinKitchenOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BinKitchenOrderItem" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "orderId" INTEGER,
    "quantity" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BinKitchenOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BinKitchenCategory_name_key" ON "BinKitchenCategory"("name");

-- AddForeignKey
ALTER TABLE "BinKitchenMenu" ADD CONSTRAINT "BinKitchenMenu_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "BinKitchenCategory"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BinKitchenOrderItem" ADD CONSTRAINT "BinKitchenOrderItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "BinKitchenMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BinKitchenOrderItem" ADD CONSTRAINT "BinKitchenOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "BinKitchenOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
