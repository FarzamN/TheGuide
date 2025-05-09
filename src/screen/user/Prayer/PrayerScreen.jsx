import {
  Body,
  DonateModal,
  AboutStreak,
  DashboardHeader,
  TimeChangeModal,
  RequestModal,
  AskRequestModal,
  AddSponsorModal,
  GuestModal,
} from '../../../components';

import moment from 'moment';
import {style} from '../style';
import {useDispatch, useSelector} from 'react-redux';
import TimeBar from './prayComp/timeBar';
import {ScrollView, View} from 'react-native';
import Toast from 'react-native-simple-toast';
import {Image_Url} from '../../../utils/Urls';
import TimeChange from './prayComp/timeChange';
import PraySwitch from './prayComp/praySwitch';
import DatePicker from 'react-native-date-picker';
import Timer from '../../../components/Timer/Timer';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import NumberComp from '../../../components/Timer/Number';
import CountDown from '../../../components/Timer/CountDown';
import React, {useCallback, useEffect, useState} from 'react';
import {
  get_user_app_total_points,
  prayer_streak,
} from '../../../redux/actions/UserAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const PrayerScreen = () => {
  const dispatch = useDispatch();
  const {navigate, getParent} = useNavigation();

  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';

  const [showGuest, setShowGuest] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [askRequestModal, setAskRequestModal] = useState(false);
  const [addSponsorModal, setAddSponsorModal] = useState(false);

  useEffect(() => {
    if (!isGuest) {
      dispatch(get_user_app_total_points());
    }
  }, [isGuest]);

  const [remainingTime, setRemainingTime] = useState(null);
  const [savedTime, setSavedTime] = useState('20:00'); // Default time

  const [showTimer, setShowTimer] = useState(false);
  const [donate, setDonate] = useState(false);
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

  const handleMap = () =>
    navigate('webview', {uri: Image_Url + 'prayer/webview/map'});

  const updateTime = () => {
    const currentTime = moment();
    let savedMoment = moment(savedTime, 'h:mm:ss a');

    // If the time has passed, set it for the next day
    if (currentTime.isSameOrAfter(savedMoment)) {
      savedMoment = savedMoment.add(1, 'day');
    }

    const diffInSeconds = savedMoment.diff(currentTime, 'seconds');

    if (diffInSeconds <= 0) {
      setRemainingTime('0hr 0min 0sec');
    } else {
      const hours = Math.floor(diffInSeconds / 3600);
      const minutes = Math.floor((diffInSeconds % 3600) / 60);
      const seconds = diffInSeconds % 60;

      setRemainingTime(
        `${hours > 0 ? `${hours}hr ` : ''}${minutes}min ${
          seconds > 0 ? `${seconds}sec` : ''
        }`,
      );
    }
  };

  useEffect(() => {
    updateTime();

    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [savedTime]);

  // Function to handle time updates
  const handleTimeUpdate = async newTime => {
    await AsyncStorage.setItem('time', JSON.stringify(newTime));
    setSavedTime(newTime);
    Toast.show(`Time is Updated to ${newTime}`);
  };

  // Retrieve the saved time on component mount
  useEffect(() => {
    dispatch(prayer_streak());
    const getSavedTime = async () => {
      const storedTime = await AsyncStorage.getItem('time');
      const parsedTime = JSON.parse(storedTime);
      setSavedTime(parsedTime || '20:00'); // Default to '20:00' if no time is saved
    };
    getSavedTime();
  }, []);

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

  useFocusEffect(
    useCallback(() => {
      getParent()?.setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );

  const onRequest = () => {
    if (isGuest) {
      setShowGuest(true);
      setTimeout(() => {
        setShowGuest(false);
      }, 2000);
      return;
    }
    dispatch(get_user_app_total_points());
    setRequestModal(true);
  };
  return (
    <Body>
      <DashboardHeader onRequest={onRequest} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TimeBar
          onMap={handleMap}
          onCalendar={() => navigate('calendar')}
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
          <CountDown />
        ) : CTNSelect === 'timer' ? (
          <Timer />
        ) : (
          <NumberComp />
        )}
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
        title="Select Daily Prayer Time!"
        modal
        buttonColor="black"
        confirmText="Confirm"
        theme="light"
        date={date}
        open={clock.visible}
        onConfirm={selectedDate => {
          const formattedTime = moment(selectedDate).format('h:mm:ss a');
          setClock({visible: false, time: formattedTime});
          setDate(selectedDate);
          handleTimeUpdate(formattedTime); // Update time and trigger effect
        }}
        onCancel={() => setClock({visible: false, time: ''})}
      />

      {/* <TimerBtnModal
        visible={showTimer}
        onClose={() => setShowTimer(false)}></TimerBtnModal> */}
      <AboutStreak />
      <DonateModal onClose={() => setDonate(false)} visible={donate} />

      <GuestModal visible={showGuest} />
      <RequestModal
        onask={() => {
          setRequestModal(false);
          setTimeout(() => {
            setAskRequestModal(true);
          }, 500);
        }}
        onadd={() => {
          setRequestModal(false);
          setTimeout(() => {
            setAddSponsorModal(true);
          }, 1000);
        }}
        visible={requestModal}
        onClose={() => setRequestModal(false)}
      />
      <AskRequestModal
        visible={askRequestModal}
        onClose={() => setAskRequestModal(false)}
      />
      <AddSponsorModal
        visible={addSponsorModal}
        onClose={() => setAddSponsorModal(false)}
      />
    </Body>
  );
};

export default PrayerScreen;

{
  /*
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
        */
}
