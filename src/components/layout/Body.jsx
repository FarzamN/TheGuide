import React from 'react';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {SafeAreaView, StatusBar, View} from 'react-native';

const Body = ({children, restyle}) => {
  return (
    <View style={[GlobalStyle.Container, restyle]}>
      <SafeAreaView style={{backgroundColor: Color.status}} />
      <StatusBar backgroundColor={Color.status} barStyle={'light-content'} />
      {children}
    </View>
  );
};

export default Body;
