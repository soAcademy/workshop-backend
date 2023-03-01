-- AlterTable
ALTER TABLE "KorKitchenCategory" ALTER COLUMN "updateAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "KorKitchenMenu" ALTER COLUMN "updateAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "KorKitchenOrder" ALTER COLUMN "updateAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "KorKitchenOrderItem" ALTER COLUMN "updatedAt" DROP DEFAULT;
