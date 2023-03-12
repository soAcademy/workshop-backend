-- CreateTable
CREATE TABLE "RoundQuestionChoiceDetail" (
    "id" SERIAL NOT NULL,
    "roundQuizId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "choiceId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoundQuestionChoiceDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoundQuestionChoiceDetail" ADD CONSTRAINT "RoundQuestionChoiceDetail_roundQuizId_fkey" FOREIGN KEY ("roundQuizId") REFERENCES "RoundQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuestionChoiceDetail" ADD CONSTRAINT "RoundQuestionChoiceDetail_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuestionChoiceDetail" ADD CONSTRAINT "RoundQuestionChoiceDetail_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
