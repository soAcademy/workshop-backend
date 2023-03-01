/*
  Warnings:

  - Added the required column `korKitchenMenuId` to the `KorKitchenCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KorKitchenCategory" ADD COLUMN     "korKitchenMenuId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "KorKitchenMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryName" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KorKitchenMenu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KorKitchenMenu" ADD CONSTRAINT "KorKitchenMenu_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "KorKitchenCategory"("name") ON DELETE SET NULL ON UPDATE CASCADE;
