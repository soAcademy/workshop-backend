-- CreateTable
CREATE TABLE "TriviaQuiz" (
    "id" SERIAL NOT NULL,
    "quiz" TEXT NOT NULL,
    "answerId" INTEGER NOT NULL,

    CONSTRAINT "TriviaQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaChoice" (
    "id" SERIAL NOT NULL,
    "choice" TEXT NOT NULL,
    "triviaQuizId" INTEGER,

    CONSTRAINT "TriviaChoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TriviaChoice" ADD CONSTRAINT "TriviaChoice_triviaQuizId_fkey" FOREIGN KEY ("triviaQuizId") REFERENCES "TriviaQuiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;
