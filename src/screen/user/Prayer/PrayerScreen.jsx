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
import Number from '../../../components/Timer/Number';
import DatePicker from 'react-native-date-picker';
import TimerBtnModal from './prayComp/TimerBtnModal';
import {useGeolocation} from '../../../hooks';
import {prayerCreate, prayerUpdate} from '../../../redux/actions/UserAction';
import moment from 'moment';

const PrayerScreen = () => {
  const {location} = useGeolocation();
  const [apidata, setapidata] = useState({});
  const [saveStart, setSaveStart] = useState(null);
  const [saveEnd, setSaveEnd] = useState(null);

  const [showTimer, setShowTimer] = useState(false);
  const [load, setLoad] = useState(false);
  const [clock, setClock] = useState({
    visible: false,
    time: '',
  });
  const [date, setDate] = useState(new Date());

  const [CTNSelect, setCTNSelect] = useState('count down');

  const [timer, setTimer] = useState({
    temp: 0,
    selected: 0,
    visible: false,
  });
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
  const dataOne = {
    end_time: null,
    startTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    statusName: CTNSelect,
    lat: location.latitude,
    long: location.longitude,
  };

  const handleStart = () => {
    prayerCreate(dataOne, setapidata);
  };

  const handleEnd = () => {
    const end_time = moment().format('YYYY-MM-DD HH:mm:ss');
    const startTime = moment(apidata.start_time, 'YYYY-MM-DD HH:mm:ss');
    const endTime = moment(end_time, 'YYYY-MM-DD HH:mm:ss');

    const goal = endTime.diff(startTime, 'minutes');

    const dataTwo = {
      goal,
      end_time,
      id: apidata.id,
      statusName: CTNSelect,
      lat: location.latitude,
      long: location.longitude,
      startTime: apidata.start_time,
    };

    prayerUpdate(dataTwo);
  };
  return (
    <Body>
      <DashboardHeader onPray={() => setShowTimer(true)} />
      <ScrollView>
        <TimeBar
          time={'1hr 23min 10sec'}
          onTime={() => setClock({visible: true, time: ''})}
        />
        {load ? <Text /> : load ? <Text /> : load ? <Text /> : null}
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
            saveEnd={setSaveEnd}
            handleEnd={handleEnd}
            saveStart={setSaveStart}
            handleStart={handleStart}
          />
        ) : CTNSelect === 'timer' ? (
          <Timer />
        ) : (
          <Number />
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
        modal
        mode="time"
        date={date}
        theme="light"
        open={clock.visible}
        onConfirm={sClock => {
          setClock({
            visible: false,
            time: sClock.getHours() + ':' + sClock.getMinutes(),
          });
          setDate(sClock);
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
