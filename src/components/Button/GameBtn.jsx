import React from 'react';
import {styles} from './style';
import {tab} from '../../utils/Constants';
import {Text, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';

const GameBtn = ({title, onPress, index}) => {
  const colors = ['#00CE64', '#FD8D34', '#0088FE', '#792DFD'];

  const isTabSize = title.length >= 40 ? 15 : title.length >= 20 ? 17 : 22;
  const isMobileSize = title.length >= 40 ? 10 : title.length >= 20 ? 12 : 14; // title.length >= 20 ? 12 : 14;
  const fontSize = tab ? isTabSize : isMobileSize;
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
