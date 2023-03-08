-- CreateTable
CREATE TABLE "TriviaCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TriviaCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaQuestion" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TriviaQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaChoice" (
    "id" SERIAL NOT NULL,
    "quizId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TriviaChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRoundQuestion" (
    "id" SERIAL NOT NULL,
    "roundID" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "userChoice" INTEGER NOT NULL,
    "quizResult" INTEGER NOT NULL,

    CONSTRAINT "TriviaRoundQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRoundScore" (
    "id" SERIAL NOT NULL,
    "roundId" INTEGER NOT NULL,

    CONSTRAINT "TriviaRoundScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TriviaCategory_name_key" ON "TriviaCategory"("name");

-- AddForeignKey
ALTER TABLE "TriviaQuestion" ADD CONSTRAINT "TriviaQuestion_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaChoice" ADD CONSTRAINT "TriviaChoice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundScore" ADD CONSTRAINT "TriviaRoundScore_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "TriviaRoundQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
