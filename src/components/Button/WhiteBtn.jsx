import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';

const WhiteBtn = ({onPress, title, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.whiteStyle, GlobalStyle.justify, style]}>
      <Text style={styles.whiteFont} title={title} />
    </TouchableOpacity>
  );
};

export default WhiteBtn;
