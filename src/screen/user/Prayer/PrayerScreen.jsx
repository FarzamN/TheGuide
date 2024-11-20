import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
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

const PrayerScreen = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [clock, setClock] = useState({
    visible: false,
    time: '',
  });
  const [date, setDate] = useState(new Date());
  console.log({date, clock});

  const [CTNSelect, setCTNSelect] = useState(1);

  const [timer, setTimer] = useState({
    temp: 0,
    selected: 0,
    visible: false,
  });

  return (
    <Body>
      <DashboardHeader onPray={() => setShowTimer(true)} />
      <ScrollView>
        <TimeBar
          time={'1hr 23min 10sec'}
          onTime={() => setClock({visible: true, time: ''})}
        />
        <View style={[GlobalStyle.between, style.SwitchCont]}>
          {[
            {title: 'Count Down', id: 1},
            {title: 'Timer', id: 2},
            {title: 'Number', id: 3},
          ].map((i, ix) => (
            <PraySwitch
              key={ix}
              data={i}
              focus={CTNSelect == i.id}
              onPress={() => setCTNSelect(i.id)}
            />
          ))}
        </View>
        {CTNSelect === 1 ? (
          <CountDown />
        ) : CTNSelect === 2 ? (
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
