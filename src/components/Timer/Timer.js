import {TimeService} from '..';
import {styles} from './style';
import ContBox from './contBox';
import RenderDot from './renderDot';
import {View, TextInput} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import React, {useRef, useState, useEffect} from 'react';

const Timer = ({handleStart, handleEnd}) => {
  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [timerSelect, setTimerSelect] = useState(0);
  const [time, setTime] = useState({hours: '00', minutes: '00', seconds: '00'});

  const incrementTime = () => {
    setTime(prevTime => {
      let hours = parseInt(prevTime.hours, 10);
      let minutes = parseInt(prevTime.minutes, 10);
      let seconds = parseInt(prevTime.seconds, 10);

      seconds += 1;
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }

      return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      };
    });
  };

  const handlePress = id => {
    if (id === 2) {
      if (isRunning) {
        handleEnd();
        clearInterval(timerRef.current);
      } else {
        handleStart();
        timerRef.current = setInterval(incrementTime, 1000);
      }
      setIsRunning(prev => !prev);
      setTimerSelect(id);
    } else if (id === 3) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      setTime({hours: '00', minutes: '00', seconds: '00'});
      setTimerSelect(id);
    } else {
      setTimerSelect(id);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const renderTimeBox = (label, value) => (
    <ContBox label={label}>
      <TextInput
        style={styles.inputText}
        keyboardType="number-pad"
        value={value}
        onChangeText={text =>
          setTime(prev => ({...prev, [label.toLowerCase()]: text}))
        }
        editable={false}
        placeholder="00"
        maxLength={2}
        placeholderTextColor={'#787677'}
      />
    </ContBox>
  );

  return (
    <>
      <View style={styles.MainBox}>
        {renderTimeBox('Hour', time.hours)}
        <RenderDot />
        {renderTimeBox('Min', time.minutes)}
        <RenderDot />
        {renderTimeBox('Sec', time.seconds)}
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
            focus={timerSelect == i.id}
            onPress={() => handlePress(i.id)}
          />
        ))}
      </View>
    </>
  );
};

export default Timer;
