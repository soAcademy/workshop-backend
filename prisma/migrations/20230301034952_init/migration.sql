-- CreateTable
CREATE TABLE "BinKichenMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "binKichenCategoryId" INTEGER,

    CONSTRAINT "BinKichenMenu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BinKichenMenu" ADD CONSTRAINT "BinKichenMenu_binKichenCategoryId_fkey" FOREIGN KEY ("binKichenCategoryId") REFERENCES "BinKichenCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
