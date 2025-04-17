import React from 'react';
import moment from 'moment';
import {styles} from './style';
import {View, Text} from 'react-native';
import {getLightColor} from '../../utils/Constants';

const CalendarCard = ({data, date}) => {
  const color = data?.background ?? '#ff5a5a';
  const normalBackground = data?.background ?? '#FF0000';
  const backgroundColor = getLightColor(data?.background ?? '#FF0000');

  return (
    <View style={styles.CalendarCardContainer}>
      <View style={[styles.CalendarCardInner, {backgroundColor}]}>
        <Text style={[styles.CalendarDate, {color}]}>
          {moment(date).format('MMMM D, YYYY')}
        </Text>
        <Text style={styles.CalendarProgress}>
          Progress: {data?.progress ?? '0'} minutes
        </Text>
      </View>
      <View style={{height: 10, backgroundColor: normalBackground}} />
    </View>
  );
};

export default CalendarCard;
