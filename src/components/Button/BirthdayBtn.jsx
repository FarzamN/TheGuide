import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {TouchableOpacity, View} from 'react-native';
import {Color} from '../../utils/Color';
import { GlobalStyle } from '../../utils/GlobalStyle';

const BirthdayBtn = ({onPress, month, day, year, white, optional}) => {
  return (
    <>
    <View style={[GlobalStyle.row,styles.BDayCont]}>
      <Text
        style={[styles.BDayTitle, {color: white ? Color.white : Color.black}]}
        title={'BirthDay'}
      />
      {optional && (
        <Text
          style={[styles.BDayTitle, {color: Color.grey}]}
          title={' (Optional)'}
        />
      )}
      </View>
      <TouchableOpacity onPress={onPress} style={styles.BDayBtn}>
        <Text style={styles.BDayText} title={day || 'Day'} />

        <Text style={styles.BDayText} title={month || 'Month'} />

        <Text style={styles.BDayText} title={year || 'Year'} />
      </TouchableOpacity>
    </>
  );
};

export default BirthdayBtn;
