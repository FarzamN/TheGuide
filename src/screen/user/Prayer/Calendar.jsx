import moment from 'moment';
import {style} from '../style';
import {View} from 'react-native';
import {Color} from '../../../utils/Color';
import {Calendar} from 'react-native-calendars';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import React, {useCallback, useState, useEffect} from 'react';
import {Body, CalendarCard, CrossIcon} from '../../../components';
import {getCalendarData} from '../../../redux/actions/UserAction';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

// const calendar_data = [
//   {date: '2025-04-16', progress: '10', background: '#0000ff'},
//   {date: '2025-04-18', progress: '25', background: '#ff9900'},
//   {date: '2025-04-20', progress: '5', background: '#00cc66'},
// ];

const CalendarScreen = () => {
  const dispatch = useDispatch();
  const calendar_data = useSelector(state => state.calendar_data);
  const {getParent, goBack} = useNavigation();
  const [Date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [selectedData, setSelectedData] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );

  useEffect(() => {
    const match = calendar_data.find(item => item.date === Date);
    setSelectedData(match || null);
  }, [Date]);

  useEffect(() => {
    dispatch(getCalendarData());
  }, []);

  const backgroundColor = Color.status;
  return (
    <Body>
      <View style={{backgroundColor}}>
        <CrossIcon styles={style.CalendarIcon} onPress={goBack} />
      </View>
      <Calendar
        current={Date}
        enableSwipeMonths
        markingType="custom"
        theme={style.CalendarTheme}
        style={{marginHorizontal: -6}}
        headerStyle={{backgroundColor, marginBottom: 10}}
        onDayPress={({dateString}) => setDate(dateString)}
        markedDates={{
          ...calendar_data.reduce((acc, cur) => {
            acc[cur.date] = {
              marked: false,
              selected: true,
              selectedColor: cur.background,
            };
            return acc;
          }, {}),
          [Date]: {
            selected: true,
            selectedColor: '#84C8E3',
          },
        }}
      />

      <CalendarCard data={selectedData} date={Date} />
    </Body>
  );
};

export default CalendarScreen;
