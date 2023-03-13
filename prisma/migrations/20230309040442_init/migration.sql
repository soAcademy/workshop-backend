-- CreateTable
CREATE TABLE "QuizeCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizeCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizeQuestion" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "quizeCategoryId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizeQuestion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuizeQuestion" ADD CONSTRAINT "QuizeQuestion_quizeCategoryId_fkey" FOREIGN KEY ("quizeCategoryId") REFERENCES "QuizeCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
