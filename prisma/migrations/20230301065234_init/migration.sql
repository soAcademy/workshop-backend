/*
  Warnings:

  - You are about to drop the column `totalPrice` on the `orders` table. All the data in the column will be lost.
  - Made the column `categoryId` on table `menu` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "menu" DROP CONSTRAINT "menu_categoryId_fkey";

-- AlterTable
ALTER TABLE "menu" ALTER COLUMN "categoryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "orderItem" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "orderitem_id_seq";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "totalPrice";

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
