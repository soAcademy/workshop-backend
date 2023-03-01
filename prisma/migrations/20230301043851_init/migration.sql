-- CreateTable
CREATE TABLE "BinKitchenCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uodatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BinKitchenMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BinKitchenOrder" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "tableId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
