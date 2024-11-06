import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';

const GameBtn = ({data, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.GameBTNCont,
        GlobalStyle.justify,
        {backgroundColor: data.color},
      ]}>
      <Text style={styles.GameBTNText} title={data.title} />
    </TouchableOpacity>
  );
};

export default GameBtn;
