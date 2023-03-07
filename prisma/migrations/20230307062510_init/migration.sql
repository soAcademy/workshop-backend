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
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "answerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriviaQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaQuizChoice" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quizId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriviaQuizChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRound" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriviaRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRoundQuiz" (
    "id" SERIAL NOT NULL,
    "roundId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "playerChoose" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriviaRoundQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRoundQuizChoice" (
    "id" SERIAL NOT NULL,
    "roundQuizId" INTEGER NOT NULL,
    "quizChoiceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriviaRoundQuizChoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TriviaQuiz" ADD CONSTRAINT "TriviaQuiz_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaQuizChoice" ADD CONSTRAINT "TriviaQuizChoice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuiz" ADD CONSTRAINT "TriviaRoundQuiz_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "TriviaRound"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuiz" ADD CONSTRAINT "TriviaRoundQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuizChoice" ADD CONSTRAINT "TriviaRoundQuizChoice_roundQuizId_fkey" FOREIGN KEY ("roundQuizId") REFERENCES "TriviaRoundQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuizChoice" ADD CONSTRAINT "TriviaRoundQuizChoice_quizChoiceId_fkey" FOREIGN KEY ("quizChoiceId") REFERENCES "TriviaQuizChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
