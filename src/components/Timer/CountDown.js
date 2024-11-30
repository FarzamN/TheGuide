import {styles} from './style';
import RenderDot from './renderDot';
import Sound from 'react-native-sound';
import {TextInput, View} from 'react-native';
import {ContBox, Error, TimeService} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';
import React, {useEffect, useRef, useState} from 'react';

const CountDown = ({handleStart, handleEnd, location}) => {
  const countdownRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [counterSelect, setCounterSelect] = useState(0);
  const [err, setErr] = useState({show: false, msg: ''});
  const [time, setTime] = useState({hours: '', minutes: '', seconds: ''});

  const handlePress = id => {
    if (!time.minutes) {
      setErr({show: true, msg: 'Please enter valid time in 12-hour format!'});
      setTimeout(() => {
        setErr({show: false, msg: ''});
      }, 2000);
    } else {
      if (id === 1) {
        console.log('saving');
      } else if (id === 2) {
        if (isRunning) {
          stopCountdown();
          handleEnd();
        } else {
          startCountdown();
          handleStart();
        }
        setCounterSelect(id);
      } else if (id === 3) {
        resetCountdown();
        setCounterSelect(id);
      }
    }
  };

  useEffect(() => {
    let totalSeconds =
      (parseInt(time.hours || '0') % 12) * 3600 +
      parseInt(time.minutes || '0') * 60 +
      parseInt(time.seconds || '0');

    if (isRunning) {
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
    if (location.lat !== undefined) {
      if (totalSeconds <= 0) {
        setIsRunning(false);
        handleEnd();
        resetCountdown();
        clearInterval(countdownRef.current);
        return;
      }
    }

    return () => clearInterval(countdownRef.current);
  }, [isRunning]);

  const startCountdown = () => {
    if (validateInput()) {
      setIsRunning(true);
    }
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    if (isRunning) {
      handleEnd(); // Ensure handleEnd is called during reset
    }
    setIsRunning(false);
    setTime({hours: '', minutes: '', seconds: ''});
  };

  const validateInput = () => {
    const {hours, minutes, seconds} = time;
    const isValid =
      (hours === '' || (parseInt(hours) >= 0 && parseInt(hours) < 12)) &&
      (minutes === '' || (parseInt(minutes) >= 0 && parseInt(minutes) < 60)) &&
      (seconds === '' || (parseInt(seconds) >= 0 && parseInt(seconds) < 60));
    if (!isValid) {
      setTime({hours: '', minutes: '', seconds: ''});
      setErr({show: true, msg: 'Please enter valid time in 12-hour format!'});
      setTimeout(() => {
        setErr({show: false, msg: ''});
      }, 2000);
    }
    return isValid;
  };

  const renderTimeBox = (label, value, field) => (
    <ContBox label={label}>
      <TextInput
        style={styles.inputText}
        keyboardType="number-pad"
        value={value}
        onChangeText={text => {
          setTime(prevTime => ({
            ...prevTime,
            [field]: text,
          }));
        }}
        /*onChangeText={text => {
          if (/^\d*$/.test(text)) {
            setTime(prevTime => ({
              ...prevTime,
              [field]: text.padStart(2, '0'), // Ensure double-digit formatting
            }));
          }
        }} */
        placeholder="00"
        maxLength={2}
        placeholderTextColor={'#787677'}
      />
    </ContBox>
  );

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
        {[
          // {title: 'Save', id: 1},
          {title: isRunning ? 'Stop' : 'Start', id: 2},
          {title: 'Reset', id: 3},
        ].map((i, ix) => (
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
