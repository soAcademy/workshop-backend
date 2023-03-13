/*
  Warnings:

  - A unique constraint covering the columns `[quizeAnswerId]` on the table `QuizeQuestion` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "QuizeQuestion" ADD COLUMN     "quizeAnswerId" INTEGER;

-- CreateTable
CREATE TABLE "QuizeChoice" (
    "id" SERIAL NOT NULL,
    "choice" TEXT NOT NULL,
    "questionId" INTEGER,
    "quizeAnswerId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizeChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizeAnswer" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizeAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuizeChoice_quizeAnswerId_key" ON "QuizeChoice"("quizeAnswerId");

-- CreateIndex
CREATE UNIQUE INDEX "QuizeQuestion_quizeAnswerId_key" ON "QuizeQuestion"("quizeAnswerId");

-- AddForeignKey
ALTER TABLE "QuizeQuestion" ADD CONSTRAINT "QuizeQuestion_quizeAnswerId_fkey" FOREIGN KEY ("quizeAnswerId") REFERENCES "QuizeAnswer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizeChoice" ADD CONSTRAINT "QuizeChoice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuizeQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizeChoice" ADD CONSTRAINT "QuizeChoice_quizeAnswerId_fkey" FOREIGN KEY ("quizeAnswerId") REFERENCES "QuizeAnswer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
