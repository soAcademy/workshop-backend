-- CreateTable
CREATE TABLE "BinKichenOrderItem" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "orderId" INTEGER,
    "quantity" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BinKichenOrderItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BinKichenOrderItem" ADD CONSTRAINT "BinKichenOrderItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "BinKichenMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BinKichenOrderItem" ADD CONSTRAINT "BinKichenOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "BinKichenOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
