-- AlterTable
ALTER TABLE "BinKitchenCategory" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "BinKitchenMenu" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "BinKitchenOrder" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "BinKitchenOrderItem" ALTER COLUMN "updatedAt" DROP DEFAULT;
