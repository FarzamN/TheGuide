import {View} from 'react-native';
import React, {useState} from 'react';
import {Body, DashboardHeader} from '../../../components';
import TimeBar from './prayComp/timeBar';
import PraySwitch from './prayComp/praySwitch';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {style} from '../style';
import TimeService from './prayComp/TimeService';

const PrayerScreen = () => {
  const [select, setSelect] = useState(1);
  const [timeSelect, setTimeSelect] = useState(0);
  return (
    <Body>
      <DashboardHeader />
      <TimeBar />
      <View style={[GlobalStyle.between, style.SwitchCont]}>
        {[
          {title: 'Count Down', id: 1},
          {title: 'Timer', id: 2},
          {title: 'Number', id: 3},
        ].map((i, ix) => (
          <PraySwitch
            key={ix}
            data={i}
            focus={select == i.id}
            onPress={() => setSelect(i.id)}
          />
        ))}
      </View>
      <View style={[GlobalStyle.between, style.TimeCont]}>
        {[
          {title: 'Save', id: 1},
          {title: 'Start', id: 2},
          {title: 'Reset', id: 3},
        ].map((i, ix) => (
          <TimeService
            key={ix}
            data={i}
            focus={timeSelect == i.id}
            onPress={() => setTimeSelect(i.id)}
          />
        ))}
      </View>
    </Body>
  );
};

export default PrayerScreen;
