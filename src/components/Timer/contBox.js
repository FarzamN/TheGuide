import {View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Text} from '..';

const ContBox = ({children, label}) => {
  return (
    <View style={[styles.timeSection, GlobalStyle.justify]}>
      <Text style={styles.label} title={label} />

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#DEDEDE', '#B5B5B5']}
        style={[styles.InputCon, GlobalStyle.justify]}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default ContBox;
