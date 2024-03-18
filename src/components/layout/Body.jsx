import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Color} from '../../utils/Color';

const Body = ({children}) => {
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <StatusBar backgroundColor={Color.Sky} barStyle={'light-content'} />
      {children}
    </SafeAreaView>
  );
};

export default Body;
