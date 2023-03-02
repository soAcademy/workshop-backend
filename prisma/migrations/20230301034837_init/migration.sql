-- CreateTable
CREATE TABLE "DewKitchenMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryName" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dewKitchenCategoryId" INTEGER,

    CONSTRAINT "DewKitchenMenu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DewKitchenMenu" ADD CONSTRAINT "DewKitchenMenu_dewKitchenCategoryId_fkey" FOREIGN KEY ("dewKitchenCategoryId") REFERENCES "DewKitchenCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
