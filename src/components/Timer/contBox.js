import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {View} from 'react-native';
import {end, start} from '../../utils/Data';
import {GlobalStyle} from '../../utils/GlobalStyle';
import LinearGradient from 'react-native-linear-gradient';

const ContBox = ({children, label}) => {
  return (
    <View style={[styles.timeSection, GlobalStyle.justify]}>
      <Text style={styles.label} title={label} />

      <LinearGradient
        start={start}
        end={end}
        colors={['#DEDEDE', '#B5B5B5']}
        style={[styles.InputCon, GlobalStyle.justify]}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default ContBox;
