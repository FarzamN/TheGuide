export const handleAnswer = (
  ans,
  setError,
  seekVideo,
  setCorrect,
  showQuestion,
  questionIndex,
  totalQuestions,
  setQuestionIndex,
  setAllQuestionsCompleted,
) => {
  if (ans.isCorrect) {
    setCorrect(true); // Show "Correct" feedback
    showQuestion(false);
    setTimeout(() => {
      setCorrect(false);

      // Move to the next question or complete the game
      if (questionIndex < totalQuestions - 1) {
        setQuestionIndex(questionIndex + 1); // Go to the next question
        showQuestion(false); // Hide question after transitioning
      } else {
        setAllQuestionsCompleted(true); // Mark the game as completed
        showQuestion(false); // Hide question after transitioning
      }
    }, 2000);
  } else {
    // For incorrect answer, allow retry but prevent repeated display
    setError(true);
    showQuestion(false); // Hide question after transitioning
    setTimeout(() => {
      setError(false);
      seekVideo(); // Rewind video to the question's previous time
    }, 2000);
  }
};

export const transformGameQuestions = (gameQuestions, id) => {
  const questionIds = []; // Initialize an array to collect question IDs

  const transformedQuestions = Object.keys(gameQuestions)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((key, index) => {
      const questionData = gameQuestions[key];
      if (!questionData.question || !questionData.question.question_text) {
        return null;
      }

      const isTrueFalse =
        questionData.question.question_type === 'true or false';

      const correctAnswer =
        questionData.answers[3]?.correct_answer?.toLowerCase();
      const delayTime =
        questionData.answers.find(answer => answer.label === 'time')
          ?.question || 0;

      const questionId = questionData.question.id;

      questionIds.push(questionId); // Add the questionId to the array

      return {
        order: index + 1,
        question_text: questionData.question.question_text,
        question_type: questionData.question.question_type,
        delay: delayTime, // Delay in seconds
        startTime: delayTime, // Assign delay time as start time (or adjust as needed)
        answers: isTrueFalse
          ? [
              {
                title: 'True',
                isCorrect: correctAnswer === 'true',
                id: questionId,
              },
              {title: 'False', isCorrect: correctAnswer === 'false'},
            ]
          : questionData.answers
              .filter(
                answer =>
                  !['question', 'popup', 'time'].includes(answer.label) &&
                  answer.question !== null,
              )
              .map(answer => ({
                id: questionId,
                title: answer.question,
                type: answer.type,
                points: answer.points,
                difficulty_level: answer.difficulty_level,
                isCorrect:
                  answer.label === 'correct' ||
                  answer.correct_answer === 'True',
              })),
      };
    })
    .filter(Boolean);

  id(questionIds); // Pass the collected IDs to the `id` parameter

  return transformedQuestions;
};

export const shuffleArray = array => {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};
