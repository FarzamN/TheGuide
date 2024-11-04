import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {Body, DashboardHeader, TimeChangeModal} from '../../../components';
import TimeBar from './prayComp/timeBar';
import PraySwitch from './prayComp/praySwitch';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {style} from '../style';
import TimeService from './prayComp/TimeService';
import TimeChange from './prayComp/timeChange';
import CountDown from '../../../components/Timer/CountDown';
import Timer from '../../../components/Timer/Timer';
import Number from '../../../components/Timer/Number';

const PrayerScreen = () => {
  const [CTNSelect, setCTNSelect] = useState(1);
  const [counterSelect, setCounterSelect] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [timer, setTimer] = useState({
    temp: 0,
    selected: 0,
    visible: false,
  });
  const handlePress = id => {
    if (id === 2) {
      setIsRunning(prev => !prev);
      setCounterSelect(id);
    } else {
      setCounterSelect(id);
    }
  };
  return (
    <Body>
      <DashboardHeader />
      <TimeBar time={'1hr 23min 10sec'} />
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

      <View style={[GlobalStyle.between, style.TimeCont]}>
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
    </Body>
  );
};

export default PrayerScreen;
