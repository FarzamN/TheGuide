import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {TouchableOpacity} from 'react-native';

const BirthdayBtn = ({onPress, month, day, year}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.BDayBtn}>
      <Text style={styles.BDayText} title={day || 'Day'} />

      <Text style={styles.BDayText} title={month || 'Month'} />

      <Text style={styles.BDayText} title={year || 'Year'} />
    </TouchableOpacity>
  );
};

export default BirthdayBtn;
