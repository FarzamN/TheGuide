export const handleAnswer = (
  ans,
  setError,
  setCorrect,
  questionIndex,
  totalQuestions,
  setQuestionIndex,
  setAllQuestionsCompleted,
  setVideoKey,
  setShowQuestion, // Add setShowQuestion to reset question display
) => {
  if (ans.isCorrect) {
    setCorrect(true);
    setTimeout(() => {
      setCorrect(false);
      if (questionIndex < totalQuestions - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setAllQuestionsCompleted(true); // Indicate completion after the last question
      }
    }, 2000);
  } else {
    setError(true);
    setTimeout(() => {
      setError(false);
      setVideoKey(prevKey => prevKey + 1); // Update videoKey to restart video on wrong answer
      setShowQuestion(true); // Show question again after video restart
    }, 2000);
  }
};

export const transformGameQuestions = gameQuestions => {
  return Object.keys(gameQuestions)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((key, index) => {
      const questionData = gameQuestions[key];
      const isTrueFalse =
        questionData.question.question_type === 'true or false';

      const correctAnswer =
        questionData.answers[3]?.correct_answer?.toLowerCase();

      // Capture time delay if present
      const delayTime =
        Number(
          questionData.answers.find(answer => answer.label === 'time')
            ?.question,
        ) + 1 || 0;
      return {
        order: index + 1,
        question_text: questionData.question.question_text,
        question_type: questionData.question.question_type,
        delay: delayTime, // Adding delay time for each question
        answers: isTrueFalse
          ? [
              {title: 'True', isCorrect: correctAnswer === 'true'},
              {title: 'False', isCorrect: correctAnswer === 'false'},
            ]
          : questionData.answers
              .filter(
                answer => !['question', 'popup', 'time'].includes(answer.label),
              )
              .map(answer => ({
                title: answer.question || answer.label,
                type: answer.type,
                points: answer.points,
                difficulty_level: answer.difficulty_level,
                isCorrect:
                  answer.label === 'correct' ||
                  answer.correct_answer === 'True',
              })),
      };
    });
};

export const shuffleArray = array => {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};
