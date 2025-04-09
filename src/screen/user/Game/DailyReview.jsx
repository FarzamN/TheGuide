import {useSelector} from 'react-redux';
import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {
  Body,
  Correct,
  Error,
  GameBtn,
  GameHeader,
  Loader,
  Text,
} from '../../../components';
import {useDispatch} from 'react-redux';
import {
  handleReviewAnswer,
  shuffleArray,
  transformedReviewQuestions,
} from './gameFun';
import {getReviewGameApi} from '../../../redux/actions/UserAction';
import {ScrollView, View} from 'react-native';
import {style} from './style';

const DailyReview = () => {
  const dispatch = useDispatch();
  const {goBack, getParent} = useNavigation();

  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false);

  const [gameQuestions, setGameQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = gameQuestions[currentQuestionIndex];
  const get_review_game = useSelector(state => state.get_review_game);

  useEffect(() => {
    dispatch(getReviewGameApi(setLoad));
  }, []);

  useEffect(() => {
    if (get_review_game) {
      const transformedQuestions = transformedReviewQuestions(get_review_game);
      setGameQuestions(transformedQuestions);
      // Initialize all questions as unanswered (false)
    }
  }, [get_review_game]);

  const handleAnswerSelection = answer => {
    handleReviewAnswer(
      answer,
      setError,
      setCorrect,
      currentQuestionIndex,
      gameQuestions.length,
      setCurrentQuestionIndex,
      dispatch,
      goBack,
    );
  };

  useFocusEffect(
    useCallback(() => {
      getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  const answering = currentQuestion?.answers?.map(e => {
    if (e.isCorrect) {
      return e.title;
    }
  });
  const [showAnser, setShowAnswer] = useState(false);
  return (
    <Body>
      <GameHeader
        onLongPress={() => setShowAnswer(prev => !prev)}
        onClose={goBack}
        title="Daily Review"
        subTitle="Your Daily game review"
        progress={(currentQuestionIndex + 1) / gameQuestions.length || 0}
      />
      <View style={{height: 50}} />
      {[
        {
          n: 'quesion length',
          c: currentQuestionIndex + 1 + '/' + gameQuestions.length,
        },
        {n: 'Correct answer is:', c: answering},
      ].map(({n, c}) => (
        <Text
          style={{color: showAnser ? '#000' : '#fff'}}
          key={n}
          center
          title={n + ' ' + c}
        />
      ))}
      <ScrollView style={GlobalStyle.Padding}>
        {currentQuestion && (
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
    </Body>
  );
};

export default DailyReview;
