import React, {useEffect, useState, Fragment, useCallback} from 'react';
import {
  Body,
  Text,
  Error,
  Loader,
  Correct,
  GameBtn,
  GameHeader,
} from '../../../components';
import Video from 'react-native-video';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getGameApi} from '../../../redux/actions/UserAction';
import {style} from './style';
import {Image_Url} from '../../../utils/Urls';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {handleAnswer, shuffleArray, transformGameQuestions} from './gameFun';
import {useFocusEffect} from '@react-navigation/native';

const GameScreen = ({navigation, route}) => {
  const {item} = route.params;
  const dispatch = useDispatch();

  const {goBack} = navigation;
  const get_game = useSelector(state => state.get_game);

  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false); // Track buffering status
  const [gameQuestions, setGameQuestions] = useState([]);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestionsCompleted, setAllQuestionsCompleted] = useState(false);

  const currentQuestion = gameQuestions[currentQuestionIndex];

  // Set video to play initially
  useEffect(() => {
    setIsPaused(false);
  }, []);

  // Control question display and video pausing
  useEffect(() => {
    if (showQuestion) {
      setIsPaused(true); // Pause video when showing a question
    } else {
      setTimeout(() => setIsPaused(false), 300); // Resume after a delay
    }
  }, [showQuestion]);

  const handleAnswerSelection = answer => {
    handleAnswer(
      answer,
      setError,
      setCorrect,
      currentQuestionIndex,
      gameQuestions.length,
      setCurrentQuestionIndex,
      setAllQuestionsCompleted,
      setVideoKey,
      setShowQuestion,
    );

    // Hide question temporarily after answering
    setShowQuestion(false);
  };

  useEffect(() => {
    dispatch(getGameApi(setLoad, item.id));
  }, []);

  useEffect(() => {
    if (get_game?.game_question) {
      const transformedQuestions = transformGameQuestions(
        get_game.game_question,
      );
      setGameQuestions(transformedQuestions);
    }
  }, [get_game]);

  // Start question display delay only after video has buffered and loaded
  useEffect(() => {
    if (currentQuestion && !isBuffering) {
      setShowQuestion(false); // Hide question initially
      const delay = currentQuestion.delay * 1000;
      const timer = setTimeout(() => setShowQuestion(true), delay);
      console.log('delay,timer', delay, timer);
      return () => clearTimeout(timer); // Clear timer on cleanup
    }
  }, [currentQuestionIndex, currentQuestion, videoKey, isBuffering]);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );

  return (
    <Body>
      <GameHeader
        onClose={goBack}
        title={item.course_name}
        subTitle={item.game_title}
        progress={(currentQuestionIndex + 1) / gameQuestions.length}
      />
      {get_game?.game_header_data?.[0]?.file?.[0]?.src ? (
        <Video
          key={videoKey}
          source={{uri: get_game.game_header_data[0].file[0].src}}
          style={style.videoPlayer}
          poster={`${Image_Url}${get_game.image_app || ''}`}
          controls={false}
          resizeMode="cover"
          autoPlay
          playInBackground={false}
          paused={isPaused}
          onBuffer={({isBuffering}) => setIsBuffering(isBuffering)} // Track buffering state
          onLoad={() => {
            setIsBuffering(false); // Video has loaded, no buffering
          }}
          onEnd={() => {
            if (allQuestionsCompleted) {
              goBack(); // Allow manual back only after video finishes if all questions answered
            }
          }}
        />
      ) : (
        <Text style={style.errorText} center title={'Video not available'} />
      )}

      <ScrollView style={GlobalStyle.Padding}>
        {currentQuestion &&
          showQuestion && ( // Show question only when delay has passed
            <Fragment key={currentQuestionIndex}>
              <Text
                style={style.GameTitle}
                title={currentQuestion.question_text}
              />
              <View style={GlobalStyle.mapContaner}>
                {currentQuestion.question_type === 'true or false' ? (
                  <>
                    {currentQuestion.answers.map((ans, i) => (
                      <GameBtn
                        i={i}
                        key={i}
                        title={ans.title}
                        onPress={() => handleAnswerSelection(ans)}
                      />
                    ))}
                  </>
                ) : (
                  shuffleArray([...currentQuestion.answers]).map(
                    (answer, i) => (
                      <GameBtn
                        i={i}
                        key={i}
                        title={answer.title}
                        onPress={() => handleAnswerSelection(answer)}
                      />
                    ),
                  )
                )}
              </View>
            </Fragment>
          )}
      </ScrollView>
      <Loader visible={load} />
      <Correct visible={correct} />
      <Error visible={error} />
    </Body>
  );
};

export default GameScreen;
