import React, {useEffect, useState, Fragment, useCallback} from 'react';
import {
  Body,
  Text,
  Error,
  Loader,
  Correct,
  NorLoad,
  GameBtn,
  GameHeader,
  JobModal,
} from '../../../components';
import {style} from './style';
import Video from 'react-native-video';
import {ScrollView, View, ActivityIndicator} from 'react-native'; // Import ActivityIndicator
import {Image_Url} from '../../../utils/Urls';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import {getGameApi} from '../../../redux/actions/UserAction';
import {handleAnswer, shuffleArray, transformGameQuestions} from './gameFun';

const GameScreen = ({navigation, route}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const {goBack} = navigation;
  const get_game = useSelector(state => state.get_game);

  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [videoKey, setVideoKey] = useState(0);
  const [isBuffering, setIsBuffering] = useState(true); // Start with buffering as true to show indicator initially
  const [gameQuestions, setGameQuestions] = useState([]);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestionsCompleted, setAllQuestionsCompleted] = useState(false);
  const [delayProgress, setDelayProgress] = useState(0);

  const currentQuestion = gameQuestions[currentQuestionIndex];
  const progress = duration ? currentTime / duration : 0;

  useEffect(() => {
    setIsPaused(false);
  }, []);

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

    setShowQuestion(false);
    setDelayProgress(0); // Reset delay progress for the next question
  };

  const handleJob = () => {
    setCompleted(false);
    setTimeout(() => {
      goBack();
    }, 100);
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

  useEffect(() => {
    if (currentQuestion && !isBuffering && !isPaused) {
      const delay = currentQuestion.delay * 1000;

      const interval = setInterval(() => {
        setDelayProgress(prevProgress => {
          if (prevProgress + 1000 >= delay) {
            clearInterval(interval);
            setShowQuestion(true);
            return delay;
          }
          return prevProgress + 1000;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentQuestionIndex, currentQuestion, videoKey, isBuffering, isPaused]);

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
        progress={progress}
      />

      {/* Show ActivityIndicator when buffering or paused */}
      {(isBuffering || (isPaused && !showQuestion)) && (
        <NorLoad style={GlobalStyle.mtop} />
      )}

      {get_game?.game_header_data?.[0]?.file?.[0]?.src ? (
        <Video
          autoPlay
          key={videoKey}
          controls={false}
          playWhenInactive={false}
          paused={isPaused}
          resizeMode="cover"
          playInBackground={false}
          style={style.videoPlayer}
          source={{
            uri: get_game.game_header_data[0].file[0].src,
            type: 'mp4',
          }}
          onBuffer={({isBuffering}) => setIsBuffering(isBuffering)}
          onLoad={data => {
            setIsBuffering(false);
            setDuration(data.duration);
          }}
          onProgress={({currentTime, playableDuration, seekableDuration}) =>
            setCurrentTime(currentTime)
          }
          onEnd={() => {
            if (allQuestionsCompleted) {
              setCompleted(true);
            }
          }}
        />
      ) : (
        <Text style={style.errorText} center title={'Video not available'} />
      )}

      <ScrollView style={GlobalStyle.Padding}>
        {currentQuestion && showQuestion && (
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
                shuffleArray([...currentQuestion.answers]).map((answer, i) => (
                  <GameBtn
                    i={i}
                    key={i}
                    title={answer.title}
                    onPress={() => handleAnswerSelection(answer)}
                  />
                ))
              )}
            </View>
          </Fragment>
        )}
      </ScrollView>
      <Loader visible={load} />
      <Correct visible={correct} />
      <Error visible={error} game />
      <JobModal visible={completed} onPress={handleJob} />
    </Body>
  );
};

export default GameScreen;
