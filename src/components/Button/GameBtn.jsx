import React from 'react';
import {styles} from './style';
import { tab } from '../../utils/Constants';
import {Text, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';

const GameBtn = ({title, onPress, index}) => {
  const colors = ['#00CE64', '#FD8D34', '#0088FE', '#792DFD'];
  const fontSize =tab ? 20 : title.length >= 30 ?  15 : title.length >= 30 ? 10 : 14;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.GameBTNCont,
        GlobalStyle.justify,
        {backgroundColor: colors[index % colors.length]},
      ]}>
      <Text style={[styles.GameBTNText, {fontSize}]} allowFontScaling>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default GameBtn;
