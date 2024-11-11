import {Text} from '..';
import React from 'react';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {View, ActivityIndicator} from 'react-native';

const NorLoad = () => {
  return (
    <View style={GlobalStyle.justify}>
      <ActivityIndicator color={Color.black} />
      <Text title="Loading..." />
    </View>
  );
};

export default NorLoad;
