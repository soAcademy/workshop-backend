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

-- AddForeignKey
ALTER TABLE "BinKitchenOrderItem" ADD CONSTRAINT "BinKitchenOrderItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "BinKitchenMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BinKitchenOrderItem" ADD CONSTRAINT "BinKitchenOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "BinKitchenOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
