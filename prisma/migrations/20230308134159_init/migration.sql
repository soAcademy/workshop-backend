-- CreateTable
CREATE TABLE "Dew" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "kadId" INTEGER NOT NULL,

    CONSTRAINT "Dew_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kad" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Kad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dew_kadId_key" ON "Dew"("kadId");

-- AddForeignKey
ALTER TABLE "Dew" ADD CONSTRAINT "Dew_kadId_fkey" FOREIGN KEY ("kadId") REFERENCES "Kad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
