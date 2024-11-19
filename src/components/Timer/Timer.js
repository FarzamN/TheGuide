import {TimeService} from '..';
import {styles} from './style';
import ContBox from './contBox';
import React, {useRef, useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import RenderDot from './renderDot';

const Timer = () => {
  const [time, setTime] = useState({hours: '00', minutes: '00', seconds: '00'});
  const [counterSelect, setCounterSelect] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

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
        clearInterval(timerRef.current);
      } else {
        timerRef.current = setInterval(incrementTime, 1000);
      }
      setIsRunning(prev => !prev);
      setCounterSelect(id);
    } else if (id === 3) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      setTime({hours: '00', minutes: '00', seconds: '00'});
      setCounterSelect(id);
    } else {
      setCounterSelect(id);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current); // Clear timer on unmount
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
        placeholder="00"
        maxLength={2}
        placeholderTextColor={'#004FB4'}
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

      <View style={[GlobalStyle.between, styles.TimeCont]}>
        {[
          {title: 'Save', id: 1},
          {title: isRunning ? 'Stop' : 'Start', id: 2},
          {title: 'Reset', id: 3},
        ].map((i, ix) => (
          <TimeService
            key={ix}
            data={i}
            focus={counterSelect == i.id}
            onPress={() => handlePress(i.id)}
          />
        ))}
      </View>
    </>
  );
};

export default Timer;
