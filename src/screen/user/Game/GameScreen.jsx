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
import {
  getGameApi,
  getGameIdAPI,
  gameQuestionAPI,
  getBibleSchoolApi,
  getBibleSchoolApiUpdate,
  update_user_app_total_points,
  get_rendom_ministry_project_to_donate,
  donate_to_ministory,
} from '../../../redux/actions/UserAction';

import {style} from './style';
import Video from 'react-native-video';
import {Image_Url} from '../../../utils/Urls';
import Toast from 'react-native-simple-toast';
import {useFileDownloader} from '../../../hooks';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {BackHandler, ScrollView, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {handleAnswer, shuffleArray, transformGameQuestions} from './gameFun';
import React, {useRef, useEffect, useState, Fragment, useCallback} from 'react';

const GameScreen = ({route}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const {goBack, getParent} = useNavigation();
  const get_game = useSelector(state => state.get_game);
  const previous_points = useSelector(state => state.user_total_points);
  const userDetail = useSelector(state => state.userDetails);
  const ministry_project = useSelector(state => state.ministry_project);
  console.log('get_game', get_game);
  const {downloadFile, downloadProgress, isDownloading, deleteFile} =
    useFileDownloader();

  const videoRef = useRef(null);
  const [getGameID, setGetGameID] = useState([]);
  const [load, setLoad] = useState(false);
  const [loadAssigment, setLoadAssigment] = useState(false);
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

  // finding answer
  const answering = currentQuestion?.answers?.map(e => {
    if (e.isCorrect) {
      return e.title;
    }
  });
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

  /*
  useEffect(() => {
    if (fileUrl) {
      handleDownload();
      setIsPaused(false);
    }
  }, [fileUrl]);
*/

  useEffect(() => {
    if (showQuestion && currentQuestion && !allQuestionsCompleted) {
      setIsPaused(true);
    } else if (correct) {
      setIsPaused(true); // Pause the video when the correct modal is shown
    } else {
      setTimeout(() => setIsPaused(false), 300);
    }
  }, [showQuestion, allQuestionsCompleted, correct, error]);

  const seekVideo = () => {
    if (videoRef.current && currentQuestion) {
      setShowQuestion(false);
      const seekTime = Math.max(
        0,
        currentTime - (currentQuestion.startTime - previousQuestionTime),
      );
      setCurrentTime(seekTime);

      videoRef.current.seek(seekTime);
    }
  };

  const handleAnswerSelection = answer => {
    setShowQuestion(false);
    handleAnswer(
      answer,
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
    // deleteFile();
    // dispatch(getBibleSchoolApi(setLoadAssigment));

    dispatch(
      gameQuestionAPI(item, getGameID, goBack, setLoadAssigment, setCompleted),
    );
    const getNumber = parseInt(
      userDetail.user_game_prayer_total_streak.replace('X', ''),
      10,
    );
    const point = gameQuestions.length * getNumber;
    const twentyFivePercent = point * 0.25;
    donate_to_ministory(twentyFivePercent, ministry_project.id);
    const seventyFivePercent = point * 0.75;
    const point_of_user = seventyFivePercent + previous_points;
    dispatch(update_user_app_total_points(point_of_user));
  };

  useEffect(() => {
    dispatch(get_rendom_ministry_project_to_donate());
    dispatch(getGameApi(setLoad, item.id));
    getGameIdAPI(item.id, setLoad);
  }, []);

  useEffect(() => {
    if (!isBuffering && !isPaused && currentQuestion) {
      if (Math.ceil(currentTime) === Math.ceil(currentQuestion.startTime)) {
        setShowQuestion(true);
      } else if (
        Math.ceil(currentTime) > Math.ceil(currentQuestion.startTime)
      ) {
        setShowQuestion(false);
      }
    }
  }, [currentTime, currentQuestion, isBuffering, isPaused]);

  useEffect(() => {
    if (get_game?.game_question) {
      const transformedQuestions = transformGameQuestions(
        get_game.game_question,
        setGetGameID,
      );
      setGameQuestions(transformedQuestions);
      // Initialize all questions as unanswered (false)
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

  useEffect(() => {
    const backAction = () => true;
    const {addEventListener} = BackHandler;
    const {remove} = addEventListener('hardwareBackPress', backAction);
    return () => remove();
  }, []);

  return (
    <Body>
      <GameHeader
        isProgress
        onClose={goBack}
        /*
        handleJob
        onClose={() => {
          goBack();
          deleteFile();
        }}*/
        progress={progress}
        title={item.course_name}
        subTitle={item.game_title}
      />

      {/* {[
        {n: 'id', c: item.id},
        {n: 'currentTime', c: Math.ceil(currentTime)},
        {
          n: 'quesion length',
          c: currentQuestionIndex + 1 + '/' + gameQuestions.length,
        },
        {n: 'next Question Time', c: currentQuestion?.startTime},
        {n: 'prev Question Time', c: previousQuestionTime},
        {n: 'Correct answer is:', c: answering},
      ].map(({n, c}) => (
        <Text key={n} center title={n + ' ' + c} />
      ))} */}

      <View>
        {isBuffering && <NorLoad />}
        {fileUrl && (
          <Video
            ref={videoRef}
            // controls={true}
            controls={false}
            paused={isPaused}
            resizeMode="contain"
            style={style.videoPlayer}
            poster={Image_Url + get_game.image_app}
            source={{
              // uri: videoPath,
              uri: fileUrl,
              type: 'mp4',
            }}
            onBuffer={({isBuffering}) => setIsBuffering(isBuffering)}
            onLoad={data => {
              setIsBuffering(false);
              setDuration(data.duration);
            }}
            onProgress={({currentTime}) => setCurrentTime(currentTime)}
            onEnd={() => setCompleted(true)}
          />
        )}
      </View>
      <ScrollView style={GlobalStyle.Padding}>
        {currentQuestion && showQuestion && !allQuestionsCompleted && (
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
      <Error visible={error} game />
      <Correct visible={correct} game />
      <JobModal visible={completed} load={loadAssigment} onPress={handleJob} />
      <DownloadProgress
        visible={isDownloading}
        percentage={downloadProgress}
        progress={downloadProgress / 100}
      />
    </Body>
  );
};

export default GameScreen;
