import {View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from '..';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';
import {GlobalStyle} from '../../utils/GlobalStyle';

const CountDown = () => {
  const [time, setTime] = useState({hours: '00', minutes: '00', seconds: '00'});
  const [isRunning, setIsRunning] = useState(false);
  const countdownRef = useRef(null);

  useEffect(() => {
    const loadCountdown = async () => {
      try {
        const savedCountdown = await AsyncStorage.getItem('countdown');
        if (savedCountdown) {
          const {hours, minutes, seconds, isRunning} =
            JSON.parse(savedCountdown);
          setTime({hours, minutes, seconds});
          setIsRunning(isRunning);
        }
      } catch (error) {
        console.log('Failed to load countdown from AsyncStorage', error);
      }
    };
    loadCountdown();
  }, []);

  useEffect(() => {
    const saveCountdown = async () => {
      try {
        await AsyncStorage.setItem(
          'countdown',
          JSON.stringify({...time, isRunning}),
        );
      } catch (error) {
        console.log('Failed to save countdown to AsyncStorage', error);
      }
    };
    saveCountdown();
  }, [time, isRunning]);

  useEffect(() => {
    let totalSeconds =
      parseInt(time.hours) * 3600 +
      parseInt(time.minutes) * 60 +
      parseInt(time.seconds);
    if (isRunning) {
      const timerId = setInterval(() => {
        if (totalSeconds <= 0) {
          setIsRunning(false);
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
  }, [isRunning]);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    setIsRunning(false);
    setTime({hours: '00', minutes: '00', seconds: '00'});
  };

  const renderTimeBox = (label, value) => (
    <View style={[styles.timeSection, GlobalStyle.justify]}>
      <Text style={styles.label} title={label} />

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#DEDEDE', '#B5B5B5']}
        style={[styles.InputCon, GlobalStyle.justify]}>
        <Text style={styles.inputText} title={value} />
      </LinearGradient>
    </View>
  );

  return (
    <View style={styles.MainBox}>
      {renderTimeBox('Hour', time.hours)}
      <Icon
        style={styles.DotCon}
        type={IconType.Entypo}
        name="dots-two-vertical"
        size={18}
        color={'gray'}
      />
      {renderTimeBox('Min', time.minutes)}
      <Icon
        style={styles.DotCon}
        type={IconType.Entypo}
        name="dots-two-vertical"
        size={18}
        color={'gray'}
      />
      {renderTimeBox('Sec', time.seconds)}
    </View>
  );
};
export default CountDown;
