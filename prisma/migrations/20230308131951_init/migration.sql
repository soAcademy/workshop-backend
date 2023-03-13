-- CreateTable
CREATE TABLE "SeriesTv" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SeriesTv_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Actors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ActorsToSeriesTv" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ActorsToSeriesTv_AB_unique" ON "_ActorsToSeriesTv"("A", "B");

-- CreateIndex
CREATE INDEX "_ActorsToSeriesTv_B_index" ON "_ActorsToSeriesTv"("B");

-- AddForeignKey
ALTER TABLE "_ActorsToSeriesTv" ADD CONSTRAINT "_ActorsToSeriesTv_A_fkey" FOREIGN KEY ("A") REFERENCES "Actors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorsToSeriesTv" ADD CONSTRAINT "_ActorsToSeriesTv_B_fkey" FOREIGN KEY ("B") REFERENCES "SeriesTv"("id") ON DELETE CASCADE ON UPDATE CASCADE;
