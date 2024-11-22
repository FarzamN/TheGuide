import {ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Body, DashboardHeader, TimeChangeModal} from '../../../components';
import TimeBar from './prayComp/timeBar';
import PraySwitch from './prayComp/praySwitch';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {style} from '../style';
import TimeChange from './prayComp/timeChange';
import CountDown from '../../../components/Timer/CountDown';
import Timer from '../../../components/Timer/Timer';
import NumberComp from '../../../components/Timer/Number';
import DatePicker from 'react-native-modal-datetime-picker';

import TimerBtnModal from './prayComp/TimerBtnModal';
import {useGeolocation} from '../../../hooks';
import {
  NumberCreate,
  prayerCreate,
  prayerUpdate,
  TimerCreate,
  TimerUpdate,
} from '../../../redux/actions/UserAction';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

const PrayerScreen = () => {
  const {location} = useGeolocation();
  const [counterData, setAPIcounterData] = useState({});
  const [timerData, setAPItimerData] = useState({});

  const [remainingTime, setRemainingTime] = useState(null);
  const [savedTime, setSavedTime] = useState('07:00:00'); // Default time

  const [showTimer, setShowTimer] = useState(false);
  const [clock, setClock] = useState({
    time: '',
    visible: false,
  });
  const [date, setDate] = useState(new Date());

  const [CTNSelect, setCTNSelect] = useState('count down');

  const [timer, setTimer] = useState({
    temp: 0,
    selected: 0,
    visible: false,
  });

  useEffect(() => {
    const getSavedTime = async () => {
      const time = await AsyncStorage.getItem('time');
      setSavedTime(time || '7:0'); // Default to '7:0' if no time is saved
    };
    getSavedTime();
  }, []);

  useEffect(() => {
    if (!savedTime) return; // Exit if savedTime is not available

    // Parse savedTime into hours and minutes
    const [savedHours, savedMinutes] = savedTime.split(':').map(Number);

    // Set the target time
    const targetTime = moment().set({
      hour: savedHours,
      minute: savedMinutes,
      second: 0,
    });

    // Interval to calculate remaining time
    const interval = setInterval(() => {
      const now = moment();
      const diffInSeconds = targetTime.diff(now, 'seconds');
      if (diffInSeconds <= 0) {
        clearInterval(interval); // Stop interval when time is up
        setRemainingTime('00hr 00min 00sec');
      } else {
        const hours = Math.floor(diffInSeconds / 3600);
        const minutes = Math.floor((diffInSeconds % 3600) / 60);
        const seconds = diffInSeconds % 60;

        setRemainingTime(
          `${hours.toString().padStart(1, '0')}hr ${minutes
            .toString()
            .padStart(1, '0')}min ${seconds.toString().padStart(1, '0')}sec`,
        );
      }
    }, 1000);

    // Cleanup interval on component unmount or dependency change
    return () => clearInterval(interval);
  }, [savedTime]);

  /*
  startTime: moment({
    hours: saveStart?.hours,
    minutes: saveStart?.minutes,
    seconds: saveStart?.seconds,
  }).format('YYYY-MM-DD HH:mm:ss'),
  
  end_time: moment({
    hours: saveEnd?.hours,
    minutes: saveEnd?.minutes,
    seconds: saveEnd?.seconds,
  }).format('YYYY-MM-DD HH:mm:ss'),
  */

  const handleCounterStart = () => {
    const dataOne = {
      end_time: null,
      startTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      statusName: CTNSelect,
      lat: location.latitude,
      long: location.longitude,
    };
    prayerCreate(dataOne, setAPIcounterData);
  };

  const handleCounterEnd = () => {
    const end_time = moment().format('YYYY-MM-DD HH:mm:ss');
    const startTime = moment(counterData.start_time, 'YYYY-MM-DD HH:mm:ss');
    const endTime = moment(end_time, 'YYYY-MM-DD HH:mm:ss');

    const goal = endTime.diff(startTime, 'minutes');

    const dataTwo = {goal, end_time, id: counterData.id};

    prayerUpdate(dataTwo);
  };

  const handleTimerStart = () => {
    const data = {
      end_time: null,
      startTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      statusName: CTNSelect,
      lat: location.latitude,
      long: location.longitude,
    };
    TimerCreate(data, setAPItimerData);
  };

  const handleTimerEnd = () => {
    const end_time = moment().format('YYYY-MM-DD HH:mm:ss');
    const startTime = moment(timerData.start_time, 'YYYY-MM-DD HH:mm:ss');
    const endTime = moment(end_time, 'YYYY-MM-DD HH:mm:ss');
    console.log('timerData.start_time', timerData.start_time);
    const goal = endTime.diff(startTime, 'minutes');

    const data = {goal, end_time, id: timerData.id};
    TimerUpdate(data);
  };

  const handleNumber = () => {
    const data = {
      end_time: null,
      startTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      statusName: CTNSelect,
      lat: location.latitude,
      long: location.longitude,
    };
    NumberCreate(data);
  };
  return (
    <Body>
      <DashboardHeader onPray={() => setShowTimer(true)} />
      <ScrollView>
        <TimeBar
          time={remainingTime || 'Loading...'}
          onTime={() => setClock({visible: true, time: ''})}
        />
        <View style={[GlobalStyle.between, style.SwitchCont]}>
          {['count down', 'timer', 'number'].map(i => (
            <PraySwitch
              key={i}
              title={i}
              focus={CTNSelect === i}
              onPress={() => setCTNSelect(i)}
            />
          ))}
        </View>
        {CTNSelect === 'count down' ? (
          <CountDown
            location={location}
            handleEnd={handleCounterEnd}
            handleStart={handleCounterStart}
          />
        ) : CTNSelect === 'timer' ? (
          <Timer handleEnd={handleTimerEnd} handleStart={handleTimerStart} />
        ) : (
          <NumberComp
            handleBtn={handleNumber}
            handleAdd={setAdd => setAdd(true)}
          />
        )}

        <View style={[style.TimeChangeCont, GlobalStyle.justify]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[0, 15, 30, 60, 90, 120].map((i, ix) => (
              <TimeChange
                key={ix}
                data={i}
                i={ix}
                focus={i === timer.selected}
                onPress={() => {
                  setTimer(prevTimer => ({
                    ...prevTimer,
                    visible: true, // Show the modal
                    temp: i, // Set the temporary time selection
                  }));
                }}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <TimeChangeModal
        onPress={() => {
          setTimer(prevTimer => ({
            ...prevTimer,
            selected: prevTimer.temp,
            visible: false,
          }));
        }}
        onClose={() => {
          setTimer(prevTimer => ({
            ...prevTimer,
            visible: false,
          }));
        }}
        time={timer.temp}
        visible={timer.visible}
      />

      <DatePicker
        mode="time"
        isDarkModeEnabled={false}
        date={date}
        isVisible={clock.visible}
        onConfirm={sClock => {
          const formattedTime = sClock.getHours() + ':' + sClock.getMinutes();
          AsyncStorage.setItem('time', JSON.stringify(sClock));

          setClock({
            visible: false,
            time: formattedTime,
          });
          setDate(sClock);
          Toast.show(`Time is Updated to ${formattedTime}`);
        }}
        onCancel={() => setClock({visible: false, time: ''})}
      />

      <TimerBtnModal
        visible={showTimer}
        onClose={() => setShowTimer(false)}></TimerBtnModal>
    </Body>
  );
};

export default PrayerScreen;
