/*
  Warnings:

  - You are about to drop the `WashUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WashUser" DROP CONSTRAINT "WashUser_washHistoryId_fkey";

-- DropTable
DROP TABLE "WashUser";

-- CreateTable
CREATE TABLE "washUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "washHistoryId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "washUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "washUser" ADD CONSTRAINT "washUser_washHistoryId_fkey" FOREIGN KEY ("washHistoryId") REFERENCES "WashHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
