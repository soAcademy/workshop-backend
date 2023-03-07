-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "binquiz";

-- CreateTable
CREATE TABLE "binquiz"."Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "binquiz"."Choice" (
    "id" SERIAL NOT NULL,
    "answerText" TEXT NOT NULL,
    "quizId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "binquiz"."Quiz" (
    "id" SERIAL NOT NULL,
    "questionText" TEXT NOT NULL,
    "quizCategoryId" INTEGER NOT NULL,
    "choiceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "binquiz"."Choice" ADD CONSTRAINT "Choice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "binquiz"."Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binquiz"."Quiz" ADD CONSTRAINT "Quiz_quizCategoryId_fkey" FOREIGN KEY ("quizCategoryId") REFERENCES "binquiz"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binquiz"."Quiz" ADD CONSTRAINT "Quiz_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "binquiz"."Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
