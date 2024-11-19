import {
  Body,
  Text,
  Error,
  Loader,
  Correct,
  NorLoad,
  GameBtn,
  JobModal,
  GameHeader,
  DownloadProgress,
} from '../../../components';
import {getGameApi, getGameIdAPI} from '../../../redux/actions/UserAction';

import {style} from './style';
import Video from 'react-native-video';
import Toast from 'react-native-simple-toast';
import {Image_Url} from '../../../utils/Urls';
import {ScrollView, View} from 'react-native';
import {useFileDownloader} from '../../../hooks';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import {handleAnswer, shuffleArray, transformGameQuestions} from './gameFun';
import React, {useRef, useEffect, useState, Fragment, useCallback} from 'react';

const GameScreen = ({navigation, route}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const {goBack, getParent} = navigation;
  const get_game = useSelector(state => state.get_game);
  const {downloadFile, downloadProgress, isDownloading, deleteFile} =
    useFileDownloader();

  const videoRef = useRef(null);
  const [getGameID, setGetGameID] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [duration, setDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const [isBuffering, setIsBuffering] = useState(true);
  const [gameQuestions, setGameQuestions] = useState([]);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestionsCompleted, setAllQuestionsCompleted] = useState(false);
  const [previousQuestionTime, setPreviousQuestionTime] = useState(0); // New state

  const currentQuestion = gameQuestions[currentQuestionIndex];
  const progress = duration ? currentTime / duration : 0;
  const [videoPath, setVideoPath] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const fileUrl = get_game?.game_header_data?.[0]?.file?.[0]?.src;

  const handleDownload = async () => {
    const filename = 'video.mp4';
    try {
      const path = await downloadFile(fileUrl, filename);
      setVideoPath(path);
    } catch (error) {
      Toast.show('Error downloading file: Please restart The Game');
      console.error('Error downloading file:', error);
    }
  };

  useEffect(() => {
    if (fileUrl) {
      handleDownload();
      setIsPaused(false);
    }
  }, [fileUrl]);

  useEffect(() => {
    if (showQuestion && currentQuestion) {
      setIsPaused(true);
    } else {
      setTimeout(() => setIsPaused(false), 300);
    }
  }, [showQuestion]);

  const seekVideo = () => {
    if (videoRef.current && currentQuestion) {
      setShowQuestion(false);
      const seekTime = Math.max(
        0,
        currentTime - (currentQuestion.startTime - previousQuestionTime),
      );
      console.log('previousQuestionTime', previousQuestionTime);
      setCurrentTime(seekTime);

      videoRef.current.seek(seekTime);
    }
  };

  const handleAnswerSelection = answer => {
    setShowQuestion(false);
    handleAnswer(
      item,
      answer,
      dispatch,
      setError,
      seekVideo,
      setCorrect,
      setShowQuestion,
      currentQuestionIndex,
      gameQuestions.length,
      setCurrentQuestionIndex,
      setAllQuestionsCompleted,
    );
  };

  const handleJob = () => {
    deleteFile();
    setCompleted(false);
    setTimeout(() => {
      goBack();
    }, 100);
  };

  useEffect(() => {
    dispatch(getGameApi(setLoad, item.id));
    getGameIdAPI(item.id, setGetGameID, setLoad);
  }, []);

  useEffect(() => {
    if (!isBuffering && !isPaused && currentQuestion) {
      if (
        Math.ceil(currentTime) === Math.ceil(currentQuestion.startTime) &&
        !answeredQuestions[currentQuestionIndex] // Show only if not answered
      ) {
        setShowQuestion(true);
      } else if (
        Math.ceil(currentTime) > Math.ceil(currentQuestion.startTime)
      ) {
        setShowQuestion(false);
      }
    }
  }, [currentTime, currentQuestion, isBuffering, isPaused, answeredQuestions]);

  useEffect(() => {
    if (get_game?.game_question) {
      const transformedQuestions = transformGameQuestions(
        get_game.game_question,
      );
      setGameQuestions(transformedQuestions);
      // Initialize all questions as unanswered (false)
      setAnsweredQuestions(new Array(transformedQuestions.length).fill(false));
    }
  }, [get_game]);

  // Update `previousQuestionTime` when the question index changes
  useEffect(() => {
    if (currentQuestionIndex > 0) {
      // Save the startTime of the current question as the previous question's time
      setPreviousQuestionTime(
        gameQuestions[currentQuestionIndex - 1]?.startTime || 0,
      );
    } else {
      // For the first question, there's no previous time
      setPreviousQuestionTime(0);
    }
  }, [currentQuestionIndex, gameQuestions]);

  useFocusEffect(
    useCallback(() => {
      getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );

  return (
    <Body>
      <GameHeader
        onClose={() => {
          goBack();
          deleteFile();
        }}
        progress={progress}
        title={item.course_name}
        subTitle={item.game_title}
      />
      {[
        {n: 'id', c: item.id},
        {n: 'currentTime', c: Math.ceil(currentTime)},
        {n: 'quesion length', c: gameQuestions.length},
        {n: 'next Question Time', c: currentQuestion?.startTime},
        {n: 'prev Question Time', c: previousQuestionTime},
      ].map(({n, c}) => (
        <Text key={n} center title={n + ' ' + c} />
      ))}
      <View>
        {isBuffering && <NorLoad />}
        {fileUrl && (
          <Video
            ref={videoRef}
            controls={false}
            paused={isPaused}
            resizeMode="cover"
            style={style.videoPlayer}
            poster={Image_Url + get_game.image_app}
            source={{
              uri: videoPath,
              type: 'mp4',
            }}
            onBuffer={({isBuffering}) => setIsBuffering(isBuffering)}
            onLoad={data => {
              setIsBuffering(false);
              setDuration(data.duration);
            }}
            onProgress={({currentTime}) => setCurrentTime(currentTime)}
            onEnd={() => {
              setAllQuestionsCompleted(true);
              setCompleted(true);
            }}
          />
        )}
      </View>

      <ScrollView style={GlobalStyle.Padding}>
        {currentQuestion &&
          showQuestion &&
          !answeredQuestions[currentQuestionIndex] && (
            <Fragment key={currentQuestionIndex}>
              <Text
                style={style.GameTitle}
                title={currentQuestion.question_text}
              />
              <View style={GlobalStyle.mapContaner}>
                {currentQuestion.question_type === 'true or false'
                  ? currentQuestion.answers.map((ans, i) => (
                      <GameBtn
                        key={i}
                        index={i}
                        title={ans.title}
                        onPress={() => handleAnswerSelection(ans)}
                      />
                    ))
                  : shuffleArray([...currentQuestion.answers]).map(
                      (answer, i) => (
                        <GameBtn
                          key={i}
                          index={i}
                          title={answer.title}
                          onPress={() => handleAnswerSelection(answer)}
                        />
                      ),
                    )}
              </View>
            </Fragment>
          )}
      </ScrollView>

      <Loader visible={load} />
      <Correct visible={correct} />
      <Error visible={error} game />
      <JobModal visible={completed} onPress={handleJob} />
      <DownloadProgress
        visible={isDownloading}
        percentage={downloadProgress}
        progress={downloadProgress / 100}
      />
    </Body>
  );
};

export default GameScreen;
