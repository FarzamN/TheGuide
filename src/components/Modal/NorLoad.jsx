import {Text} from '..';
import React from 'react';
import style from './style';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {View, ActivityIndicator} from 'react-native';

const NorLoad = () => {
  return (
    <View style={[GlobalStyle.justify, style.NorCont]}>
      <ActivityIndicator color={Color.white} size={'large'} />
      <Text
        title="Loading..."
        style={[style.NorText, GlobalStyle.textShadow]}
      />
    </View>
  );
};

export default NorLoad;
