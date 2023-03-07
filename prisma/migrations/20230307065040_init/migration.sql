-- CreateTable
CREATE TABLE "TriviaCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriviaCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaQuiz" (
    "id" SERIAL NOT NULL,
    "quiz" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "answerId" INTEGER NOT NULL,

    CONSTRAINT "TriviaQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaChoice" (
    "id" SERIAL NOT NULL,
    "choice" TEXT NOT NULL,
    "quizId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriviaChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRound" (
    "id" SERIAL NOT NULL,
    "round" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriviaRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRoundQuiz" (
    "id" SERIAL NOT NULL,
    "roundId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "userChoiceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriviaRoundQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TriviaCategory_name_key" ON "TriviaCategory"("name");

-- AddForeignKey
ALTER TABLE "TriviaQuiz" ADD CONSTRAINT "TriviaQuiz_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "TriviaCategory"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaChoice" ADD CONSTRAINT "TriviaChoice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuiz" ADD CONSTRAINT "TriviaRoundQuiz_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "TriviaRound"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuiz" ADD CONSTRAINT "TriviaRoundQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuiz" ADD CONSTRAINT "TriviaRoundQuiz_userChoiceId_fkey" FOREIGN KEY ("userChoiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
