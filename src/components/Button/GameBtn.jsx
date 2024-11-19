import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';

const GameBtn = ({title, onPress, index}) => {
  const colors = ['#00CE64', '#FD8D34', '#0088FE', '#792DFD'];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.GameBTNCont,
        GlobalStyle.justify,
        {backgroundColor: colors[index % colors.length]},
      ]}>
      <Text style={styles.GameBTNText} title={title} fontScaling />
    </TouchableOpacity>
  );
};

export default GameBtn;
