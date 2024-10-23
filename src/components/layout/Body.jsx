import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Color} from '../../utils/Color';

const Body = ({children, restyle}) => {
  return (
    <SafeAreaView style={[GlobalStyle.Container, restyle]}>
      <StatusBar backgroundColor={'#0808C2'} barStyle={'light-content'} />

      {children}
    </SafeAreaView>
  );
};

export default Body;
