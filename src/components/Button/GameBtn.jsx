import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Text} from '..';

const GameBtn = ({data}) => {
  return (
    <View
      style={[
        styles.GameBTNCont,
        GlobalStyle.justify,
        {backgroundColor: data.color},
      ]}>
      <Text style={styles.GameBTNText} title={data.title} />
    </View>
  );
};

export default GameBtn;
