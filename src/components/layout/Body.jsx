import {SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Color} from '../../utils/Color';

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
