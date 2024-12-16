import {styles} from './style';
import RenderDot from './renderDot';
import Toast from 'react-native-simple-toast';
import {TextInput, View} from 'react-native';
import {ContBox, Error, TimeService} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';
import React, {useEffect, useRef, useState} from 'react';
import moment from 'moment';
import {useGeolocation} from '../../hooks';
import {
  prayer_streak,
  prayerCreate,
  prayerUpdate,
} from '../../redux/actions/UserAction';
import {Image_Url} from '../../utils/Urls';
import {useNavigation} from '@react-navigation/native';
import {playSound} from '../../utils/Constants';
import {useDispatch} from 'react-redux';

const CountDown = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {location} = useGeolocation();

  const countdownRef = useRef(null);

  const [counterData, setAPIcounterData] = useState({});
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [counterSelect, setCounterSelect] = useState(0);
  const [err, setErr] = useState({show: false, msg: ''});
  const [time, setTime] = useState({hours: '', minutes: '60', seconds: ''});

  const handleMap = () =>
    navigate('webview', {uri: Image_Url + 'prayer/webview/map'});

  const handleStart = () => {
    const dataOne = {
      lat: location.latitude,
      long: location.longitude,
      startTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    prayerCreate(dataOne, setAPIcounterData);
    setTimeout(() => {
      handleMap();
    }, 1300);
  };

  const handleEnd = val => {
    const end_time = moment().format('YYYY-MM-DD HH:mm:ss');
    const startTime = moment(counterData.start_time, 'YYYY-MM-DD HH:mm:ss');
    const endTime = moment(end_time, 'YYYY-MM-DD HH:mm:ss');

    const goal = endTime.diff(startTime, 'minutes');

    const dataTwo = {goal, end_time, id: counterData.id};

    dispatch(prayerUpdate(dataTwo, val));
    dispatch(prayer_streak());
  };

  const handlePress = id => {
    switch (id) {
      case 1: // Pause or Resume
        if (isRunning) {
          clearInterval(countdownRef.current);
          setIsPaused(true);
          handleEnd('dShow');
          setIsRunning(false);
        } else {
          handleStart();
          startCountdown();
          setIsPaused(false);
        }
        break;
      case 2: // Start or Stop
        if (isRunning) {
          stopCountdown();
          handleEnd('show');
        } else {
          startCountdown();
          handleStart();
        }
        break;
      case 4: // Reset
        stopCountdown();
        setIsPaused(false);
        playSound();
        break;
      case 5: // useless Save start after puase
        handleStart();
        startCountdown();
        setIsPaused(false);
        Toast.show('Prayer created successfully');

        break;
      case 3: // Reset
        resetCountdown();
        break;
    }
    setCounterSelect(id);
  };

  useEffect(() => {
    let totalSeconds =
      (parseInt(time.hours || '0') % 12) * 3600 +
      parseInt(time.minutes || '0') * 60 +
      parseInt(time.seconds || '0');

    if (isRunning && !isPaused) {
      const timerId = setInterval(() => {
        if (totalSeconds <= 0) {
          setIsRunning(false);
          resetCountdown();
          clearInterval(timerId);
          return;
        }
        totalSeconds--;
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        setTime({
          hours: String(hrs).padStart(2, '0'),
          minutes: String(mins).padStart(2, '0'),
          seconds: String(secs).padStart(2, '0'),
        });
      }, 1000);
      countdownRef.current = timerId;
    } else {
      clearInterval(countdownRef.current);
    }

    return () => clearInterval(countdownRef.current);
  }, [isRunning, isPaused]);

  const startCountdown = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const stopCountdown = () => {
    setIsRunning(false);
    setIsPaused(false);
  };

  const resetCountdown = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime({hours: '', minutes: '60', seconds: ''});
  };

  const getButtonData = () => {
    if (isRunning && !isPaused) {
      return [
        {title: 'Pause', id: 1},
        {title: 'Save', id: 2},
      ];
    } else if (isPaused) {
      return [
        {title: 'Start', id: 1},
        {title: 'Save', id: 4},
      ];
    } else {
      return [
        {title: 'Start', id: 2},
        {title: 'Reset', id: 3},
      ];
    }
  };

  const renderTimeBox = (label, value, field) => (
    <ContBox label={label}>
      <TextInput
        style={styles.inputText}
        keyboardType="number-pad"
        value={value}
        onChangeText={text =>
          setTime(prevTime => ({
            ...prevTime,
            [field]: text,
          }))
        }
        placeholder="00"
        maxLength={2}
        placeholderTextColor={'#787677'}
      />
    </ContBox>
  );
  9;
  const buttonData = getButtonData();

  return (
    <>
      <View style={styles.MainBox}>
        {renderTimeBox('Hour', time.hours, 'hours')}
        <RenderDot />
        {renderTimeBox('Min', time.minutes, 'minutes')}
        <RenderDot />
        {renderTimeBox('Sec', time.seconds, 'seconds')}
      </View>

      <View style={[GlobalStyle.evenly, styles.TimeCont]}>
        {buttonData.map((i, ix) => (
          <TimeService
            key={ix}
            data={i}
            focus={counterSelect === i.id}
            onPress={() => handlePress(i.id)}
          />
        ))}
      </View>
      <Error message={err.msg} visible={err.show} />
    </>
  );
};

export default CountDown;
