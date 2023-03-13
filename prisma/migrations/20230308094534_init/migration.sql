-- CreateTable
CREATE TABLE "BookEx" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "BookEx_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorEx" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AuthorEx_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookExOnAuthorEx" (
    "bookExampleId" INTEGER NOT NULL,
    "authorExampleId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BookExOnAuthorEx_bookExampleId_key" ON "BookExOnAuthorEx"("bookExampleId");

-- AddForeignKey
ALTER TABLE "BookExOnAuthorEx" ADD CONSTRAINT "BookExOnAuthorEx_bookExampleId_fkey" FOREIGN KEY ("bookExampleId") REFERENCES "BookEx"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookExOnAuthorEx" ADD CONSTRAINT "BookExOnAuthorEx_authorExampleId_fkey" FOREIGN KEY ("authorExampleId") REFERENCES "AuthorEx"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
