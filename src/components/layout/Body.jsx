import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Color} from '../../utils/Color';

const Body = ({children, restyle}) => {
  return (
    <SafeAreaView style={[GlobalStyle.Container, restyle]}>
      <StatusBar
        backgroundColor={restyle ? 'white' : Color.Sky}
        barStyle={restyle ? 'dark-content' : 'light-content'}
      />
      {children}
    </SafeAreaView>
  );
};

export default Body;
